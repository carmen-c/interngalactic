<template>
  <div class="internHomePage bg container-fluid">
    <ClientHeader/>
    <img id="internPageImgStroke" src="../../images/strokeLOGO.svg">
    <div class="container h-50">
      <div class="row align-items-center h-100">
        <div class="col-10 mx-auto">
          <div class="bg-title">
            <b>Help us find what you are looking for.</b>
            <br>
          </div>
          <div class="searchForm">
            <h1 class="internh1" id="internWhat">What:</h1>
            <input
              type="text"
              placeholder="Internship Title"
              v-model="keyword"
              class="input-style"
              style="font-size:1.5em;
                          padding:1em;"
            >
            <h1 class="internh1" id="internWhere">Where:</h1>
            <input
              type="text"
              placeholder="Location"
              v-model="location"
              class="input-style"
              style="font-size:1.5em;
                          padding:1em;"
            >
            <!-- <b-dropdown id="__BVID__27__BV_toggle_" class="dropdown" :text="dropdown">
              
              <b-dropdown-item @click="dropdownSelect('Relevance')" 
                               value="Relevance"
                               >Relevance</b-dropdown-item>
              <b-dropdown-item @click="dropdownSelect('Date Posted')"
                               value="Date Posted"
                               >Date Posted</b-dropdown-item>
              <b-dropdown-item @click="dropdownSelect('Location')"
                               >Location</b-dropdown-item>
            </b-dropdown>-->
          </div>
          <br>
          <button
            class="btn searchBtn"
            @click="handleSearch"
            style="font-size:1.5em;
                          padding:1em;"
          >Search</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#__BVID__27__BV_toggle_ {
  width: 20px;
  height: 3rem;
  width: 3rem;
  color: white;
  margin-left: 1%;
  background-color: #3369e8 !important;
  border-radius: 1em;
}
.searchBtn {
  margin-top: 2%;
  color: #fff !important;
  font-weight: bold !important;
  background-color: #3369e8 !important;
  padding: 0 1.5rem !important;
  border-radius: 0.5rem !important;
  height: 3rem;
  width: 14rem;
}
#internPageImgStroke {
  position: absolute;
  transform: rotate(-10deg);
  top: 100px;
  left: 0px;
  width: 900px;
  height: auto;
  opacity: 0.02;
  overflow: hidden;
}
.container-fluid {
  padding-right: 0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;
}
.inputContainer {
  display: flex;
  color: white;
}
.bg {
  overflow: hidden;
  height: 100vh;
  background-color: #0b0b0b;
}
.bg-title {
  color: #fff;
  padding-top: 20%;
  font-size: 4em;
  margin-bottom: 3%;
}
.internh1 {
  color: white;
  margin-right: 1%;
  margin-left: 3%;
}
.searchForm {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.input-style {
  background-color: #fff;
  border: none;
  border-radius: 2px;
  padding: 0.5rem;
  height: 3rem;
  width: 20rem;
}
.input-left-round {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.input-right-round {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
/*
  @media only screen and (max-width: 906px ) {
  .internh1 {
    margin-right: 10%;
  } 
    #internWhere {
      margin-left: 8%;
    }
    .input-style {
      margin-right: 1%;
      margin-left: -9%;
    }
  }
*/

/*
@media only screen and (min-width: 413px ) {
  #internWhat {
    padding-left: 15px;
  }
  .bg-title {
    margin-bottom: 10%;
  }
  }
*/
</style>
<script>
import ClientHeader from "@/components/clientHeader.vue";
import firebase from "firebase";

export default {
  name: "internHomePage",
  components: {
    ClientHeader
  },
  data() {
    return {
      keyword: "",
      location: "",
      jobsArray: []
    };
  },
  methods: {
    getJobs: function() {
      this.jobsArray = [];
      var jobs = firebase.firestore().collection("jobs");
      jobs.get().then(snapshot => {
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
      var newResult = this.jobsArray.filter(post => {
        var match = new RegExp(this.keyword.toLowerCase(), "g");
        var arr = post.position.toLowerCase().match(match);
        return arr;
      });
      this.store.searchKey = this.keyword;
      this.store.searchResults = newResult;
      this.$router.replace("/jobFeedPage");
    },
    locationSearch: function() {
      var newResult = this.jobsArray.filter(post => {
        var match = new RegExp(this.location.toLowerCase(), "g");
        var arr = post.location.toLowerCase().match(match);
        return arr;
      });
      this.store.searchLoc = this.location;
      this.store.searchResults = newResult;
      this.$router.replace("/jobFeedPage");
    },
    plSearch: function() {
      var newResult = this.jobsArray.filter(post => {
        var match = new RegExp(this.location.toLowerCase(), "g");
        var match2 = new RegExp(this.keyword.toLowerCase(), "g");
        var arr =
          post.location.toLowerCase().match(match) &&
          post.position.toLowerCase().match(match2);
        return arr;
      });
      this.store.searchKey = this.keyword;
      this.store.searchLoc = this.location;
      this.store.searchResults = newResult;
      this.$router.replace("/jobFeedPage");
    }
  },
  created: function() {
    this.getJobs();
  }
};
</script>
















