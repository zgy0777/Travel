import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/Home.vue'
import City from '@/components/pages/city/City.vue'
import Detail from '@/components/pages/detail/Detail.vue'


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
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
