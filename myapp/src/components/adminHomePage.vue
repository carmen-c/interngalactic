<template>
  <div class="col-md-12">
    <AdminHeader/>
    <div class="row">
    <div class="col-md-3 mt-5 navigationAdmin">
      <ul class="mb-0">
        <li>
          <button
          type="button"
          class="btn admin-buttons"
          :class="{'active-button':adminPage==1}"
          @click="changePage(1)"
        >Posted Internships</button>
        </li>
        <li>
          <button
          type="button"
          class="btn admin-buttons"
          :class="{'active-button':adminPage==2}"
          @click="changePage(2)"
        >New Internship</button>
        </li>
        <li>
          <button
          type="button"
          class="btn admin-buttons"
          :class="{'active-button':adminPage==3}"
          @click="changePage(3)"
        >Applicants</button>
        </li>
      </ul>
    </div>
    <div class="col-md-1"></div>
    <div class="page col-md-7">
      <!--              Postings-->
      <div v-if="adminPage==1">
        <currentJobPost/>
      </div>
      <!--              Post Jobs-->
      <div v-if="adminPage==2">
        <jobForm/>
      </div>
      <!--              Applicants-->
      <div v-if="adminPage==3">
        <adminApplied/>
      </div>
    </div>
    <div class="col-md-1"></div>
    </div> 
  </div>
</template>
<style>
.btn-secondary {
  background-color: #3369e8 !important;
  border: 0 !important;
}
.navigationAdmin {
  border-right: #7fd686 1px solid;
}
.navigationAdmin ul{
  list-style: none;
}
.navigationAdmin ul li{
  padding: 5%;
}
.navigationAdmin button {
  font-size: 2em;
  /*    opacity: 0.6;*/
}
.navigationAdmin button:hover {
  /*    opacity: 0.6;*/
  color: #7fd686;
}
</style>
<script>
// @ is an alias to /src
import AdminHeader from "@/components/adminHeader.vue";
import adminApplied from "@/components/adminApplied.vue";
import currentJobPost from "@/components/currentJobPost.vue";
import jobForm from "@/components/jobForm.vue";
import internHomePage from "@/components/internHomePage.vue";
import adminHomePage from "@/components/adminHomePage.vue";

export default {
  name: "home",
  components: {
    AdminHeader,
    adminApplied,
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