<template>
<div id="adminHeader">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<img src="../../images/InternLogo.svg" id="internLogo"/>
  <a class="navbar-brand" href="#">InternGalactic</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0" id="logoBtn" type="submit">Logout</button>
    </form>
  </div>
</nav>
  <div class="header col-md-12">
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
</div>
</template>


<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
</style>
<style>
    .navbar {
        background: linear-gradient(-135deg, #c850c0, #4158d0);
    }
	#logoBtn {
		margin-right: 10px;
	}
	.navbar-brand {
		font-family: 'Comfortaa', cursive;
		color: white !important;
	}
	#internLogo{
		width: 50px;
		margin-left:10px;
		margin-right:12px;
	}
    .header {
        padding: 0 !important;
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
</style>

<script>
// @ is an alias to /src
import firebase from 'firebase';

export default {
	name:"adminHeader",
	data() {
		return {
    
		}
	},
	components:{
	},
}
</script>

