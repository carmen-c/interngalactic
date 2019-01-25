<template>
  <div class="jobForm">
	  <div class="formContainer">
			  <div class="form-group">
				<input type="text" class="form-control" 
					   id="exampleInputEmail1" aria-describedby="emailHelp" 
					   v-model="email" placeholder="Enter email">
			  	</div>
				  <div class="form-group">
					<input type="password" class="form-control" 
						   iv-model="password" d="exampleInputPassword1" placeholder="Password">
				  </div>
			</div>
		</div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase';

export default {
	name:"jobForm",
	data() {
		return {
			email: '',
			password: ''
		}
	},
	components:{
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























