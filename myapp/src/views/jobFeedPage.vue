<template>
 <div class="jobFeedPage">
	 <clientheader/>
	 <div class="row">
<!--******* LEFT SIDE OF THE PAGE *************		 -->
	  <div class="col-md-3 marginTop linkStyles">
		<div class="recent-Location">
		<h4 class="h4MarginBottom">Recent Searches:</h4>
		  <p><a href="#">Graphic Designer</a></p>
		  <p><a href="#">Developer</a></p>
		  <p><a href="#">Content Creator</a></p>
		  <p><a href="#">UI/UX Design</a></p>
		  <p><a href="#">Marketing</a></p>
	</div>
<hr class="line"/>
	<div class="recent-Location">
		<h4 class="h4MarginBottom">Locations:</h4>
		  <p><a href="#">Vancouver (104)</a></p>
		  <p><a href="#">Burnaby (92)</a></p>
		  <p><a href="#">Richmond (59)</a></p>
		  <p><a href="#">Coquitlam (36)</a></p>
		<p><a href="#">Surrey (6)</a></p>
	</div>
<hr class="line"/>
	<div class="recent-Location">
		<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Clear All Searches</button>
	</div>
</div>
		 
<!--<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>-->
<!--******* RIGHT SIDE OF THE PAGE *************		 -->
	 <div class="col-md-9">
		 <div class="test1">
		<div class="row">
			<!--DROP DOWN MENU -->
			  <div class="col-xs-12 col-md-12 dropDown">
				  <div>
					<b-form inline>
					  <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Internship Title" />
					  <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
						<b-input id="inlineFormInputGroupUsername2" placeholder="Location" />
					  </b-input-group>
						<div>
						  <b-dropdown id="ddown1" text="Sort By" class="m-md-2">
							<b-dropdown-item>First Action</b-dropdown-item>
							<b-dropdown-item>Second Action</b-dropdown-item>
							<b-dropdown-item>Third Action</b-dropdown-item>
						  </b-dropdown>
						</div>
					</b-form>
				  </div>
			</div>
		</div>
		 </div>
		<!--	THIS SECTION CREATE TEMPLATE THAT CAN REPEAT	  -->
		<jobPostContainer />
		<!--	THIS SECTION CREATE TEMPLATE THAT CAN REPEAT	  -->
	</div> 
</div>
</div>
</template>

<script>
// @ is an alias to /src
import clientheader from '@/components/clientHeader.vue'
import firebase from 'firebase';
import jobPostContainer from '@/components/jobPostContainer.vue'
// Boot Strap Vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
  
	export default {
		name:"LoginPage",
		components: {
			clientheader,
			jobPostContainer
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
@import url("//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css")
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");
	.col-md-3 {
	}
	.col-md-9 {
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
	.linkStyles a {
		color: black;
		
	}
/*	*******************************  */
/*	Right Side  */
	.dropDown {
		padding: 20px;
	}
	.inputWidth {
		width: 200px;
	}
	.test1 {
		justify-content: left;
		display: flex;
		padding: 20px;
	}
</style>
























