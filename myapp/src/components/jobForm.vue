<template>
  <div class="jobForm">
    <div class="wrapper">
      <div
        class="alert alert-success alert-dismissable"
        :id="post_id + 'alert'"
        :style="'display: '+ applySuccess"
      >
        <button type="button" class="close" aria-hidden="true" @click="dismissAlert">&times;</button>
        Success! You have posted your job.
      </div>
      <div class="inner">
        <div class="form-row pleasefilloutTxt">
          <h1>Please fill out the fields below.</h1>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <input
              type="text"
              class="form-control"
              v-model="company"
              placeholder="Name of your company"
            >
            <input
              type="text"
              class="form-control"
              v-model="position"
              placeholder="Internship position"
            >
            <input type="text" class="form-control" v-model="location" placeholder="Enter Location">
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
        <textarea
          v-model="description"
          placeholder="Description of the Internship"
          class="form-control"
          style="height: 130px;"
        ></textarea>
        <button class="postJobBtn" @click="postJob">Post Now</button>
      </div>
    </div>

    <!--
  
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
    -->
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
      applySuccess: "none",
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
    dismissAlert: function() {
      this.applySuccess = "none";
    },
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
            this.applySuccess = "block";
          });
      } else {
        alert("error message");
      }
    },
    changePage: function(value) {
      this.store.adminPage = value;
    }
  }
};
</script>

<style>
.pleasefilloutTxt {
  text-align: center;
  justify-content: center;
}
.inner h1 {
  font-size: 3em;
  margin-bottom: 1%;
  border-bottom: 1px solid black;
  border-bottom-style: dotted;
  width: 50%;
}
.jobForm {
  margin-top: 2%;
}
.form-control {
  font-size: 1em;
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
.datePickerStyle input {
  width: 20%;
  float: left;
  border-radius: 2px;
  margin-bottom: -1%;
  border-style: none;
  border: 1.2px solid #e6e6e6;
  padding: 5px;
}
</style>
<style>
.postJobBtn {
  height: 47px;
  width: 174px;
  display: flex;
  border: none;
  color: #fff;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 30px;
  cursor: pointer;
  font-family: "Montserrat-Medium";
  text-transform: uppercase;
  background: #7fd686;
  border-radius: 5px;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  overflow: hidden;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-property: color, background-color;
  transition-property: color, background-color;
}
.postJobBtn i {
  margin-left: 8px;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.postJobBtn:hover {
  -webkit-animation-name: hvr-back-pulse;
  animation-name: hvr-back-pulse;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-color: #019966;
  color: white;
}
.postJobBtn:hover i {
  -webkit-animation-name: hvr-icon-buzz-out;
  animation-name: hvr-icon-buzz-out;
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.form-control {
  height: 47px;
  display: block;
  border: 1px solid #e6e6e6;
  background: none;
  border-radius: 5px;
  padding: 0 19px;
}
.form-control:focus {
  border: 1px solid #f4d5cc;
}
.form-control::-webkit-input-placeholder {
  color: #999;
}
.form-control::-moz-placeholder {
  color: #999;
}
.form-control:-ms-input-placeholder {
  color: #999;
}
.form-control:-moz-placeholder {
  color: #999;
}

select.form-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  color: #999;
}
select.form-control option[value=""][disabled] {
  display: none;
}

textarea.form-control {
  width: 100%;
  padding-top: 13px;
  padding-bottom: 13px;
}

.form-row {
  display: flex;
  margin-bottom: 20px;
}
.form-row .form-control {
  width: 50%;
}
.form-row .form-control:first-child {
  margin-right: 20px;
}
.form-row .form-holder {
  width: 50%;
}
.form-row .form-holder .form-control {
  width: 100%;
}

.form-holder {
  position: relative;
}
.form-holder i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
}

@-webkit-keyframes hvr-back-pulse {
  50% {
    background-color: #7fd686;
  }
}
@keyframes hvr-back-pulse {
  50% {
    background-color: #7fd686;
  }
}
@-webkit-keyframes hvr-icon-buzz-out {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}
@keyframes hvr-icon-buzz-out {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}
@media (max-width: 991px) {
  .inner {
    min-width: auto;
    max-width: 660px;
  }

  form {
    padding-top: 0;
  }
}
@media (max-width: 767px) {
  .inner {
    display: block;
    transform: translateX(0);
    border-radius: 0;
    box-shadow: none;
  }

  .image-holder img {
    transform: translateX(0);
    border-radius: 0;
  }

  form {
    transform: translateX(0);
    padding-top: 40px;
  }

  .form-row {
    display: block;
  }
  .form-row .form-control,
  .form-row .form-holder {
    width: 100%;
  }

  .form-control {
    margin-bottom: 20px;
  }

  .wrapper {
    background: none;
  }
}
</style>



















