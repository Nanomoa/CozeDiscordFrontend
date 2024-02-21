import { createApp } from 'vue'
import App from './App.vue'
import './app.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCommentAlt, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCommentAlt, faPlus, faTrashAlt)

const app = createApp(App)
app.component('FaIcon', FontAwesomeIcon)
app.mount('#app')