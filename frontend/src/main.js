import 'bootstrap'
import 'normalize.css'
import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App),
// }).$mount('#app')
