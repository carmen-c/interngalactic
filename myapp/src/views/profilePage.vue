<template>
  <div class="profilePage">
    <clientHeader/>

    <div class="row profile">
      <div class="col-sm-12 userprofile">
        <div class="row">
          <div class="col-sm-12 col-md-2">
            <div class="userpic">
              <img :src="uploadedImage">
            </div>
          </div>
          <div class="userinfo col-sm-12 col-md-10">
            <div class="col-sm-12 p-0 username">
              <h1>{{this.username}}</h1>
              <b-button v-b-modal.modalxl variant="primary">
                <i class="glyphicon glyphicon-user"></i>
                Edit Profile
              </b-button>
            </div>

            <br>
            <h3>{{this.current_location}}</h3>
            <h3>{{this.current_school}}</h3>
            <br>
            <p>{{this.professional_sum}}</p>
          </div>
        </div>
      </div>

      <div class="col-sm-12">
        <div class="container">
          <iframe :src="uploadedResume" width="100%" height="600px" title="Resume"></iframe>
        </div>
      </div>

      <div class="profileContainer">
        <div class="container userBio">
          <b-modal id="modalxl" size="lg" @ok="changeInformation" title="Edit Profile">
            <div class="col-12">
              <div class="profilePicUpload">
                <p class="editTitle">Profile Picture</p>
                <input type="file" @change="onFileSelected">
                <p>{{this.picprogress}}</p>
              </div>

              <p class="editTitle">Current Location</p>
              <b-form-input v-model="current_location" type="text" placeholder="Ex. Vancouver, BC"/>

              <p class="editTitle">Current School</p>
              <b-form-input v-model="current_school" type="text" placeholder="Ex. BCIT"/>

              <p class="editTitle">Professional Summary</p>
              <b-form-textarea
                id="textarea2"
                :state="text.length >= 120"
                v-model="professional_sum"
                placeholder="Enter at least 220 characters"
                rows="5"
              />

              <div class="profilePicUpload">
                <p class="editTitle">Upload Resume</p>
                <input type="file" placeholder="choose file" @change="confirmUpload($event)">
                <p>{{this.progress}}</p>
              </div>
            </div>
          </b-modal>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <pageFooter/>
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
      picprogress: "",
      uploadedResume: "",
      text: "",
      current_location: "",
      current_school: "",
      professional_sum: "",
      uploadedImage: "",
      username: ""
    };
  },
  methods: {
    onFileSelected: function(event) {
      var user = firebase.auth().currentUser;
      var file = event.target.files[0];
      // console.log(file);
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
          this.picprogress = progress + " %";

          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              this.picprogress = "upload paused";
              break;
            case firebase.storage.TaskState.RUNNING:
              // console.log("upload running");
              break;
          }
        },
        err => {
          console.log(err);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            // console.log("download at ", downloadURL);
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
          // console.log("No such document!");
        } else {
          // console.log(doc.data());
          this.current_location = doc.data().current_location;
          this.current_school = doc.data().current_school;
          this.professional_sum = doc.data().professional_sum;
          this.uploadedImage = doc.data().profilePic;
          this.username = doc.data().name;
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
      // alert("hello");
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
            // console.log(doc.data().resume);
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
              // console.log("upload running");
              break;
          }
        },
        err => {
          console.log(err);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            // console.log("download at ", downloadURL);
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
  }
};
</script>
<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");
.editTitle {
  float: left;
  text-align: left !important;
  font-size: 1em;
  margin-bottom: 5px;
  margin-top: 10px;
}
.profile {
  margin: 10% 5%;
}
.profilePicUpload {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.userpic::before {
  content: "";
  display: block;
  padding-top: 100%;
}
.userpic {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 50%;
}
.userpic img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: auto;
}
.userinfo {
  text-align: left;
}
.username {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.userprofile {
  margin-bottom: 10%;
}
</style>
















