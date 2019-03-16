<template>
  <div id="adminHeader">
    <b-navbar toggleable="lg" variant="info">
      <b-navbar-brand>
        <img src="../../images/InternLogo.svg" id="internLogoClient">
        Intern Galactic
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse" class="togglebtn"/>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <button class="btn my-2 my-sm-0 dropdownTxt" @click="logout">Logout</button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css?family=Comfortaa");

</style>
<style scoped>
.navbar {
  /* background: none; */
  /* background-color: #fff !important; */
}
</style>


<script>
// @ is an alias to /src
import firebase from "firebase";
import router from "../router.js";

export default {
  name: "adminHeader",
  data() {
    return {
      username: ""
    };
  },
  components: {},
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(
          function() {
            console.log("Signed Out");
            router.replace("/");
          },
          function(error) {
            console.error("Sign Out Error", error);
          }
        );
    }
  },
  created: function() {
    this.username = this.store.username;
  }
};
</script>

