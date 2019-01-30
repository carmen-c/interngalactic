<template>
 <div class="jobFeedPage">
	 <clientheader/>
	 <div class="row">
	  <div class="col-md-3 marginTop">
		<div class="recent-Location">
		<h4 class="h4MarginBottom">Recent Searches:</h4>
		  <p>Graphic Designer</p>
		  <p>Developer</p>
		  <p>Content Creator</p>
		  <p>UI/UX Design</p>
		  <p>Marketing</p>
	</div>
<hr class="line"/>
	<div class="recent-Location">
		<h4 class="h4MarginBottom">Locations:</h4>
		  <p>Vancouver (104)</p>
		  <p>Burnaby (92)</p>
		  <p>Richmond (59)</p>
		  <p>Coquitlam (36)</p>
		  <p>Surrey (6)</p>
	</div>
<hr class="line"/>
	<div class="recent-Location">
		<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Clear All Searches</button>
	</div>
</div>
	  <div class="col-md-9">
		<div>Hello</div>
	</div>
	</div>
</div>
</template>

<script>
// @ is an alias to /src
import clientheader from '@/components/clientHeader.vue'
import firebase from 'firebase';
  
	export default {
		name:"LoginPage",
		components: {
			clientheader
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
	.col-md-3 {
	}
	.col-md-9 {
		background-color: beige;
	}
/*	*******************************  */
	.line {
		margin-top: 20px;
		width: 60%;
		border:1px solid #7fd686;
	}
/*	*******************************  */
/*	Left Side  */
	.recent-Location {
		text-align: left;
		padding-left: 70px;
	}
	.marginTop {
		margin-top: 50px;
	}
	.h4MarginBottom {
		margin-bottom: 20px;
	}
/*	*******************************  */
/*	Right Side  */
</style>
























