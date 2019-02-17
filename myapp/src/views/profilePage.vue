<template>
 <div class="profilePage">
   <clientHeader />
<!--
   <div class="hero">
    <img src="../../images/herobanner_generic4.jpg"/>
  </div>
-->
   <div class="container userProfileContainer">
     <div class="profileImgContainer">
     <img src="../../images/TD.png"/>
       </div>
    <div class="profileContainer">
      <h1>Austin Glover</h1>
      <h3>Vancouver, BC</h3>
      <h3>Currently Studying at <b>Simon Fraser University</b></h3>
      <div class="container userBio"><p>Passionate Project Manager PMP with 10+ years of experience, seeking to increase profitability for C.S. Mott Children's Hospital. At Seton Hospital, slashed costs by 32% in 6 months by implementing Lean training across all departments. Cut stockroom waste by 65% with a new Kanban system. Skilled in Continuous Improvement, Agile, and Business Process Improvement.
    </p>
  </div>
      <div class="resumeUploadContainer">
        <h3><b>Upload Resume</b></h3>
        <button>Choose File</button>&nbsp;&nbsp;<p>display.PDF here</p>
      </div>
  </div>
  </div>
	</div>
</template>

<script>
// @ is an alias to /src
import calendar from '@/components/calendar.vue'
import clientHeader from '@/components/clientHeader.vue'
  
  export default {
		name:"profilePage",
		components: {
          clientHeader
		},
		data(){
          return {
     	
            }
		},
        methods: {
          checkdates: function () {
          }
        }
  }
</script>
<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");  
  .userProfileContainer {
    margin-top: 10%;
  }
  .userBio {
    width: 50%;
  }
  .profileContainer p {
    font-size: 1.5em;
  }
  .profileContainer h1 {
    font-size: 3em;
    margin-bottom: 0.5%;
  }
  .profileContainer h3 {
    font-size: 1.75em;
  }
  .userBio {
    margin-top: 1%;
  }
  .userBio p {
    font-size: 1em;
    line-height: 1.375em;
  }
  .profileImgContainer img {
    width: 170px;
    height: 170px;
    border-radius: 10px;
    object-fit: cover;
    background-position: center center;
    background-size: cover;
  }
  .profileImgContainer {
    padding: 15px;
  }
  .resumeUploadContainer {
    margin-top: 3%;
  }
  .resumeUploadContainer p{
    display: inline;
  }
  .resumeUploadContainer button {
    background-color: lightblue;
    font-size: 1em;
    border-radius: 2px;
    border: none;
    color: black;
  }
/*  
  .hero {
    width:100%; 
    overflow:hidden; 
    margin:0; 
  }
  .hero img {
    display: block;
    width: 100%;
  }
*/
</style>
















