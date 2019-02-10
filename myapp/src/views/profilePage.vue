<template>
 <div class="profilePage">

<div class="coverpic">
  <div id="profilepic">
    <img id="headshot" src=""/>
    </div>
  </div>
   
   <img id="edit" src=""/>
   
  <div class="profileInfo">
   <h2 class="profileName">Austin Glover</h2><br>
    <p id="bio"><b>Currently Studying at Simon Fraser University</b></p>
    <p id="city"><b>Vancouver, BC</b></p><br>
    </div>
       <hr><br><br>
   <div class="resumeinfo">
    <p>Upload your resume to your profile to make it easier for employers to find you!</p><br>
    <button id="choosefile">Choose File</button>
     </div>
   
   
   
	</div>
</template>

<script>
// @ is an alias to /src
import calendar from '@/components/calendar.vue'
  export default {
		name:"profilePage",
		components: {
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
	
  .profilePage img {
		transform: rotate(-90deg);
		width: 800px;
	}
  .coverpic {
    background-size: cover;
    height: 370px;
    padding-top: 220px;
  }
  
  #profilepic {
    transform: rotate(90deg);
  }
  
  #headshot {
    width: 400px;
    
  }
  
  #edit {
    width: 20px;
    float: right;
    margin-top: 30px;
    margin-right: 40px;
    transform: rotate(5deg)
  }
  
  h2 {
    margin-top: 150px;
  }
  
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 2px solid #7fd686;
    margin: 1em 0;
    padding: 0; 
  }
  
  #choosefile {
    border:2px solid #7fd686;
    background-color: #7fd686;
    padding: 5px;
    border-radius: 10px;
    color: white;
    margin-left: 5px;
	}
  
  

</style>
















