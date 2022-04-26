import { createApp } from 'vue'
import store from './store'

import App from './App.vue'
import router from './router'
import { registerSW } from 'virtual:pwa-register'

registerSW()

createApp(App).use(router).use(store).mount('#app')
