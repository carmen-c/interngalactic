<template>
  <div class="profilePage">
    <clientHeader/>
    
   <div class="hero">
    <img src="../../images/herobanner_generic4.jpg"/>
  </div>
    
    <div class="container userProfileContainer">
      <div class="profileImgContainer">
        <img :src="uploadedImage">
      </div>
      <br/>
      <br/>
      <div class="profileContainer">
        <h2>Username: {{this.store.username}}</h2>
        <h3>Residing at: {{this.current_location}}</h3>
        <h3>
          Currently Studying at:
          <b>{{this.current_school}}</b>
        </h3>
        <div class="container userBio">
          <p>{{this.professional_sum}}</p>
          <div>
            <b-button v-b-modal.modalxl variant="primary">
              Edit
              <i class="glyphicon glyphicon-user"></i>
            </b-button>
            <b-modal id="modalxl" size="xl" @ok="changeInformation" title="Edit Intro">
              <div class="col-4">
                <p>
                  <span
                    style="
      float:left; 
      font-size:1em;
      margin-bottom:5px;"
                  >Current Location</span>
                </p>
                <b-form-input
                  v-model="current_location"
                  type="text"
                  placeholder="Ex. Vancouver, BC"
                />
                <p>
                  <span
                    style="
      float:left; 
      font-size:1em;
      margin-bottom:5px;"
                  >Current School</span>
                </p>
                <b-form-input v-model="current_school" type="text" placeholder="Ex. BCIT"/>
                <p>
                  <span
                    style="
      float:left; 
      font-size:1em;
      margin-bottom:5px;"
                  >Professional Summary</span>
                </p>
                <b-form-textarea
                  id="textarea2"
                  :state="text.length >= 120"
                  v-model="professional_sum"
                  placeholder="Enter at least 220 characters"
                  rows="5"
                />
                <p>
                  <span
                    style="
      width:100%;
      float:left;
      text-align:left;
      font-size:1em;
      margin-bottom:5px;
      display:block;"
                  >Profile Picture</span>
                </p>
                <div style="width:100%;">
                  <input type="file" @change="onFileSelected">
                </div>
              </div>
            </b-modal>
          </div>
        </div>
<!--
        <div class="container">
          <h3>
            <b>Resume</b>&nbsp;	&nbsp;	
            <input type="file" placeholder="choose file" @change="confirmUpload($event)">
          </h3>
        </div>
-->
<!--
          <div class="container">
          <input type="file" placeholder="choose file" @change="confirmUpload($event)">
            </div>
-->
<!--          <p>{{this.progress}}</p>-->
        <div class="resumeUploadContainer">
          <iframe :src="uploadedResume" width="770px" height="1150px" title="Resume"></iframe>
        </div>
        <div class="container uploadfileConatiner">
            <h4>
            <b>Upload Resume:  </b>
              <input type="file" placeholder="choose file" @change="confirmUpload($event)">
          </h4>
        </div>
      </div>
    </div>
    <div class="container-fluid">
        <pageFooter />
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import calendar from "@/components/calendar.vue";
import clientHeader from "@/components/clientHeader.vue";
import pageFooter from "@/components/pageFooter.vue";
import firebase from "firebase";

