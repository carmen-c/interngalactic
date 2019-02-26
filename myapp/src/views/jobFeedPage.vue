<template>
  <div class="jobFeedPage">
    <clientheader/>
    <div class="row">
      <!--******* LEFT SIDE OF THE PAGE *************		 -->
      <div class="col-md-3 marginTop linkStyles">
        <div class="recent-Location">
          <h2 class="h4MarginBottom">JobType:</h2>
          <p>
            <a href="#">Graphic Designer</a>
          </p>
          <p>
            <a href="#">Developer</a>
          </p>
          <p>
            <a href="#">Content Creator</a>
          </p>
          <p>
            <a href="#">UI/UX Design</a>
          </p>
          <p>
            <a href="#">Marketing</a>
          </p>
        </div>
        <hr class="line">
        <div class="recent-Location">
          <h2 class="h4MarginBottom">Locations:</h2>
          <p>
            <a href="#">Vancouver</a>
          </p>
          <p>
            <a href="#">Burnaby</a>
          </p>
          <p>
            <a href="#">Richmond</a>
          </p>
          <p>
            <a href="#">Coquitlam</a>
          </p>
          <p>
            <a href="#">Surrey</a>
          </p>
        </div>
        <hr class="line">
<!--
        <div class="recent-Location">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Clear All Searches</button>
        </div>
-->
      </div>

      <!--<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>-->
      <!--******* RIGHT SIDE OF THE PAGE *************		 -->
      <div class="col-md-9">
        <div class="test1">
          <div class="row">
            <!--DROP DOWN MENU -->
            <div class="col-xs-12 col-md-12 dropDown">
              <div>
                <b-form inline>
                  <b-input
                    class="mb-2 mr-sm-2 mb-sm-0"
                    id="inlineFormInputName2"
                    placeholder="Internship Title"
                    @change="handleSearch"
                    v-model="keyword"
                  />
                  <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input
                      id="inlineFormInputGroupUsername2"
                      placeholder="Location"
                      @change="handleSearch"
                      v-model="location"
                    />
                  </b-input-group>
                  <div>
                    <b-dropdown id="ddown1" text="Sort By" class="m-md-2">
                      <b-dropdown-item>Most Recent</b-dropdown-item>
                    </b-dropdown>
                  </div>
                </b-form>
              </div>
            </div>
          </div>
        </div>
        <!--	THIS SECTION CREATE TEMPLATE THAT CAN REPEAT	  -->
        <jobPostContainer
          v-for="job in jobsArray"
          v-bind:post_id="job.post_id"
          v-bind:position="job.position"
          v-bind:company="job.company"
          v-bind:location="job.location"
          v-bind:description="job.description"
          v-bind:start="job.start_date"
          v-bind:end="job.end_date"
          v-bind:post_date="job.post_date"
          v-bind:author="job.uid"
        />
        <!--	PUT THE ACCORDION HERE	  -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import clientheader from "@/components/clientHeader.vue";
import firebase from "firebase";
import jobPostContainer from "@/components/jobPostContainer.vue";
// Boot Strap Vue
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "LoginPage",
  components: {
    clientheader,
    jobPostContainer
  },
  data() {
    return {
      jobsArray: [],
      keyword: "",
      location: "",
      allJobs: []
    };
  },
  created: function() {
    console.log(this.store.searchResults);
    if (this.store.searchResults.length == 0) {
      this.getJobs();
    } else {
      this.keyword = this.store.searchKey;
      this.location = this.store.searchLoc;
      this.jobsArray = this.store.searchResults;
    }
  },
  methods: {
    getJobs: function() {
      this.jobsArray = [];
      var jobs = firebase.firestore().collection("jobs");
      jobs
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            var data = doc.data();
            this.jobsArray.push({
              post_id: data.post_id,
              uid: data.uid,
              position: data.position,
              company: data.company,
              location: data.location,
              start_date: data.start_date,
              end_date: data.end_date,
              description: data.description,
              post_date: data.post_date
            });
          });
        })
        .then(() => {
          this.allJobs = this.jobsArray;
          console.log(this.allJobs);
        });
    },
    handleSearch: function() {
      if (this.keyword.length != 0 && this.location.length != 0) {
        this.plSearch();
      } else if (this.keyword.length != 0) {
        this.positionSearch();
      } else if (this.location.length != 0) {
        this.locationSearch();
      } else {
        this.getJobs();
      }
    },
    positionSearch: function() {
      var newResult = this.allJobs.filter(post => {
        var match = new RegExp(this.keyword.toLowerCase(), "g");
        var arr = post.position.toLowerCase().match(match);
        return arr;
      });
      this.jobsArray = newResult;
    },
    locationSearch: function() {
      var newResult = this.allJobs.filter(post => {
        var match = new RegExp(this.location.toLowerCase(), "g");
        var arr = post.location.toLowerCase().match(match);
        return arr;
      });
      this.jobsArray = newResult;
    },
    plSearch: function() {
      var newResult = this.allJobs.filter(post => {
        var match = new RegExp(this.location.toLowerCase(), "g");
        var match2 = new RegExp(this.keyword.toLowerCase(), "g");
        var arr =
          post.location.toLowerCase().match(match) &&
          post.position.toLowerCase().match(match2);
        return arr;
      });
      this.jobsArray = newResult;
    }
  }
};
</script>

<style>
@import url("//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css");
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");

.col-md-3 {
}
.col-md-9 {
}
/*	*******************************  */
.line {
  margin-top: 20px;
  margin-left: 70px;
  width: 50%;
  border: 0.5px solid #7fd686;
}
/*	*******************************  */
/*	Left Side  */
.recent-Location {
  text-align: left;
  padding-left: 70px;
}
.recent-Location button {
  /*    background-color:*/
  width: 180px;
  height: 38px;
  text-align: center;
  justify-content: center;
  font-size: 1.5em;
}
.marginTop {
  margin-top: 50px;
}
.h4MarginBottom {
  margin-bottom: 20px;
  font-size: 2.25em;
}
.linkStyles a {
  color: black;
  font-size: 1.5em;
}
.linkStyles {
}
/*	*******************************  */
/*	Right Side  */
.dropDown {
  padding: 20px;
}
.inputWidth {
  width: 200px;
}
#inlineFormInputName2 {
  font-size: 1.5em;
  height: 30px;
}
#inlineFormInputGroupUsername2 {
  font-size: 1.5em;
  height: 30px;
}
.test1 {
  justify-content: left;
  display: flex;
  padding: 20px;
}
.jobFeedPage {
  overflow: hidden;
}
.test1 {
  margin-left: 30px;
}
</style>
























