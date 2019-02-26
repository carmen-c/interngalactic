<template>
  <div class="Home">
    <div v-if="this.page =='company'" class="row">
      <adminHomePage/>
    </div>

    <div v-if="this.page =='intern'" class="row">
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
      page: "",
      adminPage: this.store.adminPage
    };
  },
  methods: {
    changePage: function(value) {
      this.store.adminPage = value;
      this.adminPage = this.store.adminPage;
    }
  },

  beforeCreate: function() {
    if (this.store.userType == "") {
      var currentuser = firebase.auth().currentUser;
      var ref = firebase
        .firestore()
        .collection("users")
        .doc(currentuser.uid);

      ref.get().then(doc => {
        if (!doc.exists) {
          alert("doc does not exist");
        } else {
          //            console.log(doc.data());
          this.store.username = doc.data().name;
          this.store.userType = doc.data().userType;
          this.page = this.store.userType;
          console.log(this.page);
        }
      });
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