import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

import io from 'socket.io-client'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.withCredentials = true

Vue.use(Vuex)

const socket = io(process.env.VUE_APP_BASE_URL)

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL

const socket = io(process.env.VITE_APP_BASE_URL)


export default new Vuex.Store({
  state:{},
  mutations:{},
  actions:{},
  modules:{}
  
})
