<template>
  <div class="adminActive">
    <div class="edit">
      <editPost
        v-if="editPostDisplay == true"
        v-bind:post_id="post_id"
        v-bind:position="position"
        v-bind:company="company"
        v-bind:location="location"
        v-bind:description="description"
        v-bind:start="start.seconds"
        v-bind:end="end.seconds"
      />
    </div>
    <div class="container activePost">
      <div class="row">
        <div class="col-md-12">
          <div class="text-right pull-right">
            <button class="admin-posting-btn" @click="editPost">Edit</button>
            <button class="admin-posting-btn" @click="deletePost">Delete</button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-2">
          <p>Logo Here</p>
        </div>
        <div class="col-md-10 text-left">
          <h1>{{position}}</h1>
          <p>{{company}} - {{location}}</p>
          <p>
            <img class="contractIcon jobDuration" src="../../images/contract.svg">
            {{start.seconds | moment("MMMM Do YYYY")}} to {{end.seconds | moment("MMMM Do YYYY")}}
          </p>
        </div>
      </div>
    </div>
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
    return {
      editPostDisplay: false
    };
  },
  methods: {
    deletePost: function() {
      var ref = firebase.firestore().collection("jobs");
      ref
        .doc(this.post_id)
        .delete()
        .then(() => {
          alert("post deleted");
        }),
        err => {
          alert(err.message);
        };
    },
    editPost: function() {
      this.editPostDisplay = true;
    }
  },
  props: [
    "post_id",
    "position",
    "company",
    "location",
    "description",
    "start",
    "end"
  ]
};
</script>

<style>
.admin-posting-btn {
  background-color: #7fd686;
  color: #ffffff;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  padding: 3px 10px;
  margin: 0 5px;
}
.admin-posting-btn:hover {
  background: linear-gradient(-135deg, #c850c0, #4158d0);
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
}
</style>