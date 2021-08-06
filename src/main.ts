import { createApp } from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import VantDemoBlock from './components/VantDemoBlock.vue'
import './styles/index.less'
import '@/utils/demo-locale'

const app: ReturnType<typeof createApp> = createApp(App)
app.use(Vant)
app.use(router)
app.use(store)
app.component('DemoBlock', VantDemoBlock)
app.mount('#app')
