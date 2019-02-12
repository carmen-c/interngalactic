<template>
  <div class="editPost">
	  <div class="formContainer">
          
          <div class="row">
            <h2 style="margin-bottom:40px">Editing.</h2>
          </div>
          <div class="row col-md-12">
            <div class="col-md-5">
              {{start}} {{end}} {{post_id}}
              <input type="text" class="form-control"  
                   v-model="company" placeholder="Company Name">
              <input type="text" class="form-control"  
                   v-model="position" placeholder="Intern Position"> 
              <input type="text" class="form-control description"  
                   v-model="description" placeholder="Description">
            </div>
            <div class="col-md-3">
                <v-date-picker class="datePickerStyle"
                  mode='range'
                  v-model='edit_myDates'
                  :theme-styles='themeStyle'
                  tint-color='#7fd686'
                  show-caps>
                </v-date-picker>
				<div style="margin-left:10px">
              <input type="text" class="form-control "  
                   v-model="location" placeholder="Enter location">
					</div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <p class="addCompanyLogo"><b>Add Company Logo</b></p><br/>
              <ul class="other-info">
                <li><button>Choose file</button></li>
                <li><input type="radio"> Require resume</li>
                <li><input type="radio"> Applicants will fill out fields provided on application</li>
                <li><button @click="saveJob">Save</button></li>
              </ul>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase';
import AdminHeader from '@/components/adminHeader.vue'
  
export default {
	name:"editPost",
    props: ['post_id','position','company','location','description','start','end'],
	data() {
		return {
          edit_start_date: '',
          edit_end_date: '',
          edit_location: '',
          edit_position: '',
          edit_description: '',
          edit_company: '',
          edit_myDates: '',
          themeStyle: {},
          edit_postid: 'something'
		}
	},
	components:{
      AdminHeader
	},
	methods: {
		saveJob: function() {
          
          if(this.edit_myDates != ""){
            this.edit_start_date = this.edit_myDates.start
            this.edit_end_date = this.edit_myDates.end
          }
          
            const currentUser = firebase.auth().currentUser;
            if(currentUser) {
              var ref = firebase.firestore().collection('jobs').doc(this.edit_post_id);
              //First add string post_id
              ref.update({
                  uid: currentUser.uid,
                  post_id: 'ref.id',
                  start_date: this.edit_start_date,
                  end_date: this.edit_end_date,
                  location: this.edit_location,
                  position: this.edit_position,
                  description: this.edit_description,
                  company: this.edit_company
                })

               .then (()=>{
                alert("updated");
                })
            } else {
              alert("error message");
            }
        },
      grabData: function() {
        this.edit_start_date = this.start,
        this.edit_end_date = this.end,
        this.edit_location = this.location,
        this.edit_position = this.position,
        this.edit_description = this.description,
        this.edit_company = this.company,
        this.edit_myDates = {start: this.start, end: this.end},
        this.edit_postid = this.post_id
      }
	},
    created: function(){   
      this.themeStyle = {
                          wrapper: {
                            background: 'linear-gradient(-135deg, #c850c0, #4158d0)',
                            color: '#fafafa'
                          },
                          weekdays: {
                            color: '#7fd686'
                          },
                          weeks: {
                            color: '#ffffff'
                          }
                        }
      this.grabData();
    }
}
</script>

<style>
  .form-control {
    margin-bottom: 1em;
  }
  .other-info {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .other-info li {
    margin: 0 1em;
  }
  .addCompanyLogo {
    text-align: left;
    text-indent: 1em;
	 margin-bottom: -10px;
  }
	.datePickerStyle {
		width: 220px;
		padding-bottom: 25px;
	}
</style>





















