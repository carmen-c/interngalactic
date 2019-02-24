<template>
  <div class="applicants">
    <b-container class="Applicant-container">
      <b-row class="justify-content-md-center test123">
        <b-col col lg="3" class="applicantName">{{aname}}</b-col>
        <b-col cols="12" md="4" class="applicantReason">Applying for {{aposition}}</b-col>
        <b-col class="downloadResume" col lg="3">
          <button class="downloadBtn">
            <a
              :href="this.aresume"
              target="_blank"
              :download="this.aname + '_resume_for' + this.aposition"
            >Download Resume</a>
          </button>
          <button class="downloadBtn">
            <a href="Download" download>Delete</a>
          </button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style>
.applicants {
}
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
.downloadResume a {
  color: #7fd686;
  text-decoration: none;
  border: 1px solid #7fd686;
  padding: 10px;
  border-radius: 10px;
}
.downloadResume a:hover {
  text-decoration: none;
  color: #7fd686;
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
  props: ["aname", "aposition", "aresume"],
  methods: {}
};
</script>