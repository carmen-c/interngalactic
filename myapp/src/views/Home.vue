<template>
  <div class="home">
    <div class="container">
      
      <div v-if="page==1" class="row">
           <div class="header col-md-12">
              <AdminHeader/>
              <div class="banner">
                <div class="banner-title">
                  Welcome Back, User!
                </div>
              </div>
           </div>
            <div class="nav admin-navigation col-md-12">
              <button type="button" class="btn admin-buttons">Postings</button>
              <button type="button" class="btn admin-buttons">Post Jobs</button>
              <button type="button" class="btn admin-buttons">Applicants</button>
            </div>
            <div class="page">
<!--              import fake data / components here                    -->
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
                  <select class="input-style">
                    <option value="Default">Sort By</option>
                    <option value="Relevance">Relevance</option>
                    <option value="Date Posted">Date Posted</option>
                    <option value="Location">Location</option>
                  </select>
                </div>
                <br/>
                <button class="btn searchBtn">Search</button>
              </div>
           </div>
      </div>
      
    </div> 
  </div>
</template>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");
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
  .admin-navigation {
    margin-top: -45px;
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
  
  .bg {
    height: 100vh;
    background-image: url(../assets/temp.jpeg);
    background-size: cover;
  }
  .bg-title {
    color: #fff;
    padding-top: 30%;
    font-size:22px;
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
    margin-left: 5px;
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
  .dropdown {
    
  }
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ClientHeader from '@/components/clientHeader.vue'
import AdminHeader from '@/components/adminHeader.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ClientHeader,
    AdminHeader
  },
  data() {
    return {
      page: 2
    }
  }
}
</script>
