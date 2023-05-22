import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios'
import store from './vuex/store'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)
app.use(VueSweetalert2);

// Add axios to the app's global properties
app.config.globalProperties.$http = axios

// Use Vuex and router in the app
app.use(store)
app.use(router)

app.mount('#app')
