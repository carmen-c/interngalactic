<template>
  <div class="about">
   
    <p id="ptitle">About Us</p>

<div class="container">
  <div class="row">
    <div class="col">
    </div>
    <div class="col">
          <p id="intro">Welcome to Intern Galactic! We are an internship site that connects students and applicants to available businesses. Our site provides hopeful applicants with the ability to share their resumes with businesses in their field, and hiring businesses with the ability to search for candidates with skill sets that match. With over 1,000 job postings in our galaxy, finding an internship has never been so easy!</p>
    </div>
    <div class="col">
    </div>
  </div>

  <div class="row">
    <div class="col">
            <img class="graphics" src="../../images/clienticon.svg">
      <p class="subinfo"><b>Step 1</b><br>Applicants can search for internships or browse available job postings</p>
    </div>
    <div class="col">
            <img class="graphics"  src="../../images/adminicon.svg">
      <p class="subinfo"><b>Step 2</b><br>Companies can check on applicant resumes and profiles.</p>
    </div>
    <div class="col">
            <img class="graphics"  src="../../images/handshake.svg">
      <p class="subinfo"><b>Step 3</b><br>Match made in space! You found your perfect intern/company.</p>
    </div>
  </div>
  </div>
    
    <p id="ptitle">Our Story</p>
    
    <div class="container">
  <div class="row">
    <div class="col">
    </div>
    <div class="col">
          <p id="intro">Intern Galactic was created by a group of three BCIT students. They came up with the idea after struggling to find internship positions on normal job sites. They found that normal job sites not only lacked internship postings but also a friendly user interface that made students looking to get in to the field after graduation feel comfortable. That's why here on Intern Galactic we strive to make your experience stress free and reliable.</p>
    </div>
    <div class="col">
    </div>
  </div>
  </div>
    
  
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: "about"
};
</script>
<style>
  
.about{
  margin-top: 20px;
  width: 100vw;
  height:50vh;
  margin-bottom: 640px;
}

#ptitle{
    font-size: 50px;
  margin-top: 70px;
  }  
  
  #intro{
    font-size: 20px;
    margin: 50px;
    width: 40vw;
    text-align: center;


  }  

.graphics {
  width: 290px;
  margin-top: 70px;   
} 
  
  .subinfo {
    font-size: 18px;
    margin-top: 25px;
    
  }  
  
  

</style>