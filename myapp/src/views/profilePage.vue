<template>
 <div class="profilePage">
	 Hello Keara, Good Luck with the Profile Page
	 Here is the hint
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
      
		},
        methods: {
          checkdates: function () {
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
















