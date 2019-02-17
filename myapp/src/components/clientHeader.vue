<template>
  <div id="clientHeader">
    <nav class="navbar navbar-expand-lg">
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
        <router-link to ="/profilePage" class="btn my-2 my-sm-0" id="logoBtn">Profile</router-link>
        <button class="btn my-2 my-sm-0" id="logoBtn" @click="logout">Logout</button>
      </div>
    </nav>
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
#logoBtn {
  margin-right: 10px;
  font-size: 1.2em;
  background-color: none;
  border: none;
  color: white;
  font-weight: bold;
  letter-spacing: .1em;
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
    font-size: 1.5em;
    letter-spacing: .1em;
  }
</style>

<script>
// @ is an alias to /src
import firebase from "firebase";
import router from "../router.js";

export default {
  name: "adminHeader",
  data() {
    return {};
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
  }
};
</script>






















