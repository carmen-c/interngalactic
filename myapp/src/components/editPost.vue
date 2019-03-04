<template>
  <div class="editPost">
    <div class="row">
      <div class="container">
        <h2 class="text-left">Editing <b>{{position}}</b> internship for <b>{{company}}</b>.</h2>
      </div>
    </div>
    <div class="container">
<div class="form-row">
        <div class="form-group col-md-12">
          <input 
                 type="text" 
                 class="form-control" 
                 v-model="edit_company" 
                 placeholder="Name of your company">
          <input 
                 type="text" 
                 class="form-control" 
                 v-model="edit_position" 
                 placeholder="Internship position"> 
          <input 
                 type="text" 
                 class="form-control" 
                 v-model="edit_location" 
                 placeholder="Enter Location">
          <v-date-picker
            class="datePickerStyle"
            mode="range"
            v-model="myDates"
            :theme-styles="themeStyle"
            tint-color="#7fd686"
            show-caps
          ></v-date-picker>
  </div>
  </div>
  </div>
     <textarea 
               v-model="edit_description" 
               placeholder="Description of the Internship" 
               class="form-control" 
               style="height: 130px;">
  </textarea>
    <div class="row">
      <div class="container">
        <div class="col-md-12">
          <p class="addCompanyLogo">
            <b>Add Company Logo</b>
          </p>
          <br>
          <ul class="other-info">
            <li>
              <button>Choose file</button>
            </li>
            <li>
              <input type="radio"> Require resume
            </li>
            <li>
              <input type="radio"> Applicants will fill out fields provided on application
            </li>
            <li>
              <button @click="saveJob">Save</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import AdminHeader from "@/components/adminHeader.vue";

export default {
  name: "editPost",
  props: [
    "post_id",
    "position",
    "company",
    "location",
    "description",
    "start",
    "end"
  ],
  data() {
    return {
      edit_start_date: "",
      edit_end_date: "",
      edit_location: "",
      edit_position: "",
      edit_description: "",
      edit_company: "",
      edit_myDates: "",
      themeStyle: {}
    };
  },
  components: {
    AdminHeader
  },
  methods: {
    saveJob: function() {
      if (this.edit_myDates != "") {
        this.edit_start_date = this.edit_myDates.start;
        this.edit_end_date = this.edit_myDates.end;
      }

      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        var ref = firebase
          .firestore()
          .collection("jobs")
          .doc(this.post_id);
        //First add string post_id
        ref
          .update({
            start_date: this.edit_start_date,
            end_date: this.edit_end_date,
            location: this.edit_location,
            position: this.edit_position,
            description: this.edit_description,
            company: this.edit_company
          })

          .then(() => {
            alert("updated");
          });
      } else {
        alert("error message");
      }
    },
    grabData: function() {
      (this.edit_start_date = this.start),
        (this.edit_end_date = this.end),
        (this.edit_location = this.location),
        (this.edit_position = this.position),
        (this.edit_description = this.description),
        (this.edit_company = this.company),
        (this.edit_myDates = { start: this.start, end: this.end });
    }
  },
  created: function() {
    this.themeStyle = {
      wrapper: {
        background: "linear-gradient(-135deg, #c850c0, #4158d0)",
        color: "#fafafa"
      },
      weekdays: {
        color: "#7fd686"
      },
      weeks: {
        color: "#ffffff"
      }
    };
    this.grabData();
  }
};
</script>

<style>
.form-control {
  margin: 5px 0;
}
.editBox {
  padding: 50px 0 50px 50px !important;
  background-color: red;
}
  .editPost h2 {
    font-size: 1.75em;
  }
.editBox2 {
  padding: 50px 50px 50px 0 !important;
}
</style>





















