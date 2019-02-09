<template>
<div class="jobWrapper">
			 <div class="jobContainer" id="key">
				<div class="row jobBox">
				  <div class="col-md-3 col-md-push-3 test3">
					  <div class="col-md-12 col-sm-6 col-md-push-3">
						<!-- *********************************************************************** -->
						<!-- COMPANY LOGO'S MUST BE 180 BY 180 -->
						<!-- *********************************************************************** -->
						<img class="companyLogo" src="../../images/TD.png"/>
						</div>
					</div>
				  <div class="col-md-9 col-md-pull-9 textLeft">
					<div class="jobTitle"><h1>{{position}}</h1></div>
					<div class="jobLocation"><p>{{company}} - {{location}}</p></div>
					<!-- *********************************************************************** -->
					<!-- Maxium Word Count for Description is 65 NO MORE -->
					<!-- *********************************************************************** -->
					<div class="jobDescription">{{description}}</div>
					<div class="test3">
						<p>
                          <img class="contractIcon jobDuration" src="../../images/contract.svg"/>
                          <span>{{start.seconds | moment("MMMM Do YYYY")}}</span> to {{end.seconds | moment("MMMM Do YYYY")}}
                          <button class="btn btn-outline-success learnMore" type="submit">Learn More</button>
                        </p></div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
  
  export default {
    props: ['key','position','company','location','description','start','end']
  }
</script>

<style>
/*	************************************* */
	.textLeft {
		text-align: left;
	}
/*	************************************* */
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
		position: relative;
		right: 3%;
	}
	.jobBox {
		width: 100%;
	}
	.companyLogo {
		width: 100%;
		height: auto;
		margin: 10px;
	}
	.learnMore {
		margin: 10px;
	}
	.contractIcon {
		width: 30px;
		margin-right: 10px;
	}
	.jobTitle {
	}
	.jobLocation {
	}
	.jobDescription {
	}
	.jobDuration {
	}
</style>