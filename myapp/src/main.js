import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
Vue.config.productionTip = false

const config = {
    apiKey: "AIzaSyBkL8hsIlbZtQRLhb9xpE7grLtiI8Idfqw",
    authDomain: "interngalactic.firebaseapp.com",
    databaseURL: "https://interngalactic.firebaseio.com",
    projectId: "interngalactic",
    storageBucket: "interngalactic.appspot.com",
    messagingSenderId: "154943197764"
  };

  firebase.initializeApp(config);

Vue.prototype.store={
	//global variables here
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
