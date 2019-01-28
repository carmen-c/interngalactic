<template>
  <div class="resumeUpload">
	  <clientHeader />
	  <div class="formWrapper">
      <div class="formcontainer">
			<h2 class="resumeH">Resume and Profile</h2>
		  <input type="text" class="form-control" v-model="name"
			   id="exampleInputName" placeholder="Preferred name">
		  <input type="email" class="form-control" v-model="email"
			   id="exampleInputEmail1" aria-describedby="emailHelp" 
			   placeholder="Enter email">
		  <input type="text" class="form-control" v-model="number"
				   id="exampleInputNumber" placeholder="Phone Number">
		<div class="submitWrap">
			<div class="row">
  				<div class="col-6">
	  				<p class="uploadR" >Upload Resume</p>
		  			<button v-on:click="signup" type="submit" class="btn btn-primary uploadBtn">Choose File</button></div>
  				<div class="col-6">
					<button v-on:click="signup" type="submit" class="btn btn-primary updateBtn">Update Profile</button>
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
import Login from '@/components/Login.vue';
import clientHeader from '@/components/clientHeader.vue';
import firebase from 'firebase';
	
export default {
	name: 'resumeUpload',
	data(){
		return {
		}
	},
	methods:{
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
	.resumeH {
		float: left;
		margin:20px;
	}
	.form-control {
		margin: 20px;
	}
	.updateBtn {
		float: right;
	}
	.uploadBtn {
		text-align: left;
		float: left;
	}
	.uploadR {
		text-align:left;
		padding: 0;
		margin:0;
	}
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
		justify-content:center;
		align-items:center;
		padding: 30px 80px;
		border-radius: 15px;
		width: 30%;
		
	}

</style>
