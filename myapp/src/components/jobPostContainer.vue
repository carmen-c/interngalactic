<template>
<div class="jobPostContainer">
  <div role="tablist" class="tablist">
    <b-card no-body class="mb-1" id="cardWrapper">
      <div class="jobWrapper">
        <div class="jobContainer" :id="post_id">
          <div class="row jobBox">
            <div class="col-md-3 col-md-push-3 test3">
              <div class="col-md-12 col-sm-6 col-md-push-3">
                <!-- *********************************************************************** -->
                <!-- COMPANY LOGO'S MUST BE 180 BY 180 -->
                <!-- *********************************************************************** -->
                <img class="companyLogo" src="../../images/TD.png">
              </div>
            </div>
            <div class="col-md-9 col-md-pull-9 textLeft">
              <div class="jobTitle">
                <h1>{{position}}</h1>
              </div>
              <div class="jobLocation">
                <p>
                  {{company}} - {{location}}
                  posted on {{post_date.seconds | moment("MMMM Do YYYY")}}
                </p>
              </div>
              <!-- *********************************************************************** -->
              <!-- Maxium Word Count for Description is 65 NO MORE -->
              <!-- *********************************************************************** -->
              <div class="jobDescription">
                <p v-if="description.length <= 200">{{description}}</p>
                <p v-if="description.length >200">{{description.substring(0,200)+"..."}}</p>
              </div>
              <div class="test3">
                <p>
                  <img class="contractIcon jobDuration" src="../../images/contract.svg">
                  <span>{{start.seconds | moment("MMMM Do YYYY")}}</span>
                  to {{end.seconds | moment("MMMM Do YYYY")}}
                  <!--
             class is for static classes, it doesnt change
             :class will check if showCollapse is collapsed or null
             :aria-controls tells this button what it controls
             :aria-expanded will toggle showCollapse to true or false
                  -->
                  <button
                    block
                    href="#"
                    @click="showCollapse = !showCollapse"
                    class="btn btn-outline-success learnMore"
                    :class="showCollapse ? 'collapsed':'null'"
                    :aria-controls="post_id"
                    :aria-expanded="showCollapse ? 'true':'false'"
                    type="submit"
                  >Learn More</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      we bind this to showCollapse so it knows when to display/disappear -->
      <b-collapse :id="post_id" role="tabpanel" v-model="showCollapse" class="expandStyling">
        <b-card-body>
          <h1 class="card-text">Job Description</h1>
          <h4>{{start.seconds | moment("MMMM Do YYYY")}} to {{end.seconds | moment("MMMM Do YYYY")}}</h4>
          <br/>
          <p>{{ description }}</p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</div>
</template>

<script>
export default {
  data() {
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
      `,
      showCollapse: false
    };
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

<!-- accordion-1.vue -->
<style>
/*	************************************* */
.textLeft {
  text-align: left;
}
/*	************************************* */
.jobWrapper {
  margin: 10px;
  width: 100%;
}
.jobContainer {
  background-color: #FAFAFA;
  border-radius: 15px;
  padding: 10px;
  margin: 40px;
  margin-right: 35px;
  position: relative;
  right: 3%;
}
.jobBox {
  width: 100%;
}
.companyLogo {
  width: 100%;
  height: auto;
  margin: 10px;
}
.learnMore {
  margin: 10px;
}
.contractIcon {
  width: 30px;
  margin-right: 10px;
}
.jobTitle h1 {
  font-size: 3em;
  margin-top: 1%;
}
.jobLocation p{
  font-size: 1.5em;
}
.jobDescription {
  width: 550px;
}
.jobDuration {
}
#cardWrapper {
  border: none;
  width: 60%;
}
  .expandStyling {
    text-align: left;
    border-left: 4px solid #c850c0;
/*    border-radius: 10px;*/
    padding: 10px;
  }
  .expandStyling h1 {
    font-size: 3em;
  }
  .expandStyling h4 {
    font-size: 1.125em;
  }
  .expandStyling p {
    font-size: 1em;
    line-height: 1.575em;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</style>