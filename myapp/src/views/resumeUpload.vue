<template>
<div class="resumeUpload">
	<clientHeader />
	<div class="formWrapper">
		<form class="formContainer">
		  <div class="form-group">
			<label for="exampleInputEmail1">Email address</label>
			<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">Password</label>
			<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
		  </div>
		  <div class="form-group">
			<label for="exampleInputFile">File input</label>
			<input type="file" id="exampleInputFile">
		  </div>

		  <button type="submit" class="btn btn-default">Submit</button>
		</form>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
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
		clientHeader:clientHeader,
	}
}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");
</style>
<style>
	.resumeUpload {
		width: 100vw;
		height: 100vh;
	}
	.formWrapper {
		display:flex;
		position:fixed;
		width:100vw;
		height:100vh;
		justify-content:center;
		align-items:center;
		text-align: left;
		color: #000;
	}
	.formContainer {
		text-align: left;
		padding: 100px;
		
	}
</style>
