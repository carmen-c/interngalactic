<template>
  <div class="adminActive">
    <!-- <b-card no-body class id="cardWrapper1"> -->
    <div class="container activePost">
      <div class="row">
        <div class="col-md-12">
          <div class="text-right">
            <b-button
              v-b-modal="'myModal' + post_id"
              variant="primary"
              class="admin-posting-btn"
            >Edit</b-button>&nbsp;&nbsp;
            <b-button variant="primary" class="admin-posting-btn" @click="deletePost">Delete</b-button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-2 postimage">
          <img class="contractIcon jobDuration" src="../../images/contract.svg">
        </div>
        <div class="col-md-10 text-left postinfo">
          <h1>{{position}}</h1>
          <p><i class="fas fa-building icon"></i>{{company}}
          &nbsp;&nbsp;
          <i class="fas fa-map-marker-alt icon"></i>{{location}}
          </p>
          <p>{{start.seconds | moment("MMMM Do YYYY")}} to {{end.seconds | moment("MMMM Do YYYY")}}</p>
        </div>
      </div>

      <div class="row postedDate">
          posted on {{post_date.seconds | moment("MMMM Do YYYY")}}
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
.admin-posting-btn {
  background-color: #7fd686 !important;
  border: none !important;
}
.admin-posting-btn:active,
.admin-posting-btn:hover {
  background: #019966 !important;
}
.activePost {
  background-color: #ededed;
  padding: 10px;
  margin: 40px;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right !important;
}
.postimage img {
  padding: 10%;
  width: 60%;
  margin: 0;
}
.postinfo {
  font-size: 1.5em;
}
</style>
<style scoped>
.icon {
  margin: 0 !important;
  padding: 0 5px 0 0;
  font-size: 1em !important;
}
.postedDate {
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 15px;
}
</style>