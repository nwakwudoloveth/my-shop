import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
library.add(faHatWizard)
library.add(faUserSecret)

import 'bootstrap'
import 'normalize.css'
const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
