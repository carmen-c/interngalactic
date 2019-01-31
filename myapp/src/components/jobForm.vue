<template>
  <div class="jobForm">
	  <div class="formContainer">
        
          <div class="row col-md-12">
            <div class="col-md-9">
              <input type="text" class="form-control"  
                   v-model="company" placeholder="Company Name">
              <input type="text" class="form-control"  
                   v-model="position" placeholder="Intern Position"> 
              <input type="text" class="form-control"  
                   v-model="description" placeholder="Description">
            </div>
            <div class="col-md-3">
                <input type="text" class="form-control" 
                   v-model="start_date" placeholder="Enter start date">
              <input type="text" class="form-control"  
                   v-model="end_date" placeholder="Enter end date">
              <input type="text" class="form-control"  
                   v-model="location" placeholder="Enter location">
            </div>
          </div>
          <div class="row">
            Add Company Logo<br/>
            <button>Choose file</button>
            <input type="radio"> Require resume
            <input type="radio"> Applicants will fill out fields provided on application
            <button @click="postJob">Post</button>
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
          start_date: '',
          end_date: '',
          location: '',
          position: '',
          description: '',
          company: ''
		}
	},
	components:{
	},
	methods: {
		postJob: function() {
            const currentUser = firebase.auth().currentUser;
            if(currentUser) {
              var ref = firebase.firestore().collection('jobs');
              //First add string post_id
              ref.add({
                  uid: currentUser.uid,
                  post_id: 'ref.id',
                  start_date: this.start_date,
                  end_date: this.end_date,
                  location: this.location,
                  position: this.position,
                  description: this.description,
                  company: this.company
                })
              // Update post_id to ref.id
                .then (ref => {
                  ref.update({
                    post_id: ref.id
                  })
              })
            } else {
              alert("error message");
            }
        }
	}
}
</script>