export default {
  name: "profilePage",
  components: {
    clientHeader,
    pageFooter
  },
  data() {
    return {
      resume: "",
      progress: "",
      uploadedResume: "",
      text: "",
      current_location: "",
      current_school: "",
      professional_sum: "",
      uploadedImage: ""
    };
  },
  methods: {
    onFileSelected: function(event) {
      var user = firebase.auth().currentUser;
      var file = event.target.files[0];
      console.log(file);
      var uploadTask = firebase
        .storage()
        .ref()
        .child(user.uid + "_pic")
        .put(file);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.progress = progress + " %";

          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              this.progress = "upload paused";
              break;
            case firebase.storage.TaskState.RUNNING:
              console.log("upload running");
              break;
          }
        },
        err => {
          console.log(err);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            console.log("download at ", downloadURL);
            this.uploadedImage = downloadURL;
            this.saveProfileImg(downloadURL);
          });
        }
      );
    },
    saveProfileImg: function(url) {
      var currentUser = firebase.auth().currentUser;
      var ref = firebase
        .firestore()
        .collection("users")
        .doc(currentUser.uid);

      ref.set(
        {
          profilePic: url
        },
        { merge: true }
      );
    },
    uploadUserData: function() {
      var currentuser = firebase.auth().currentUser;
      var ref = firebase
        .firestore()
        .collection("users")
        .doc(currentuser.uid);

      ref.get().then(doc => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          this.current_location = doc.data().current_location;
          this.current_school = doc.data().current_school;
          this.professional_sum = doc.data().professional_sum;
          this.uploadedImage = doc.data().uploadedImage;
        }
      });
    },
    changeInformation: function() {
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        //STORE GLOBAL
        // this.store.current_location = this.current_location;
        // this.store.current_school = this.current_school;
        // this.store.professional_sum = this.professional_sum;
        // this.store.uploadedImage = this.uploadedImage;
        // console.log(this.store.uploadedImage, "Hello");
        // alert("Store");
        //
        var ref = firebase
          .firestore()
          .collection("users")
          .doc(currentUser.uid);
        ref.set(
          {
            current_location: this.current_location,
            current_school: this.current_school,
            professional_sum: this.professional_sum
            // uploadedImage: this.uploadedImage
          },
          { merge: true }
        );
      }
      alert("hello");
    },
    checkdates: function() {},
    checkResume: function() {
      var currentUser = firebase.auth().currentUser;
      var ref = firebase
        .firestore()
        .collection("users")
        .doc(currentUser.uid);

      ref.get().then(doc => {
        if (doc.exists == true) {
          if (doc.data().resume != undefined) {
            this.uploadedResume = doc.data().resume;
            this.uploadedImage = doc.data().profilePic;
            console.log(doc.data().resume);
          } else {
            // do nothing
          }
        }
      });
    },
    confirmUpload: function(event) {
      var currentUser = firebase.auth().currentUser;
      if (this.uploadedResume != "") {
        if (confirm("Are you sure you want to overwrite?")) {
          //confirmed overwrite
          this.uploadResume(event, currentUser);
        } else {
          // Do nothing!
        }
      } else {
        //user has no previous resume uploaded
        this.uploadResume(event, currentUser);
      }
    },
    uploadResume: function(event, user) {
      var file = event.target.files[0];

      var uploadTask = firebase
        .storage()
        .ref()
        .child(user.uid)
        .put(file);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.progress = progress + " %";

          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              this.progress = "upload paused";
              break;
            case firebase.storage.TaskState.RUNNING:
              console.log("upload running");
              break;
          }
        },
        err => {
          console.log(err);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            console.log("download at ", downloadURL);
            this.uploadedResume = downloadURL;
            this.saveToUser(downloadURL);
          });
        }
      );
    },
    saveToUser: function(url) {
      var currentUser = firebase.auth().currentUser;
      var ref = firebase
        .firestore()
        .collection("users")
        .doc(currentUser.uid);

      ref.set(
        {
          resume: url
        },
        { merge: true }
      );
    }
  },
  created: function() {
    this.checkResume();
    this.uploadUserData();
    this.saveProfileImg();
  }
};
</script>
<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");
.userProfileContainer {
  margin-top: 10%;
}
.userBio {
  width: 50%;
}
.profileContainer p {
  font-size: 1.5em;
}
.profileContainer h1 {
  font-size: 3em;
  margin-bottom: 0.5%;
}
.profileContainer h3 {
  font-size: 1.75em;
}
.userBio {
  margin-top: 1%;
}
.userBio p {
  font-size: 1em;
  line-height: 1.375em;
}
.profileImgContainer img {
  width: 170px;
  height: 170px;
  border-radius: 10px;
  object-fit: cover;
  background-position: center center;
  background-size: cover;
}
.profileImgContainer {
  padding: 15px;
}
.resumeUploadContainer {
  margin-top: 5%;
}
.resumeUploadContainer p {
  display: inline;
}
.resumeUploadContainer button {
  background-color: lightblue;
  font-size: 1em;
  border-radius: 2px;
  border: none;
  color: black;
}
  .hero {
    width:100%; 
    overflow:hidden; 
    margin:0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .hero img {
    display: block;
    width: 100%;
  }
  .uploadfileConatiner {
    width: 70%;
    text-align: left;
    margin-bottom: 15%;
  }
</style>
















