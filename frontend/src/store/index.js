import axios from 'axios'
import { createStore } from 'vuex'

//import io from 'socket.io-client'

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL
axios.defaults.withCredentials = true

// const socket = io(process.env.VUE_APP_BASE_URL)



//const socket = io(process.env.VITE_APP_BASE_URL)

export default createStore({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {},
  actions: {
    incrementCount(store) {
      store.state.count++
    },
  },
  modules: {},
})
