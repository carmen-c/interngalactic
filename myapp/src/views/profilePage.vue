<template>
 <div class="profilePage">
	 Hello Keara, Good Luck with the Profile Page
	 Here is the hint
	 <div>
	<v-date-picker
	  mode='range'
	  v-model='selectedDate'
	  show-caps>
	</v-date-picker>
	</div>
	 <div>
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
















