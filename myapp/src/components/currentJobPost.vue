<template>
<div class="currentJobPost">
    <div class="row">
      <h2 style="margin-bottom:40px">Your active job postings.</h2>
    </div>
  
  <!--	REPLACE WITH COMPONENT FOR JOB POST	  -->
    <adminActive 
      v-for="job in activePosts"
      v-bind:post_id="job.post_id"
      v-bind:position="job.position"
      v-bind:company="job.company"
      v-bind:location="job.location"
      v-bind:description="job.description"
      v-bind:start="job.start_date"
      v-bind:end="job.end_date"
    />


<!-- b-col-4.vue -->

</div>
</template>

<style>
	.applicants {
		
	}
	.Applicant-container {
		background-color: #ededed;
		margin: 10px;
		border-radius: 10px;
	}
	.applicantName {
		font-weight: bold;
		padding: 10px;
		margin: 10px;
	}
	.downloadResume {
		margin: 10px;
		padding: 10px;
	}
	.downloadResume a {
		color: #7fd686;
		text-decoration: none;
		border: 1px solid #7fd686;
		padding: 10px;
		border-radius: 10px;
	}
	.downloadResume a:hover {
  		text-decoration: none;
		color: #7fd686;
	}
	.applicantReason {
		margin: 10px;
		padding: 10px;
	}

</style>

<script>
// @ is an alias to /src
import AdminHeader from '@/components/adminHeader.vue'
import firebase from 'firebase';
import adminActive from '@/components/adminActive.vue'
  
export default {
  name: 'currentJobPost',
  components: {
    AdminHeader,
    adminActive
  },
  data() {
    return {
      clickedpost: "",
      activePosts: []
    }
  },
  methods: {
    checkPosts: function(){
      var currentUser = firebase.auth().currentUser;
      var jobs = firebase.firestore().collection("jobs");
      
// search jobs collection for posts the logged in user created and then grab the posts 
      var query = jobs.where("uid", "==", currentUser.uid).get();
      
  // after i get my posts put it in activePosts array
      query.then((snapshot)=>{
        snapshot.forEach((doc)=>{
          var data = doc.data();
//          console.log(data); see what posts you get back from firestore
          this.activePosts.push({
             post_id: data.post_id,
             uid: data.uid,
             position: data.position,
             company: data.company,
             location: data.location,
             start_date: data.start_date,
             end_date: data.end_date,
             description: data.description
          })
        })
      },
      (err) =>{
          alert(err.message);
      });
      
    }
  },
  mounted: function() {
    this.checkPosts();
  }
  
}
</script>