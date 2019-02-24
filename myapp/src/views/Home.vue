<template>
  <div class="Home">
    <div v-if="page=='company'" class="row">
      <adminHomePage/>
    </div>

    <div v-if="page=='intern'" class="row">
      <internHomePage/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import internHomePage from "@/components/internHomePage.vue";
import adminHomePage from "@/components/adminHomePage.vue";
import firebase from "firebase";

export default {
  name: "home",
  components: {
    internHomePage,
    adminHomePage
  },
  data() {
    return {
      page: "intern",
      adminPage: this.store.adminPage
    };
  },
  methods: {
    changePage: function(value) {
      this.store.adminPage = value;
      this.adminPage = this.store.adminPage;
    },
    getUserInfo: function() {
      var currentuser = firebase.auth().currentUser;
      var ref = firebase
        .firestore()
        .collection("users")
        .doc(currentuser.uid);

      ref
        .get()
        .then(doc => {
          if (!doc.exists) {
            alert("doc does not exist");
          } else {
            //            console.log(doc.data());
            this.store.username = doc.data().name;
            this.store.userType = doc.data().userType;
            this.page = doc.data().userType;
          }
        })
        .catch(err => {
          alert(err.message);
        });
    }
  },

  created: function() {
    if (this.store.userType == "") {
      this.getUserInfo();
    } else {
      //do nothing
    }
  }
};
</script>
<style>
.Home {
  overflow: hidden;
}
</style>