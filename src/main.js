/**
 * Created by 李乐 on 2018/12/1.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/* eslint-disable no-new */
new Vue({
  el:'#app',
  render:h => h(App),
  router,
  store
})
