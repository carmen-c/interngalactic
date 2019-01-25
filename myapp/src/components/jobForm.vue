<template>
  <div class="jobForm">
	  <div class="formContainer">
        
          <div class="form-group">
            <input type="text" class="form-control" 
                   id="exampleInputEmail1" aria-describedby="emailHelp" 
                   v-model="start_date" placeholder="Enter start date">
            <input type="text" class="form-control" 
                   id="exampleInputEmail1" aria-describedby="emailHelp" 
                   v-model="end_date" placeholder="Enter end date">
            <input type="text" class="form-control" 
                   id="exampleInputEmail1" aria-describedby="emailHelp" 
                   v-model="location" placeholder="Enter location">
            <input type="text" class="form-control" 
                   id="exampleInputEmail1" aria-describedby="emailHelp" 
                   v-model="title" placeholder="Enter title"> 
            <input type="text" class="form-control" 
                   id="exampleInputEmail1" aria-describedby="emailHelp" 
                   v-model="description" placeholder="Enter description"> 
            <input type="text" class="form-control" 
                   id="exampleInputEmail1" aria-describedby="emailHelp" 
                   v-model="company" placeholder="Enter company">
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
          title: '',
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
              var ref = firebase.firestore().collection('jobs').doc();
              ref.set({
                  uid: currentUser.uid,
                  post_id: ref.id,
                  start_date: this.start_date,
                  end_date: this.end_date,
                  location: this.location,
                  title: this.title,
                  description: this.description,
                  company: this.company
                })
            } else {
              alert("error message");
            }
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























