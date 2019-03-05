<template>
  <div id="adminHeader">
    <!-- <nav class="navbar navbar-expand-lg">
      <img src="../../images/InternLogo.svg" id="internLogoClient">
      <a class="navbar-brand" href="#" id="internGalacticC">Intern Galactic</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
<!--
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          id="logoBtn"
          type="submit"
        >Profile</button>
    -->
    <!-- <div class="dropDown">
            <b-form inline>
              <router-link to ="/adminHomePage" class="btn my-2 my-sm-0 dropdownTxt">
                <img src="../../images/TD.png" id="smallProfileImg">&nbsp;&nbsp;</router-link>
              <b-dropdown id="ddown1__BV_toggle_1234" 
                          style="font-size:1.5em;"
                          text="COMPANY">
                <b-dropdown-item>
              <button class="btn my-2 my-sm-0 dropdownTxt" @click="logout">Logout</button>
  </b-dropdown-item>
  </b-dropdown>
  </b-form>
  </div>
  </div>
    </nav>-->
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
  <!--
    <div class="header col-md-12">
      <div class="banner">
        <div class="banner-title">Welcome Back, {{this.store.username}}!</div>
      </div>
    </div>
  -->
</template>


<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css?family=Comfortaa");

/*
  .banner-title {
    color: WHITE;
  }
*/
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

