<template>
  <div class="LoginPage">
			<form class="formContainer">
			  <div class="form-group">
				  <div class="logo-container">
					<img src="../../images/InternLogo.svg" class="internLogo"/>
				  </div>
						<h3 class="logotitle-container">InternGalactic</h3>
<!--				<label for="InputEmail1">Email address</label>-->
				<input type="email" class="form-control" 
					   id="exampleInputEmail1" aria-describedby="emailHelp" 
					   v-model="email" placeholder="Enter email">
			  	</div>
				  <div class="form-group">
<!--					<label for="exampleInputPassword1">Password</label>-->
					<input type="password" class="form-control" 
						   iv-model="password" d="exampleInputPassword1" placeholder="Password">
				  </div>
					 <div class="submitWrap"> 
						  <button @click="login" id="submitButt" type="submit" class="btn btn-primary">Login</button>
						</div>
				<p class="registerP">Not a member yet? 
					<router-link to="/Register">Register</router-link>
				</p>
					</form>
				</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Register from '@/components/Register.vue';
import firebase from 'firebase';

export default {
	name:"Login",
	data() {
		return {
			email: '',
			password: ''
		}
	},
	components:{
		Register:Register
	},
	methods: {
		login: function() {
			firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
			(user) => {
				this. $router.replace('Home')
			},
			(err) => {
				alert(err.message)
			}
		  );
		}
	}
}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
</style>


<style>
	.logo-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 0.5em; 	
	}
	.logotitle-container {
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: 'Comfortaa', cursive;
		margin-bottom: 0.7em;
	}
	.internLogo {
		width: 120px;
		text-align: center;
	}
	.registerP {
		font-size: 12px;
		text-align: center;
		padding-top: 15px;
		margin-bottom: -5px;
	}
	.submitWrap {
		text-align: center;
	}
	#submitButt {
		margin: 4px;
		width: 120px;
	}
	.test {
		text-decoration: none;
		color: white;
	}
	.LoginPage {
		display:flex;
		position:fixed;
		left:0;
		top:0;
		width:100vw;
		height:100vh;
		justify-content:center;
		align-items:center;
		text-align: left;
		color: #000;
		z-index: -1;
		background: linear-gradient(-135deg, #c850c0, #4158d0);
	}
	.formContainer {
		background-color: white;
		padding: 30px 80px;
		border-radius: 15px;
	}
</style>























