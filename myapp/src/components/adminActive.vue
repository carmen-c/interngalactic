<template>
  <div class="adminActive">
    <!-- <b-card no-body class id="cardWrapper1"> -->
    <div class="container activePost">
      <div class="row">
        <div class="col-md-12">
          <div class="text-right pull-right">
            <b-button v-b-modal="'myModal' + post_id" variant="primary">Edit</b-button>
            <b-button variant="primary" class="admin-posting-btn" @click="deletePost">Delete</b-button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-2">
          <p>Logo Here</p>
        </div>
        <div class="col-md-10 text-left">
          <h1>{{position}}</h1>
          <p>{{company}} - {{location}} posted on {{post_date.seconds | moment("MMMM Do YYYY")}}</p>
          <p>
            <img class="contractIcon jobDuration" src="../../images/contract.svg">
            {{start.seconds | moment("MMMM Do YYYY")}} to {{end.seconds | moment("MMMM Do YYYY")}}
          </p>
        </div>
      </div>

      <b-modal :id="'myModal' + post_id" :title="'Editing '+ position" hide-footer>
        <div>
          <editPost
            v-bind:post_id="post_id"
            v-bind:position="position"
            v-bind:company="company"
            v-bind:location="location"
            v-bind:description="description"
            v-bind:start="start.seconds"
            v-bind:end="end.seconds"
            v-on:editPost="editPost()"
          />
        </div>
      </b-modal>
      <!-- <b-collapse :id="post_id" role="tabpanel" v-model="showCollapse">
          <b-card-body>
            <editPost
              v-bind:post_id="post_id"
              v-bind:position="position"
              v-bind:company="company"
              v-bind:location="location"
              v-bind:description="description"
              v-bind:start="start.seconds"
              v-bind:end="end.seconds"
            />
          </b-card-body>
      </b-collapse>-->
    </div>
    <!-- </b-card> -->
  </div>
</template>

<script>
import firebase from "firebase";
import editPost from "./editPost.vue";

export default {
  name: "adminActive",
  components: {
    editPost
  },
  data() {
    return {};
  },
  methods: {
    deletePost: function() {
      var ref = firebase.firestore().collection("jobs");
      ref
        .doc(this.post_id)
        .delete()
        .then(() => {
          this.$emit("refreshit");
        }),
        err => {
          alert(err.message);
        };
    },
    editPost: function() {
      this.$emit("refreshit");
    }
  },
  props: [
    "post_id",
    "position",
    "company",
    "location",
    "description",
    "start",
    "end",
    "post_date"
  ]
};
</script>

<style>
/* #cardWrapper1 {
  border: none;
  width: 100%;
}
.admin-posting-btn {
  background-color: #7fd686;
}
.admin-posting-btn:active,
.admin-posting-btn:hover {
  background: #019966;
}
.activePost {
  background-color: #ededed;
  border-radius: 15px;
  padding: 10px;
  margin: 40px;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right; 
} */
</style>