<template>
  <div class="LoginPage">
	  <p>Hello</p>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
	export default {
		name:"LoginPage",
		components: {
			MyLogin:Login,
			MyReg:Register
		},
		data(){
			return {
			}
		},
		methods: {
		}
	}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");
</style>
<style>

</style>























