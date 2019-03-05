<template>
  <div id="clientHeader">
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
              <router-link to ="/profilePage" class="btn my-2 my-sm-0 dropdownTxt">
                <img :src="ClientHeaderImage" id="smallProfileImg">&nbsp;&nbsp;</router-link>
              <b-dropdown id="ddown1__BV_toggle_1234" 
                          style="font-size:1.5em;"
                          text="Profile">
                <b-dropdown-item>
                  <router-link to ="/jobFeedPage" class="btn my-2 my-sm-0" dropdownTxt>Internships</router-link></b-dropdown-item>
                <b-dropdown-item>
                  <router-link to ="/profilePage" class="btn my-2 my-sm-0 dropdownTxt">Profile</router-link></b-dropdown-item>
                <b-dropdown-item>
                  <router-link to ="/internHomePage" class="btn my-2 my-sm-0 dropdownTxt">Search</router-link></b-dropdown-item>
                <b-dropdown-item>
                  <button class="btn my-2 my-sm-0 dropdownTxt" @click="logout">Logout</button></b-dropdown-item>
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
            <router-link to="/jobFeedPage" class="btn my-2 my-sm-0 dropdownTxt">Internships</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/internHomePage" class="btn my-2 my-sm-0 dropdownTxt">Search</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/profilePage" class="btn my-2 my-sm-0 dropdownTxt">Profile</router-link>
          </b-nav-item>
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
<style>
.navbar {
  background: linear-gradient(-135deg, #c850c0, #4158d0);
}
#ddown1__BV_toggle_1234 {
  /*    color: white;*/
  height: 25px;
  font-size: 1.7em;
}
#smallProfileImg {
  width: 28px;
  border-radius: 50%;
}
#logoBtn {
  margin-right: 10px;
  font-size: 1.2em;
  background-color: none;
  border: none;
  color: white;
  font-weight: bold;
  letter-spacing: 0.1em;
}
#logoBtn:hover {
  background-color: none !important;

  color: black;
}
.navbar-brand {
  font-family: "Comfortaa", cursive;
  color: white !important;
}
#internLogoClient {
  width: 70px;
  padding: 5px;
  margin-left: 10px;
  margin-right: 15px;
}
#internGalacticC {
  font-size: 1.75em;
  letter-spacing: 0.1em;
}
.dropdownTxt {
  color: #ffffff !important;
}
.ml-auto {
  margin-right: 20px;
}
</style>

<script>
// @ is an alias to /src
import firebase from "firebase";
import router from "../router.js";

export default {
  name: "adminHeader",
  data() {
    console.log(this.store);
    return {
      ClientHeaderImage: this.store.uploadedImage
    };
  },
  components: {},
  methods: {
    data: function() {
      ClientHeaderImage: this.store.uploadedImage;
    },
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
  }
};
</script>






















