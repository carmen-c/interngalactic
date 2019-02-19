<template>
<div class="col-md-12">
        <AdminHeader/>
        <div class="col-md-12 navigationAdmin">
          <button
            type="button"
            class="btn admin-buttons"
            :class="{'active-button':adminPage==1}"
            @click="changePage(1)"
          >Postings</button>
          <button
            type="button"
            class="btn admin-buttons"
            :class="{'active-button':adminPage==2}"
            @click="changePage(2)"
          >Post Jobs</button>
          <button
            type="button"
            class="btn admin-buttons"
            :class="{'active-button':adminPage==3}"
            @click="changePage(3)"
          >Applicants</button>
<!--          {{this.store.username}}-->
        </div>
        <div class="page container">
          <!--              Postings-->
          <div v-if="adminPage==1">
            <currentJobPost />
          </div>
          <!--              Post Jobs-->
          <div v-if="adminPage==2">
            <jobForm/>
          </div>
          <!--              Applicants-->
          <div v-if="adminPage==3">
            <applicants/>
          </div>
        </div>
      </div>
</template>
<style>
  .btn-secondary {
    background-color: #3369E8 !important;
    border: 0 !important;
}
  .navigationAdmin {
    background-image: url(../../images/herobanner_generic4.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: soft-light;
  }
  .navigationAdmin button {
    font-size: 3em;
    padding-left: 4%;
    padding-right: 4%;
    margin-top: 5%;
    margin-bottom: 5%;
    margin-right: 2%;
    margin-left: 2%;
    border-radius: 10px;
    border: 1px solid #DDDDDD;
    background-color: #fff;
/*    opacity: 0.6;*/
    color: black;
  }
/*
  .home {
    overflow: hidden;
  }
.align-center {
  text-align: center;
  margin: 0 auto;
}
.btn-secondary {
  background-color: #3369E8 !important;
  border: 0 !important;
}
.applicantContainer {
  width: 50%;
  margin-right: 100px;
  text-align: left;
  justify-content: center;
}
.applicantWrapper {
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 20px;
}
.admin-navigation {
  margin-top: -38px;
  z-index: 5;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.admin-buttons {
  background-color: #e6e6e6 !important;
  text-transform: uppercase;
  border-top-left-radius: 1rem !important;
  border-top-right-radius: 1rem !important;
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  margin: 0 0.25rem;
}
.active-button {
  background-color: #7fd686 !important;
  color: #fff !important;
}
  
*/
</style>
<script>
// @ is an alias to /src
import AdminHeader from "@/components/adminHeader.vue";
import applicants from "@/components/applicants.vue";
import currentJobPost from "@/components/currentJobPost.vue";
import jobForm from "@/components/jobForm.vue";
import internHomePage from "@/components/internHomePage.vue";
import adminHomePage from "@/components/adminHomePage.vue";

export default {
  name: "home",
  components: {
    AdminHeader,
    applicants,
    currentJobPost,
    jobForm,
    internHomePage,
    adminHomePage
  },
  data() {
    return {
      page: "intern",
      adminPage: this.store.adminPage,
      dropdown: "Sort By",
      selected: "",
      username: ""
    };
  },
  methods: {
    changePage: function(value) {
      this.store.adminPage = value;
      this.adminPage = this.store.adminPage;
    }
  },
  created: function() {
    this.page = this.store.userType;
  },
  created: function() {
    this.username = this.store.username;
  }
};
</script>