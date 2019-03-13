<template>
  <div class="applicants">
    <b-container class="Applicant-container">
      <b-row class="justify-content-md-center test123">
        <b-col col lg="3" class="applicantName">{{aname}}</b-col>
        <b-col cols="12" md="4" class="applicantReason">Applying for {{aposition}}</b-col>
        <b-col class="downloadResume" col lg="3">
          <b-button class="downloadBtn" variant="primary">
            <a
              :href="this.aresume"
              target="_blank"
              :download="this.aname + '_resume_for' + this.aposition"
            >Download Resume</a>
          </b-button>&nbsp;&nbsp;
          <b-button class="downloadBtn" @click="deleteThis" variant="primary">Delete</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style>
.Applicant-container {
  background-color: #ededed;
  margin: 10px;
  border-radius: 10px;
}
.applicantName {
  font-weight: bold;
  padding: 10px;
  margin: 10px;
}
.downloadResume {
  margin: 10px;
  padding: 10px;
}
.downloadBtn {
  border: none !important;
  background-color: #7fd686 !important;
}
.downloadBtn:hover,
.downloadBtn:active {
  background-color: #019966 !important;
}
.downloadResume a {
  color: #ffffff;
  text-decoration: none;
}
.downloadResume a:hover {
  text-decoration: none;
  color: #ffffff;
}
.applicantReason {
  margin: 10px;
  padding: 10px;
}
</style>

<script>
// @ is an alias to /src
import AdminHeader from "@/components/adminHeader.vue";
import firebase from "firebase";

export default {
  name: "home",
  components: {
    AdminHeader
  },
  data() {
    return {};
  },
  props: ["aname", "aposition", "aresume", "post_id", "uid"],
  methods: {
    deleteThis: function() {
      var ref = firebase
        .firestore()
        .collection("apply")
        .doc(this.post_id);

      ref.update({
        users: firebase.firestore.FieldValue.arrayRemove(this.uid)
      });
    }
  }
};
</script>