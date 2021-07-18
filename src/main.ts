import { createApp } from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

const app: ReturnType<typeof createApp> = createApp(App)
app.use(Vant)
app.use(router)
app.use(store)
app.mount('#app')
