<template>
  <div class="resumeUpload">
	  <clientHeader />
	  <div class="formWrapper">
      <div class="formcontainer">
		<div class="form-group">
			<h2 style="float:left;">Resume and Profile</h2>
		  <input type="text" class="form-control" v-model="name"
			   id="exampleInputName" placeholder="Preferred name">
        </div>
        <div class="form-group">
		  <input type="email" class="form-control" v-model="email"
			   id="exampleInputEmail1" aria-describedby="emailHelp" 
			   placeholder="Enter email">
        </div>
		<div class="form-group">
		  <input type="password" class="form-control" v-model="password"
				   id="exampleInputPassword1" placeholder="Password">
		</div>
		<div class="form-group">
		  <input type="password" class="form-control" v-model="retypePass" placeholder="Retype Password">
		</div>
		<div class="submitWrap">
			<div>
				<p style="float:left">Upload Reusme</p>
		  			<button v-on:click="signup" style="float:left;" type="submit" class="btn btn-primary">Choose File</button>
			</div>
		  <button v-on:click="signup" style="float:right;" type="submit" class="btn btn-primary">Update Profile</button>
		</div>
      </div>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';
import clientHeader from '@/components/clientHeader.vue';
import firebase from 'firebase';
	
export default {
	name: 'register',
	data(){
		return {
            name: '',
			email: '',
			password: '',
			retypePass: ''
		}
		
	},
	methods:{
		signup:function() {
			if(this.password == this.retypePass){
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
					(user)=>{
						alert('account created')
                        console.log(user)
						var ref = firebase.firestore().collection("users").doc(user.user.uid);
                        ref.set({
                          name: this.name,
                          email: this.email,
                          password: this.password,
                        })
					},
					function(err){
						alert("error")
					}
				);
			}
			
		}
	},
	components: {
		Login:Login,
		clientHeader:clientHeader,
	}
}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");
</style>
<style>
	.submitWrap {
		text-align: center;
		width: 100%;
	}
	.formWrapper {
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
	}
	.formcontainer {
		background-color: white;
		justify-content:center;
		align-items:center;
		padding: 30px 80px;
		border-radius: 15px;
	}

</style>
