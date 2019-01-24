import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginPage from './views/LoginPage.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
//      meta: {
//          requiresAuth: true
//      }
    },
	{
	  path: '/LoginPage',
	  name: 'LoginPage',
	  component: LoginPage
	},
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '*',
      redirect: '/login'
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});

router.beforeEach((to,from,next) => {
	const currentUser = firebase.auth().currentUser;
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	
	if (requiresAuth && !currentUser) next('login');
	else if (!requiresAuth && currentUser) next('home');
	else next();
});

export default router;











