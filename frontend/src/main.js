import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
//import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
library.add(faHatWizard)
library.add(faMagnifyingGlass)

import 'bootstrap'
import 'normalize.css'
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)


app.config.productionTip = false

app.use(router)

app.mount('#app')
