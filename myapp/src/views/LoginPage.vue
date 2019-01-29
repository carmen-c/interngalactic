<template>
<div class="loginPage">
  
  <div class="leftcolumn">
    <div id="strokeLogo">
      <img src="../../images/strokeLOGO.svg"/>
    </div>
    
    <div id="alignment">
        <div id="find">
    <img src="../../images/find.svg"/> 
    </div>
        <div id="browse">
    <img src="../../images/browse.svg"/> 
    </div>
    
        <div id="inTouch">
    <img src="../../images/getintouch.svg"/> 
        </div>        
  </div>
    </div> 
  
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
  
        <div class="form-group">
    <fieldset class="form-group col-xs-6">
		  <input type="email" class="form-control" v-model="email"
			   id="exampleInputEmail1" aria-describedby="emailHelp" 
			   placeholder="Email">
          </fieldset>
  <fieldset class="form-group col-xs-6">
		  <input type="password" class="form-control" v-model="password"
				   id="exampleInputPassword1" placeholder="Password">
        </fieldset>
  <fieldset class="form-group col-xs-6">
		  <button v-on:click="signup" id="loginbut" type="submit" class="btn btn-primary">Login</button>
  </fieldset>
		</div>
  
  <div id="greeting">
    <img id="logo" src="../../images/InternLogo.svg"/> 
    <p id="slogan"><b>Searching the galaxy to find you 
      the <br> internship opportunities you deserve.</b></p>
  </div>
  
  <div class="regForm">
    
    <p id="preference">I would like to register as:</p>
    
      <select id="preference">
        <option value="applicant">Applicant</option>
        <option value="employer">Employer</option>
      </select>

    
		 <input type="email" class="form-control" v-model="email"
			   id="exampleInputEmail1" aria-describedby="emailHelp" 
			   placeholder="Email">
        		 
        <input type="text" class="form-control" v-model="name"
			   id="exampleInputName" placeholder="Full Name">
   
		
		  <input type="password" class="form-control" v-model="password"
				   id="exampleInputPassword1" placeholder="Password">
		
		
		  <input type="password" class="form-control" v-model="retypePass" placeholder="Confirm Password">
		
		
		  <button v-on:click="signup" id="register" type="submit" class="btn btn-primary"><b>Register</b></button>
</div>


  
</div>
  

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
	export default {
		name:"LoginPage",
		components: {
			MyLogin:Login,
			MyReg:Register
		},
		data(){
			return {
			}
		},
		methods: {
		}
	}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");  
</style>
<style>
   
  	.leftcolumn {
		display:flex;
		position:fixed;
        overflow: hidden;
		left:0;
		top:0;
		width:40vw;
		height:100vh;
		justify-content:center;
		align-items:center;
		text-align: left;
		color: #000;
		z-index: -1;
        background: linear-gradient(-135deg, #c850c0, #4158d0); 
		
	}
  
  #strokeLogo{
    opacity: 0.02;
    position: fixed;
    width: 60%;
    height: auto;
    float: left;  
    left: -400px;
  
  }
  
  #find{
    position: fixed;
    width: 24%;
    height: auto;
    top: 250px;
  }
  
    #browse{
    position: fixed;
    width: 27%;
    height: auto; 
    top: 450px;
  
  }
  
    #inTouch{
    position: fixed;
    width: 24%;
    height: auto; 
    top: 650px;
  }

    
  #alignment{
    position: relative;
    float: left;
    left: -30%;
  }
  
  
  #loginbut {
    border: 2px solid #7FD686;
    background-color: #FFFFFF;
    color: #7FD686;

  }
  
  .form-group{
    width: 30%;
    height: auto;
    position: fixed;
    float: right;
    top: 3%;
    right: 0px;
    bottom: 0;
    left: 40%;
  }
  
  #logo{
    width: 5%;
    position: fixed;
    left: 52%;
    top: 30%;
  }
  
  #slogan{
    position: fixed;
    left: 52%;
    top: 38%;
    font-size: 20px;
    
  }
  
  .regForm{
    position: fixed;
    width: 20%;
    left: 52%;
    top: 45%;
  }
  
  #register{
    background-color: #7FD686;
    border: none;
    float: left;
    margin-left: 7%;
  }

  
</style>























