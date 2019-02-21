<template>
  <div class="currentJobPost">
    <div class="form-row pleasefilloutTxt">
      <h1>Applicants.</h1>
    </div>

    <!--	REPLACE WITH COMPONENT FOR JOB POST	  -->
    <Applicants v-for="a in applicants" v-bind:name="a.name" v-bind:position="a.position"/>
  </div>
</template>

<style>
.pleasefilloutTxt h1 {
  font-size: 3em;
  margin-bottom: 1%;
  border-bottom: 1px solid black;
  border-bottom-style: dotted;
  width: 50%;
}
.pleasefilloutTxt {
  margin-top: 2%;
}
</style>

<script>
// @ is an alias to /src
import AdminHeader from "@/components/adminHeader.vue";
import firebase from "firebase";
import Applicants from "@/components/applicants.vue";

export default {
  name: "currentJobPost",
  components: {
    AdminHeader,
    Applicants
  },
  data() {
    return {
      posts: [],
      applicants: []
    };
  },
  methods: {
    checkApply: function() {
      //find posts that are mine
      const currentUser = firebase.auth().currentUser;

      var ref = firebase.firestore().collection("apply");
      var query = ref.where("author", "==", currentUser.uid);

      query
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            var data = doc.data();
            // console.log(data);
            this.posts.push(data);
          });
        })
        .then(() => {
          //   console.log(this.posts);
          this.getJobs();
        });
      //find post data

      //find applicants that applied to job
      //display data
    },
    getJobs: function() {
      //for each post that has applicants, grab post data and loop through users to grab user data
      var jobs = firebase.firestore().collection("jobs");
      var usersc = firebase.firestore().collection("users");

      this.posts.forEach(post => {
        // console.log(post);
        var thing = new Object();

        jobs
          .where("post_id", "==", post.post_id)
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              thing.position = doc.data().position;
            });
          });

        post.users.forEach(user => {
          usersc
            .doc(user)
            .get()
            .then(doc => {
              if (doc.exists) {
                // console.log(doc.data());
                var data = doc.data();
                thing.name = doc.data().name;
              }
            });
          this.applicants.push(thing);
          // console.log(this.applicants);
        });
      });
    }
  },
  mounted: function() {
    this.checkApply();
  }
};
</script>