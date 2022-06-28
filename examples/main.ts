import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import RingUI from '../packages/index'

createApp(App).use(router).use(RingUI).mount('#app')
