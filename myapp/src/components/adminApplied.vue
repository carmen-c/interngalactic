<template>
  <div class="currentJobPost">
    <div class="form-row pleasefilloutTxt">
      <h1>Applicants.</h1>
    </div>

    <!--	REPLACE WITH COMPONENT FOR JOB POST	  -->
    <applicants
      v-for="person in this.alist"
      v-if="person.position != 'deleted'"
      v-bind:aname="person.name"
      v-bind:aposition="person.position"
      v-bind:aresume="person.resume"
    />
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
import applicants from "@/components/applicants.vue";

export default {
  name: "currentJobPost",
  components: {
    AdminHeader,
    applicants
  },
  data() {
    return {
      posts: [],
      alist: [],
      refresh: false
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
            this.posts.push(data);
          });
        })
        .then(() => {
          this.getJobs();
        });
    },
    getJobs: function() {
      this.alist = [];
      this.store.alist = [];
      var jobs = firebase.firestore().collection("jobs");
      var usersc = firebase.firestore().collection("users");

      this.posts.forEach(post => {
        var thing = new Object();

        jobs
          .where("post_id", "==", post.post_id)
          .get()
          .then(snapshot => {
            if (snapshot.empty == true) {
              thing.position = "deleted";
            } else {
              snapshot.forEach(doc => {
                if (doc.exists) {
                  thing.position = doc.data().position;
                }
              });
            }
          });

        post.users.forEach(user => {
          usersc
            .doc(user)
            .get()
            .then(doc => {
              if (doc.exists) {
                var data = doc.data();
                thing.name = doc.data().name;
                thing.resume = doc.data().resume;
                this.alist.push(thing);
              }
            });
          //console.log(this.store.alist);
        });
      });
    }
  },
  created: function() {
    this.checkApply();
  }
};
</script>