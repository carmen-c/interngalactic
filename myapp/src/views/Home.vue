<template>
  <div class="Home">
    <div v-if="this.page =='company'" class="row">
      <adminHomePage/>
    </div>

    <div v-if="this.page =='intern'" class="row">
      <internHomePage/>
    </div>
    <div class="container-fluid">
        <pageFooter />
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import internHomePage from "@/components/internHomePage.vue";
import adminHomePage from "@/components/adminHomePage.vue";
import firebase from "firebase";
import pageFooter from "@/components/pageFooter.vue";

export default {
  name: "home",
  components: {
    internHomePage,
    adminHomePage,
    pageFooter
  },
  data() {
    return {
      page: "intern"
    };
  },
  created: function() {
    if (this.page == "") {
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