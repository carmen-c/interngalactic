<template>
  <div class="LoginPage">
    <div class="row">
      <div class="col-5 leftContainer">
        <img id="StrokeImg" src="../../images/strokeLOGO.svg">
        <div class="container infoText">
          <div class="row infoContainer">
            <div class="col textAlignRight">
              <img class="leftIcon" src="../../images/find.svg">
            </div>
            <div class="col">
              <p class="leftText">Find internships most relevant to you.</p>
            </div>
            <div class="w-100"></div>
            <div class="col textAlignRight">
              <img class="leftIcon" src="../../images/getintouch.svg">
            </div>
            <div class="col">
              <p class="leftText">Browse hundreds of intern opportunities.</p>
            </div>
            <div class="w-100"></div>
            <div class="col textAlignRight">
              <img class="leftIcon" src="../../images/browse.svg">
            </div>
            <div class="col">
              <p
                class="leftText"
              >Get in touch with companies and clients with the click of a button.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-7 rightContainer">
        <div class="col-12">
          <div class="form-inline float-right userLoginInput">
            <input
              type="email"
              name="loginEmail"
              class="form-control inputMargins"
              v-model="loginEmail"
              placeholder="Email"
              style="font-size:1.5em;
                      padding-top:15px;padding-bottom:15px;"
            >
            <input
              type="password"
              name="loginPass"
              class="form-control inputMargins"
              v-model="password"
              placeholder="Password"
              style="font-size:1.5em;
                      padding-top:15px;padding-bottom:15px;"
            >
            <button
              @click="login"
              type="submit"
              class="btn btn-default inputMargins"
              id="signinBtn"
            >Login</button>
          </div>
        </div>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

        <div class="container registerContainer">
          <div class="col-6 registerMargin" id="#">
            <img class="rightLogo" src="../../images/InternLogo.svg">
            <br>
            <br>
            <h3
              class="searchTxt"
            >Searching the Galaxy to find you the internship opportunities you deserve.</h3>
            <br>
            <br>
            <br>
            <p class="fontSizeTxts">I would like to register as:</p>
            <div class="btn-group">
              <button
                class="btn user-class"
                :class="{'selected':userType=='company'}"
                @click="selectType('company')"
                style="font-size:1.5em;
                     letter-spacing:0.5px;"
              >
                <b>Company</b>
              </button>
              <button
                class="btn user-class"
                :class="{'selected':userType=='intern'}"
                @click="selectType('intern')"
                style="font-size:1.5em;
                     letter-spacing:0.5px;"
              >
                <b>Intern</b>
              </button>
            </div>
            <div class="marginInput registerWidthInput">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  v-model="email"
                  style="font-size:1.5em;
                      padding-top:15px;padding-bottom:15px;"
                >
              </div>
              <div class="form-group">
                <input
                  type="name"
                  class="form-control"
                  v-model="name"
                  placeholder="Full Name"
                  style="font-size:1.5em;
                      padding-top:15px;padding-bottom:15px;"
                >
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="password"
                  style="font-size:1.5em;
                      padding-top:15px;padding-bottom:15px;"
                >
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  v-model="retypePass"
                  placeholder="Re-type Password"
                  style="font-size:1.5em;
                      padding-top:15px;padding-bottom:15px;"
                >
              </div>
              <button @click="signup" class="btn btn-default" id="registerBtn">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/Register.vue";
import firebase from "firebase";

export default {
  name: "LoginPage",
  components: {},
  data() {
    return {
      userType: "",
      email: "",
      name: "",
      password: "",
      retypePass: "",
      loginEmail: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.loginEmail, this.password)
        .then(
          user => {
            this.getUserInfo();
          },
          err => {
            alert(err.message);
          }
        );
    },
    signup: function() {
      if (this.password == this.retypePass) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              alert("account created");
              console.log(user);
              var ref = firebase
                .firestore()
                .collection("users")
                .doc(user.user.uid);
              ref.set({
                name: this.name,
                email: this.email,
                password: this.password,
                userType: this.userType
              });
            },
            function(err) {
              alert("error");
            }
          );
      }
    },
    selectType: function(type) {
      this.userType = type;
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
          }
        })
        .then(() => {
          console.log(this.store.username, this.store.userType);
          this.$router.push("/home");
        })
        .catch(err => {
          alert(err.message);
        });
    }
  }
};
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");

.LoginPage {
  overflow: hidden;
}
#test {
  background-color: red;
}
.fontSizeTxts {
  font-size: 2em;
}
.textAlignRight {
  text-align: right;
  float: right;
}
.infoText {
  margin-top: 27%;
}
.w-100 {
  margin-top: 7%;
}
/* ******************************************  */
.leftContainer {
  background: linear-gradient(-135deg, #c850c0, #4158d0);
  height: 100vh;
  width: 100vw;
}
#StrokeImg {
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0.04;
  width: 1000px;
  height: auto;
  top: 100px;
  left: -450px;
}
.leftIcon {
  width: 100px;
}
.leftText {
  color: white;
  text-align: left;
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 7%;
  /*    background-color: blue;*/
}
.infoContainer {
  margin-top: 40%;
  margin-left: 10px;
}
/* ******************************************  */
.rightContainer {
  height: 100vh;
  width: 100vw;
}
.userLoginInput {
  margin-right: 50px;
  margin-top: 50px;
}
.inputMargins {
  margin: 5px;
}
#signinBtn {
  background-color: #7fd686;
  border-radius: 2px;
  color: white;
  font-size: 1.5em;
}
.rightLogo {
  width: 100px;
}
.searchTxt {
  font-weight: 600;
  font-size: 2em;
  color: black;
}
.registerContainer {
  margin-top: 10%;
  text-align: left;
}
.registerMargin {
  margin-left: 20%;
}
.form-group {
  margin-right: 10px;
}
.user-class {
  margin-right: 4px;
  border: 1px solid #000 !important;
  margin-bottom: 5px;
  width: 120px;
}
.user-class:hover {
  border: 1px solid #7fd686 !important;
  color: #7fd686 !important;
}
.selected {
  border: 1px solid #7fd686 !important;
  color: #7fd686 !important;
}
#registerBtn {
  background-color: #7fd686;
  border-radius: 5px;
  color: white;
  width: 100px;
  font-size: 1.5em;
}
.registerWidthInput {
  width: 254px;
}
.inputPaddings {
  padding: 20px;
}
/* ******************************************  */
@media only screen and (max-width: 768px) {
  .LoginPage {
  }
  .leftContainer {
    display: none;
  }
  .searchTxt {
    width: 300px;
  }
  .fontSizeTxts {
    width: 300px;
  }
  .userLoginInput {
    position: fixed;
    top: 0px;
    right: 20px;
    width: 300px;
    margin-right: 0px;
    margin-top: 0px;
  }
  #signinBtn {
    width: 300px;
  }
}
</style>
