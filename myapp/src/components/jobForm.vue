<template>
  <div class="jobForm">
    <div class="formContainer">
      <div class="row">
        <h2>Please fill out the fields below.</h2>
      </div>

      <div class="row col-md-12">
        <div class="col-md-5">
          <input type="text" class="form-control" v-model="company" placeholder="Company Name">
          <input type="text" class="form-control" v-model="position" placeholder="Intern Position">
          <input
            type="text"
            class="form-control description"
            v-model="description"
            placeholder="Description"
          >
        </div>
        <div class="col-md-3">
          <v-date-picker
            class="datePickerStyle"
            mode="range"
            v-model="myDates"
            :theme-styles="themeStyle"
            tint-color="#7fd686"
            show-caps
          ></v-date-picker>
          <div style="margin-left:10px">
            <input type="text" class="form-control" v-model="location" placeholder="Enter location">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8">
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
              <button @click="postJob">Post</button>
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
  name: "jobForm",
  data() {
    return {
      start_date: "",
      end_date: "",
      location: "",
      position: "",
      description: "",
      company: "",
      myDates: "",
      attribute: {},
      themeStyle: {
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
      }
    };
  },
  components: {
    AdminHeader
  },
  methods: {
    postJob: function() {
      this.start_date = this.myDates.start;
      this.end_date = this.myDates.end;

      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        var ref = firebase.firestore().collection("jobs");
        //First add string post_id
        ref
          .add({
            uid: currentUser.uid,
            post_id: "ref.id",
            start_date: this.start_date,
            end_date: this.end_date,
            location: this.location.toLowerCase(),
            position: this.position.toLowerCase(),
            description: this.description,
            company: this.company,
            post_date: new Date()
          })
          // Update post_id to ref.id
          .then(ref => {
            ref.update({
              post_id: ref.id
            });
          })
          .then(() => {
            this.changePage(1);
          });
      } else {
        alert("error message");
      }
    },
    changePage: function(value) {
      this.store.adminPage = value;
      this.adminPage = this.store.adminPage;
    }
  }
};
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





















