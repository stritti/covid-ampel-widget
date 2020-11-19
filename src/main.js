import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vantPlugin from './plugins/vant'
import VueGtag from 'vue-gtag-next'

const app = createApp(App)

app.use(router)
app.use(vantPlugin)
app.use(VueGtag, {
  property: { id: 'G-GDDZX0T7FP' },
  useDebugger: true
})

app.mount('#app')
