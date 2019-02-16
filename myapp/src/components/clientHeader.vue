<template>
  <div id="clientHeader">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src="../../images/InternLogo.svg" id="internLogo">
      <a class="navbar-brand" href="#">InternGalactic</a>
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
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          id="logoBtn"
          type="submit"
        >Profile</button>
        <button class="btn btn-outline-success my-2 my-sm-0" id="logoBtn" @click="logout">Logout</button>
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
}
.navbar-brand {
  font-family: "Comfortaa", cursive;
  color: white !important;
}
#internLogo {
  width: 60px;
  margin-left: 10px;
  margin-right: 15px;
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






















