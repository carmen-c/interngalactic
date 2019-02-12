<template>
  <div class="home">
      
      <div v-if="page==1" class="row">
        <div class="col-md-12">
            <AdminHeader/>
            <div class="nav admin-navigation col-md-12">
              <button type="button" class="btn admin-buttons" :class="{'active-button':adminPage==1}" @click="changePage(1)">Postings</button>
              <button type="button" class="btn admin-buttons" :class="{'active-button':adminPage==2}" @click="changePage(2)">Post Jobs</button>
              <button type="button" class="btn admin-buttons" :class="{'active-button':adminPage==3}" @click="changePage(3)">Applicants</button>
            </div>
            <div class="page">
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
                <applicants/>
              </div>
            </div>
        </div>
      </div>
      
    
    
    
      <div v-if="page==2" class="row">
           <div class="header col-md-12">
              <ClientHeader/>
              <div class="bg">
                <div class="bg-title">
                  <b>Help us find what you are looking for.</b>
                </div>
                <br/>
                <div class="searchForm">
                  <input type="text" placeholder="Internship Title" class="input-left-round input-style"/>
                  <input type="text" placeholder="Location" class="input-style"/>
                  <b-dropdown class="dropdown" :text="dropdown">
                    <b-dropdown-item @click="dropdownSelect('Relevance')" value="Relevance">Relevance</b-dropdown-item>
                    <b-dropdown-item @click="dropdownSelect('Date Posted')" value="Date Posted">Date Posted</b-dropdown-item>
                    <b-dropdown-item @click="dropdownSelect('Location')">Location</b-dropdown-item>
                  </b-dropdown>
                </div>
                <br/>
                <button class="btn searchBtn">Search</button>
              </div>
           </div>
      </div>
      
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa');

  .banner {
    background-image: url('../assets/temp.jpeg');
    background-size: cover;
    height: 350px;
  }
  .banner-title {
    color: #fff;
    text-align: center;
    padding-top: 120px;
    font-size: 62px;
  }
  .align-center {
    text-align: center;
    margin: 0 auto;
  }
  .bg {
    height: 100vh;
    background-image: url(../assets/temp.jpeg);
    background-size: cover;
  }
  .bg-title {
    color: #fff;
    padding-top: 20%;
    font-size:22px;
  }
  .searchForm {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .searchBtn {
    color: #fff !important;
    font-weight: bold !important;
    background-color: #7fd686 !important;
    padding: 0 1.5rem !important;
    border-radius: 0.5rem !important;
  }
  .input-style {
    background-color: #e6e6e6;
    border: none;
    color: #000;
    font-weight: bold;
    margin-right: 5px;
    padding: 0.5rem;
  }
  .input-left-round {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  .input-right-round {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  .btn-secondary {
    background-color: #7fd686 !important;
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
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ClientHeader from '@/components/clientHeader.vue'
import AdminHeader from '@/components/adminHeader.vue'
import applicants from '@/components/applicants.vue'
import currentJobPost from '@/components/currentJobPost.vue'
import jobForm from '@/components/jobForm.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ClientHeader,
    AdminHeader,
	applicants,
	currentJobPost,
    jobForm
  },
  data() {
    return {
      page: 1,
      adminPage: this.store.adminPage,
      dropdown: "Sort By",
      selected: ""
    }
  },
  methods: {
    changePage: function(value) {
      this.store.adminPage = value
      this.adminPage = this.store.adminPage
    }
  }
}
</script>