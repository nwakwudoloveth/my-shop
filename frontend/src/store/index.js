import axios from 'axios'
import { createStore } from 'vuex'

//import io from 'socket.io-client'

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL
axios.defaults.withCredentials = true

// const socket = io(process.env.VUE_APP_BASE_URL)
const mutations = {
  INCREMENT_COUNT: 'increment count',
  SET_USER: 'set user',
  SET_PRODUCT: 'set product',
}

//const socket = io(process.env.VITE_APP_BASE_URL)

export default createStore({
  state: {
    count: 0,
    user: null,
    products: null,
  },

  mutations: {
    [mutations.INCREMENT_COUNT](state) {
      state.count++
    },

    [mutations.SET_USER](state, user) {
      state.user = user
    },
    [mutations.SET_PRODUCT](state, products) {
      state.products = products
    },
  },
  actions: {
    incrementCount({ commit }) {
      commit(mutations.INCREMENT_COUNT)
    },
    async fetchUser(store, id) {
      const userRequest = await axios.get(`/api/users/${id}`)
      return userRequest.data
    },
    async fetchUsers() {
      const usersRequest = await axios.get('/api/users')
      return usersRequest.data
    },
    async fetchProduct(store, productId) {
      const productRequest = await axios.get(`/api/products/${productId}`)
      return productRequest.data
    },

    async fetchProducts({ commit }) {
      // eslint-disable-next-line no-useless-catch
      //  try {
      const productsRequest = await axios.get('/api/products')
      commit(mutations.SET_PRODUCT, productsRequest.data)
      return productsRequest.data
      // //} catch (e) {
      //   throw e
      // }
    },
    async fetchSession({ commit }) {
      const user = await axios.get('/api/account/session')
      commit(mutations.SET_USER, user.data || null)
    },
    async login({ commit }, credentials) {
      // eslint-disable-next-line no-useless-catch
      try {
        const user = await axios.post('/api/account/session', credentials)
        commit(mutations.SET_USER, user.data)
      } catch (e) {
        throw e
      }
    },
    async register(store, user) {
      return axios.post('/api/account', user)
    },
    async logout({ commit }) {
      await axios.delete('/api/account/session')
      commit(mutations.SET_USER, null)
    },

    async list(store, product) {
      return axios.post('/api/products', product)
    },
  },
  modules: {},
})
