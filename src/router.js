import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import City from './views/city/City'
import Detail from './views/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component:City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, 
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    
  ],
    scrollBehavior (to,from, savedPosition){
      return {x:0,y:0}
    }
})
