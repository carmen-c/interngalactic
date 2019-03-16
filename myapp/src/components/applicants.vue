<template>
  <div class="applicants">
    <div class="container Applicant-container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-right">
          <b-button class="downloadBtn" variant="primary">
            <a
              :href="this.aresume"
              target="_blank"
              :download="this.aname + '_resume_for' + this.aposition"
            >Download Resume</a>
          </b-button>&nbsp;&nbsp;
          <b-button class="downloadBtn" @click="deleteThis" variant="primary">Delete</b-button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 text-left">
          <p>{{aname}}</p>
        </div>
        <div class="col-md-10 text-left">
          <h1>{{aposition}}</h1>
          <p><i class="fas fa-building icon"></i>{{company}}
          &nbsp;&nbsp;
          <i class="fas fa-map-marker-alt icon"></i>{{location}}
          </p>
          <p>From {{startDate.seconds | moment("MMMM Do YYYY")}} to {{endDate.seconds | moment("MMMM Do YYYY")}}</p>
        </div>
        
      </div>
    </div>
  </div>
</template>
<style>
.Applicant-container {
  background-color: #ededed;
  font-size: 1.5em;
  padding: 10px;
  margin: 40px;
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
  color: #ffffff !important;
  text-decoration: none !important;
}
.downloadResume a:hover {
  text-decoration: none;
  color: #ffffff;
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
  props: ["aname", "aposition", "aresume", "post_id", "uid", "startDate", "endDate", "company", "location"],
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
<style scoped>
.icon {
  margin: 0 !important;
  padding: 0 5px 0 0;
  font-size: 1em !important;
}
.postedDate {
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 15px;
}
</style>