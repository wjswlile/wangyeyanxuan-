/**
 * Created by 李乐 on 2018/12/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import Actions from './actions'
import Getters from './getters'
import Mutations from './mutation-types'
import State from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  Actions,
  Getters,
  Mutations,
  State
})
