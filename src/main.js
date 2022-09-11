import {createApp} from 'vue'
import "normalize.css"

import App from './App.vue'
import router from './router'
import pinia from './stores'
import '@/assets/iconfont/index.css'


createApp(App).use(router).use(pinia).mount('#app')
