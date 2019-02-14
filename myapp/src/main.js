import Vue from "vue";
import VCalendar from "v-calendar";
import "v-calendar/lib/v-calendar.min.css";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(VCalendar, {
  firstDayOfWeek: 1,
  datePickerTintColor: ""
});
Vue.use(require("vue-moment"));

const config = {
  apiKey: "AIzaSyBkL8hsIlbZtQRLhb9xpE7grLtiI8Idfqw",
  authDomain: "interngalactic.firebaseapp.com",
  databaseURL: "https://interngalactic.firebaseio.com",
  projectId: "interngalactic",
  storageBucket: "interngalactic.appspot.com",
  messagingSenderId: "154943197764"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    this.$router.replace("/home");
  } else {
    this.$router.replace("/");
  }
});

Vue.prototype.store = {
  // global variables here
  adminPage: 1,
  userType: "",
  username: ""
};

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
