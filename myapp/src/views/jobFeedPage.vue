<template>
 <div class="jobFeedPage">
	 <clientheader/>
	 <div class="row">
<!--******* LEFT SIDE OF THE PAGE *************		 -->
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
		 
		 
<!--******* RIGHT SIDE OF THE PAGE *************		 -->
	 <div class="col-md-9">
		<div class="row">
		<!--DROP DOWN MENU -->
		  <div class="col-xs-12 col-md-12 dropDown">Drop Down menu will go here</div>
		</div>
		<!--	THIS SECTION CREATE TEMPLATE THAT CAN REPEAT	  -->
		<div class="jobWrapper">
			 <div class="jobContainer">
				<div class="row jobBox">
				  <div class="col-md-3 col-md-push-3 test3">
					  <div class="col-md-12 col-md-push-3">
						<img class="companyLogo" src="../../images/UNIQLO_logo.svg"/>
						</div>
					  <div class="col-md-12 col-md-push-3">
						<button class="btn btn-outline-success learnMore" type="submit">Learn More</button>
						</div>
					</div>
				  <div class="col-md-9 col-md-pull-9 textLeft">
					<div class="test1"><h1>Graphic Design Assistant</h1></div>
					<div class="test2"><p>Uniqlo - Vancouver, BC</p></div>
					<div class="test2"><p>Canada Drives is a young, dynamic, and fast growing company. We work with dealerships and finance partners across Canada to ensure that every customer, regardless of bad credit or no credit, has access to the auto financing they need. Our office is located in the heart of downtown Vancouver and we want you to join our growing team!</p></div>
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
	}
	.floatRight {
		float: right;
	}
	.textLeft {
		text-align: left;
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
	.dropDown {
		background-color: lavender;
		padding: 20px;
	}
	.jobWrapper {
		margin: 10px;
		width: 100%;
	}
	.jobContainer {
		background-color: #ededed;
		border-radius: 15px;
		padding: 10px;
		margin: 40px;
		margin-right: 35px;
	}
	.jobBox {
		width: 100%;
	}
	.companyLogo {
		width: 180px;
		margin: 10px;
	}
	.learnMore {
		margin: 10px;
	}
	.test1 {
	}
	.test2 {
	}
	.test3 {
		height: 100%;
	}
</style>
























