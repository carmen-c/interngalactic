<template>
  <div class="adminActive">
    <div class="container activePost">
      
    <div class="row">
      <div class="col-md-12">
        <div class="text-right pull-right">
          <button class="btn btn-default">Edit</button>
          <button class="btn btn-default" @click="deletePost">Delete</button>
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
          <img class="contractIcon jobDuration" src="../../images/contract.svg"/>
          {{start.seconds | moment("MMMM Do YYYY")}} to {{end.seconds | moment("MMMM Do YYYY")}}
        </p>
      </div>
    </div>
      
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
  
export default {
  data () {
    return {
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
    }
  },
  methods:{
    deletePost: function() {
      var ref = firebase.firestore().collection("jobs");
      ref.doc(this.post_id).delete().then(() => {
        alert("post deleted");
      }),
      (err) => {
        alert(err.message);
      }
    }
  },
  props: ['post_id','position','company','location','description','start','end']
 }
	
</script>

<style>
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