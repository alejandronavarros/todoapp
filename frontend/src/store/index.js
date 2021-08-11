import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from './mutations.js'
import { actions } from './actions'


export default new Vuex.Store({
  state,
  mutations,
  actions
})