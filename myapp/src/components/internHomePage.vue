<template>
<div class="container-fluid bg" id="#">
  <img id="internPageImgStroke" src="../../images/strokeLOGO.svg"/>
  <ClientHeader />
<div class="container h-50">
    <div class="row align-items-center h-100">
        <div class="col-10 mx-auto">
          <div class="bg-title">
            <b>Help us find what you are looking for.</b>
          <br>
              </div>
          <div class="searchForm">
            <h1 class="internh1" id="internWhat">What:</h1>
            <input 
                   type="text" 
                   placeholder="Internship Title" 
                   class=" input-style"
                   style="font-size:1.5em;
                          padding:1em;"
                   >
            <h1 class="internh1 "id="internWhere">Where:</h1>
            <input type="text" 
                   placeholder="Location" 
                   class="input-style"
                   style="font-size:1.5em;
                          padding:1em;"
                   >
            <b-dropdown id="__BVID__27__BV_toggle_" class="dropdown" :text="dropdown">
              
              <b-dropdown-item @click="dropdownSelect('Relevance')" 
                               value="Relevance"
                               >Relevance</b-dropdown-item>
              <b-dropdown-item @click="dropdownSelect('Date Posted')"
                               value="Date Posted"
                               >Date Posted</b-dropdown-item>
              <b-dropdown-item @click="dropdownSelect('Location')"
                               >Location</b-dropdown-item>
            </b-dropdown>
          </div>
          <br>
          <button class="btn searchBtn"
                  style="font-size:1.5em;
                          padding:1em;"
                  >Search</button>
        </div>
    </div>
</div>
</div>
</template>
<style>
  #__BVID__27__BV_toggle_ {
    width: 20px;
    height: 3rem;
    width: 3rem;
    color: white;
    margin-left: 1%;
    background-color: #3369E8 !important;
    border-radius: 1em;
  }
  .searchBtn {
    margin-top: 2%;
    color: #fff !important;
    font-weight: bold !important;
    background-color: #3369E8 !important;
    padding: 0 1.5rem !important;
    border-radius: 0.5rem !important;
    height: 3rem;
    width: 14rem;
    
}
  #internPageImgStroke {
    position: absolute;
    transform: rotate(-10deg);
    top: 100px;
    left: 0px;
    width: 900px;
    height: auto;
    opacity: 0.02;
    overflow: hidden;
  }
  .container-fluid {
    padding-right:0;
    padding-left:0;
    margin-right:auto;
    margin-left:auto;
 }
  .inputContainer {
    display: flex;
    color: white;
  }
.bg {
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color:#0B0B0B;
}
.bg-title {
  color: #fff;
  padding-top: 20%;
  font-size: 4em;
  margin-bottom: 3%;
}
  .internh1 {
    color: white;
    margin-right: 1%;
    margin-left: 3%;
  }
.searchForm {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.input-style {
  background-color: #FFF;
  border: none;
  border-radius: 2px;
  padding: 0.5rem;
  height: 3rem;
  width: 20rem;
}
.input-left-round {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.input-right-round {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
/*
  @media only screen and (max-width: 906px ) {
  .internh1 {
    margin-right: 10%;
  } 
    #internWhere {
      margin-left: 8%;
    }
    .input-style {
      margin-right: 1%;
      margin-left: -9%;
    }
  }
*/
    
/*
@media only screen and (min-width: 413px ) {
  #internWhat {
    padding-left: 15px;
  }
  .bg-title {
    margin-bottom: 10%;
  }
  }
*/
</style>
<script>
import ClientHeader from "@/components/clientHeader.vue";
 
export default {
  name: "internHomePage",
  components: {
    ClientHeader
  }
}

</script>
















