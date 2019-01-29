<template>
 <div class="loginPage">
	<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="row">
  <div class="col-md-5 border left">
	  <img class="strokeLogo" src="../../images/strokeLOGO.svg"/>
	  <div class="aboutImgs">
		<div class="row">
			<img src="../../images/find.svg" />
		</div>
		<div class="row">
			<img src="../../images/browse.svg" />
		</div>
		<div class="row">
			<img src="../../images/getintouch.svg" />
		</div>
	</div>
	</div>
  <div class="col-md-7 border">
	<div class="container">
		<div class="row">
		  <div class="col-xs-12 loginContainer">
			<div class="form-inline">
  				<div class="form-group">
					<input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email">
				</div>
				<div class="form-group">
					<input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password">
				</div>
				  	<button type="submit" class="btn btn-default" id="signinBtn">Login</button>
			</div>
			</div>
				<div class="col-xs-12 textA">
					<div class="right-missionContainer">
						<img src="../../images/InternLogo.svg" class="login-internLogo"/>
						<h2>Searching the Galaxy to find you the internship opportunities you deserve.</h2>
					</div>
				</div>
<div class="col-xs-12 registerContainer">
	<div>
		<p style="text-align:left">I would like to register as:</p>
		<!-- Small button groups (default and split) -->
<div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Small button
  </button>
  <div class="dropdown-menu">
    ...
  </div>
</div>
		<div class="row">
			<div class="form-group">
				<input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email">
			</div>
		</div>
		<div class="row">
			<div class="form-group">
				<input type="name" class="form-control" id="exampleInputEmail3" placeholder="Full Name">
			</div>		
		</div>
		<div class="row">
			<div class="form-group">
				<input type="password" class="form-control" id="exampleInputEmail3" placeholder="Password">
			</div>		
		</div>
	</div>
</div>
</div>
	</div>
		</div>
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
	
	.border {
		border: 1px solid
	}
	.left {
		background: linear-gradient(-135deg, #c850c0, #4158d0);
		height: 100vh;
		overflow: hidden;
	}
	.strokeLogo {
		opacity: 0.02;
		position: absolute;
		top: 100px;
		left: -500px;
		width: 1000px;
	}
	.aboutImgs {
		margin-top: 80px;
	}
	.aboutImgs img{
		padding-top: 130px;
		margin: 5px;
	}
	.row {
		text-align: center;
		justify-content: center;
	}
	
/************* RIGHT SIDE **************************/
	.form-inline {
		float: right;
	}
	.form-group {
		margin-right: 10px;
	}
	#signinBtn {
		border:2px solid #7fd686;
		color: #7fd686;
		border-radius: 10px;
	}
	.loginContainer {
		width: 100%;
		margin-right: 80px;
		margin-top: 60px;
	}
	.textA {
		text-align: left;
	}
	.login-internLogo {
		width: 100px;
		margin-bottom: 20px;
	}
	.right-missionContainer {
		padding-right: 180px;
		padding-left: 180px;
		margin-top: 120px;
	}
	.registerContainer {
		margin: 100px;
	}
</style>
























