<template>
  <div class="currentJobPost">
    <div class="form-row pleasefilloutTxt">
      <h1>{{activePosts.length}} Active Internships</h1>
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
      v-bind:post_date="job.post_date"
      v-on:refreshit="checkPosts"
    />
  </div>
</template>

<style>
.pleasefilloutTxt h1 {
  font-size: 3em;
  margin: 5%;
  border: none;
}
.pleasefilloutTxt {
  margin-top: 2%;
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
      this.activePosts = [];
      var currentUser = firebase.auth().currentUser;
      var jobs = firebase.firestore().collection("jobs");

      // search jobs collection for posts the logged in user created and then grab the posts
      var query = jobs
        .where("uid", "==", currentUser.uid)
        .orderBy("post_date", "desc");

      // after i get my posts put it in activePosts array
      query.get().then(
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
              description: data.description,
              post_date: data.post_date
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