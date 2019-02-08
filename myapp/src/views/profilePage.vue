<template>
 <div class="profilePage">
	 Hello Keara, Good Luck with the Profile Page
	 Here is the hint
	 <div>
	<v-date-picker
	  mode='range'
	  v-model='myDates'
	  show-caps>
	</v-date-picker>
       {{myDates}}
	</div>
	 <div>
       {{start}}
       {{end}}
       <button @click="checkdates">click</button>
		<img src="../../images/KearaHint.png"/>
	</div>
	</div>
</template>

<script>
// @ is an alias to /src
import calendar from '@/components/calendar.vue'
  export default {
		name:"profilePage",
		components: {
		},
		data(){
          return {
            start: "",
            end: "",
            myDates: "",
            format: {
              input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
            }
          }
		},
        methods: {
          checkdates: function () {
            this.start = this.myDates.start
            this.end = this.myDates.end
          }
        }
  }
</script>
<style>
	.profilePage img {
		transform: rotate(-90deg);
		width: 800px;
	}

</style>
















