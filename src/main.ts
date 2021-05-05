import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/packages/theme-chalk/src/base.scss'
import loadElementUIComponent from './plugins/elementUI'

const app: ReturnType<typeof createApp> = createApp(App)
loadElementUIComponent(app)
app.use(store).use(router).mount('#app')
