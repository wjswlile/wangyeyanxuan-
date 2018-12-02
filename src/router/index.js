/**
 * Created by 李乐 on 2018/12/1.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from '../pages/Homepage/Homepage.vue'
import Picture from '../pages/Picture/Picture.vue'
import Profile from '../pages/Profile/Profile.vue'
import Classify from '../pages/Classify/Classify.vue'
import Shop from '../pages/Shop/Shop.vue'

Vue.use(VueRouter)

export default new VueRouter({

  mode:'history',

  routes:[
    {
      path: '/homepage',
      component:Homepage,
    },
    {
      path: '/picture',
      component:Picture,
    },
    {
      path: '/profile',
      component:Profile,
    },
    {
      path: '/classify',
      component:Classify,
    },
    {
      path: '/shop',
      component:Shop,
    },
    {
      path:'/',
      redirect:'/homepage'
    },
  ]
})
