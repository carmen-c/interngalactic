<template>
  <div class="register">
	<form class="formContainer">
	  <div class="form-group">
		   <div class="logo-container">
					<img src="../../images/InternLogo.svg" class="internLogo"/>
				  </div>
						<h3 class="logotitle-container">InternGalactic</h3>
		<input type="email" class="form-control" v-model="email"
			   id="exampleInputEmail1" aria-describedby="emailHelp" 
			   placeholder="Enter email">
	  	</div>
		  <div class="form-group">
			<input type="password" class="form-control" v-model="password"
				   id="exampleInputPassword1" placeholder="Password">
		  </div>
		<div class="form-group">
			<input type="password" class="form-control" v-model="retypePass"
				    placeholder="Retype Password">
		  </div>
			 <div class="submitWrap"> 
				  <button v-on:click="signup" id="submitButt" type="submit" class="btn btn-primary">Register</button>
				</div>
			<p class="registerP">Already a member? 
					<router-link to="/Login">Login</router-link>
				</p>
			</form>
		</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';
import firebase from 'firebase';
	
export default {
	name: 'register',
	data(){
		return {
			email: '',
			password: '',
			retypePass: ''
		}
		
	},
	methods:{
		signup:function() {
			if(this.password == this.retypePass){
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
					function(user){
						alert('account created')
						var uid = db.createId();
						db.collection("users").doc(this.uid).set({
							email: this.email,
							password: this.password,
							uid: this.uid
						})
					},
					function(err){
						alert
					}
				);
			}
			
		}
	},
	components: {
		Login:Login
	}
}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");
</style>
<style>
	.submitWrap {
		text-align: center;
		    text-decoration: none;
	}
	#submitButt {
		margin: 4px;
		color: white;
		text-decoration: none;
	}
	.register {
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























