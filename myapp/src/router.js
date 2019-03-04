import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LoginPage from "./views/LoginPage.vue";
import resumeUpload from "./views/resumeUpload.vue";
import jobFeedPage from "./views/jobFeedPage.vue";
import profilePage from "./views/profilePage.vue";

import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/",
      name: "LoginPage",
      component: LoginPage
    },
    {
      path: "/resumeUpload",
      name: "resumeUpload",
      component: resumeUpload,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/jobFeedPage",
      name: "/jobFeedPage",
      component: jobFeedPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/profilePage",
      name: "/profilePage",
      component: profilePage,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("/");
  else if (!requiresAuth && currentUser) next("/home");
  else next();
});
export default router;
