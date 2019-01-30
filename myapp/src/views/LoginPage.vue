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
				<div class="col-xs-12 rightSectionCont">
					<div class="right-missionContainer">
						<img src="../../images/InternLogo.svg" class="login-internLogo"/>
						<h3 class="searching-the">Searching the Galaxy to find you the internship opportunities you deserve.</h3>
							<div class="registerContainer">			
								<div class="row">
								  <p>I would like to register as:</p><br/>
								</div>
								<div class="row">
								  <div class="btn-group">
									<button class="btn user-class btn-left-round">Applicant</button>
									<button class="btn user-class btn-right-round">Intern</button>
								  </div>
								</div>
								<div class="marginInput">
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
								<div class="row">
									<div class="form-group">
										<input type="password" class="form-control" id="exampleInputEmail3" placeholder="Re-type Password">
									</div>		
								</div>
							</div>
							<button class="btn btn-default" id="registerBtn">Register</button>
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
	.floatLeft{
		float: left;
	}
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
		margin-right: 20px;
		margin-top: 60px;
	}
	.rightSectionCont {
		margin-top: 120px;
		margin-left: 40px;
		width: 600px;
		text-align: left;
	}
	.login-internLogo {
		width: 100px;
		margin-bottom: 20px;
	}
    .user-class {
        border: 1px solid #000 !important;
        padding: 0.5rem 1rem !important;
        margin-bottom: 15px;
        width: 100px;
    }
    .user-class:hover {
        border: 1px solid #7fd686 !important;
        color: #7fd686 !important;
    }
    .selected {
        border: 1px solid #7fd686 !important;
        color: #7fd686 !important;
    }
    .btn-left-round {
      border-top-left-radius: 1.5rem !important;
      border-bottom-left-radius: 1.5rem !important;
    }	
    .btn-right-round {
      border-top-right-radius: 1.5rem !important;
      border-bottom-right-radius: 1.5rem !important;
    }
	#registerBtn {
		border:2px solid #7fd686;
		background-color: #7fd686;
		padding: 5px;
		border-radius: 10px;
		color: white;
		margin-left: 5px;
	}
	.searching-the {
		font-weight: 600;
		color: black;
	}
	.registerContainer {
		margin-top: 10px;
		margin-bottom: 30px;
		float: left;
	}
	.marginInput {
		margin-left: 20px;
	}
</style>
























