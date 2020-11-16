import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vantPlugin from './plugins/vant'

const app = createApp(App)

app.use(router)
app.use(vantPlugin)

app.mount('#app')
