<template>
  <div class="LoginPage">
	  <div class="wrapper">
		<div v-if="page===1">
			<MyLogin/>
		</div>
		<div v-if="page===2">
			<MyReg/>
		</div>
	</div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
	export default {
		components: {
			MyLogin:Login,
			MyReg:Register
		},
		data(){
			return {
				page:1
			}
		},
		methods: {
			changeLogin:function(){
				this.page=1;
			},
			changeReg:function(){
				this.page=2;
			}
		}
	}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css");
</style>
<style>
	.submitWrap {
		text-align: center;
	}
	#submitButt {
		margin: 4px;
	}
	.LoginPage {
		display:flex;
		position:fixed;
		left:0;
		top:0;
		width:100vw;
		height:100vh;
		justify-content:center;
		align-items:center;
		text-align: left;
		color: #000;
		z-index: -1;
		background: linear-gradient(-135deg, #c850c0, #4158d0);
	}
	.formContainer {
		background-color: white;
		padding: 30px 80px;
		border-radius: 15px;
	}
</style>























