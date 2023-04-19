import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios'
import store from './vuex/store'

const app = createApp(App)

// Add axios to the app's global properties
app.config.globalProperties.$http = axios

// Use Vuex and router in the app
app.use(store)
app.use(router)

app.mount('#app')
