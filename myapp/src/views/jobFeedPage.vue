<template>
  <div class="jobFeedPage">
    <clientheader/>
    <div class="row">
      <!-- ******* LEFT SIDE OF THE PAGE *************		 -->
      <!-- <div class="col-md-3 marginTop linkStyles" id="leftSideStyle"> -->
               <!-- <hr class="line"> -->
        <!-- <div class="recent-Location">
          <h2 class="h4MarginBottom">Search Locations</h2>
          <ul>
            <li >Vancouver</li>
          </ul>
          <p>
            <a @click="this.clickLocation('Vancouver')" class="clickLocation" href="#">Vancouver</a>
          </p>
          <p>
            <a @click="this.clickLocation('Burnaby')" class="clickLocation">Burnaby</a>
          </p>
          <p @click="this.clickLocation('Richmond')" class="clickLocation">
            <a href="#">Richmond</a>
          </p>
          <p @click="this.clickLocation('Coquitlam')" class="clickLocation">
            <a href="#">Coquitlam</a>
          </p>
          <p @click="this.clickLocation('Surrey')" class="clickLocation">
            <a href="#">Surrey</a>
          </p>
        </div> -->
        <!-- <hr class="line"> -->
        <!--
        <div class="recent-Location">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Clear All Searches</button>
        </div>
        -->
      <!-- </div> -->

      <!--<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>-->
      <!--******* RIGHT SIDE OF THE PAGE *************		 -->
      <div class="col-md-12">
        <div class="test1 m-0">
          <div class="row">
            <!--DROP DOWN MENU -->
            <div class="col-xs-12 col-md-12 dropDown">
              <div>
                <b-form inline>
                  <i class="fas fa-pager icon"></i>
                  <b-input
                    class="mb-2 mr-sm-2 mb-sm-0"
                    id="inlineFormInputName2"
                    placeholder="Internship Title"
                    @change="handleSearch"
                    v-model="keyword"
                  />
                  
                  <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                    <i class="fas fa-map-marker-alt icon"></i>
                    <b-input
                      id="inlineFormInputGroupUsername2"
                      placeholder="Location"
                      @change="handleSearch"
                      v-model="location"
                    />
                  </b-input-group>
                  <b-input-group>
                    <i class="fas fa-scroll icon"></i>
                  </b-input-group>
                  <h3 class="inlineFormInputGroupUsername2 internshipNumber m-0">Internships Found: {{jobsArray.length}}</h3>
                </b-form>
              </div>        
            </div>
          </div>
        </div>
        <!--	THIS SECTION CREATE TEMPLATE THAT CAN REPEAT	  -->
        <div class="overflow-auto col-md-12" v-if="jobsArray.length != 0">
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
          <div class="container-fluid">
            <button id="nextButton" v-if="nextVisible == true" @click="getMoreJobs">next</button>
          </div>
        </div>
        <div v-else>
          <img src="../../images/nointernbg.svg" width="30%"/>
          <h1>Sorry, there are currently no more internships.</h1>
        </div>
        <!--	PUT THE ACCORDION HERE	  -->
      </div>
    </div>
    <div class="container-fluid">
      <pageFooter/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import clientheader from "@/components/clientHeader.vue";
import firebase from "firebase";
import pageFooter from "@/components/pageFooter.vue";
import jobPostContainer from "@/components/jobPostContainer.vue";
// Boot Strap Vue
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "LoginPage",
  components: {
    clientheader,
    jobPostContainer,
    pageFooter
  },
  data() {
    return {
      jobsArray: [],
      keyword: "",
      location: "",
      allJobs: [],
      nextPage: "",
      nextVisible: true
    };
  },
  created: function() {
    // console.log(this.store.searchResults);
    if (this.store.searchResults.length == 0) {
      this.getInitialJobs();
    } else {
      this.keyword = this.store.searchKey;
      this.location = this.store.searchLoc;
      this.jobsArray = this.store.searchResults;
    }
  },
  methods: {
    clickLocation: function(pass) {
      this.location = pass;
      this.handleSearch();
    },
    getInitialJobs: function() {
      var firstJobs = firebase
        .firestore()
        .collection("jobs")
        .orderBy("post_date")
        .limit(10);
      this.getJobs(firstJobs);
    },
    getMoreJobs: function() {
      this.getJobs(this.nextPage);
    },
    getJobs: function(aRef) {
      this.jobsArray = [];
      aRef
        .get()
        .then(snapshot => {
          // Get the last document
          var last = snapshot.docs[snapshot.docs.length - 1];

          // Construct a new query starting at this document.
          if (last == undefined) {
            // alert("no more jobs");
            this.nextVisible = false;
            // if we go back to first page
            // this.getInitialJobs();
          } else {
            var next = firebase
              .firestore()
              .collection("jobs")
              .orderBy("post_date")
              .startAfter(last.data().post_date)
              .limit(10);
            this.nextPage = next;
          }

          //handle data
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
          // console.log(this.allJobs);
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
  width: 100%;
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
  border: none;
  border-bottom:#7fd686 1px solid;
}
#inlineFormInputGroupUsername2 {
  font-size: 1.5em;
  height: 30px;
  border:none;
  border-bottom:#7fd686 1px solid;
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
#nextButton {
  margin-top: 2%;
  color: #fff !important;
  font-weight: bold !important;
  background-color: #7fd686 !important;
  border: none;
  padding: 0 1.5rem !important;
  height: 3rem;
  width: 14rem;
  font-size: 1.5em;
}
#leftSideStyle {
  border-right: 1px;
  /*    background-color: red;*/
  border-right-color: #7fd686;
  border-left-color: #fff;
  border-top-color: #fff;
  border-bottom-color: #fff;
  border-style: solid;
}
.clickLocation:hover, .clickLocation:active{
  color: #7fd686;
  text-decoration: none;
}
.icon {
  font-size: 2em; 
  margin-left: 10px; 
  padding: 5px;
  color: #7fd686;
}
.internshipNumber {
  color: #999;
  font-weight: 400;
}
</style>
























