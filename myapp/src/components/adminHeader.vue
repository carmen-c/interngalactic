<template>
  <div id="adminHeader">
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
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-success my-2 my-sm-0" id="logoBtn" type="submit">Logout</button>
        </form>
      </div>
    </nav>
    <div class="header col-md-12">
      <div class="banner">
        <div class="banner-title">Welcome Back, {{username}}!</div>
      </div>
    </div>
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
  width: 50px;
  margin-left: 10px;
  margin-right: 12px;
}
.header {
  padding: 0 !important;
}
</style>

<script>
// @ is an alias to /src
import firebase from "firebase";

export default {
  name: "adminHeader",
  data() {
    return {
      username: "user"
    };
  },
  components: {},
  methods: {
    getName: function() {
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
            this.username = doc.data().name;
          }
        })
        .catch(err => {
          alert(err.message);
        });
    }
  },
  mounted() {
    this.getName();
  }
};
</script>

