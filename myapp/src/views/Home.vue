<template>
  <div class="home">
    <div v-if="page=='company'" class="row">
      <adminHomePage/>
    </div>

    <div v-if="page=='intern'" class="row">
      <internHomePage />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ClientHeader from "@/components/clientHeader.vue";
import AdminHeader from "@/components/adminHeader.vue";
import applicants from "@/components/applicants.vue";
import currentJobPost from "@/components/currentJobPost.vue";
import jobForm from "@/components/jobForm.vue";
import internHomePage from "@/components/internHomePage.vue";
import adminHomePage from "@/components/adminHomePage.vue";

export default {
  name: "home",
  components: {
    ClientHeader,
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
      selected: ""
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
  }
};
</script>