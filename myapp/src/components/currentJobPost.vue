<template>
  <div class="currentJobPost">
    <div class="row">
      <div class="container">
        <h2 class="text-left">Your active job postings.</h2>
      </div>
    </div>

    <!--	REPLACE WITH COMPONENT FOR JOB POST	  -->
    <adminActive
      v-for="job in activePosts"
      v-bind:post_id="job.post_id"
      v-bind:position="job.position"
      v-bind:company="job.company"
      v-bind:location="job.location"
      v-bind:description="job.description"
      v-bind:start="job.start_date"
      v-bind:end="job.end_date"
    />
  </div>
</template>

<style>
.text-left {
  text-align: left;
}
</style>

<script>
// @ is an alias to /src
import AdminHeader from "@/components/adminHeader.vue";
import firebase from "firebase";
import adminActive from "@/components/adminActive.vue";

export default {
  name: "currentJobPost",
  components: {
    AdminHeader,
    adminActive
  },
  data() {
    return {
      clickedpost: "",
      activePosts: []
    };
  },
  methods: {
    checkPosts: function() {
      var currentUser = firebase.auth().currentUser;
      var jobs = firebase.firestore().collection("jobs");

      // search jobs collection for posts the logged in user created and then grab the posts
      var query = jobs.where("uid", "==", currentUser.uid).get();

      // after i get my posts put it in activePosts array
      query.then(
        snapshot => {
          snapshot.forEach(doc => {
            var data = doc.data();
            //          console.log(data); see what posts you get back from firestore
            this.activePosts.push({
              post_id: data.post_id,
              uid: data.uid,
              position: data.position,
              company: data.company,
              location: data.location,
              start_date: data.start_date,
              end_date: data.end_date,
              description: data.description
            });
          });
        },
        err => {
          alert(err.message);
        }
      );
    }
  },
  mounted: function() {
    this.checkPosts();
  }
};
</script>