import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginPage from './views/LoginPage.vue'
import resumeUpload from './views/resumeUpload.vue'
import jobFeedPage from './views/jobFeedPage.vue'
import profilePage from './views/profilePage.vue'

import Login from './components/Login.vue'
import currentJobPost from './components/currentJobPost.vue'
import Register from './components/Register.vue'
import applicants from './components/applicants.vue'
import jobForm from './components/jobForm.vue'
import adminHeader from './components/adminHeader.vue'
import clientHeader from './components/clientHeader.vue'
import internHomePage from './components/internHomePage.vue'
import firebase from 'firebase'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
//      meta: {
//          requiresAuth: true
//      }
    },
	{
	  path: '/',
	  name: 'LoginPage',
	  component: LoginPage
	},
	 {
	  path: '/resumeUpload',
	  name: 'resumeUpload',
	  component: resumeUpload
	},
	{
      path: '/Login',
      name:'/login',
      component: Login,
	},
	{
      path: '/Register',
      name:'/Register',
      component: Register,
	},
	{
	  path: '/jobForm',
	  name: '/jobForm',
	  component: jobForm,
	},
	{
	  path: '/adminHeader',
	  name: '/adminHeader',
	  component: adminHeader,
	},
	{
	  path: '/clientHeader',
	  name: '/clientHeader',
	  component: clientHeader,
	},
	{
	  path: '/jobFeedPage',
	  name: '/jobFeedPage',
	  component: jobFeedPage
	},
	{
	  path: '/applicants',
	  name: '/applicants',
	  component: applicants
	},
	{
	  path: '/profilePage',
	  name: '/profilePage',
	  component: profilePage
	},
	{
	  path: '/currentJobPost',
	  name: '/currentJobPost',
	  component: currentJobPost
	},
    {
	  path: '/internHomePage',
	  name: '/internHomePage',
	  component: internHomePage
	},
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});












