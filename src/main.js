import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vantPlugin from './plugins/vant'
import VueAnalytics from 'vue-analytics'

const app = createApp(App)

app.use(router)
app.use(vantPlugin)
app.use(VueAnalytics, {
  id: 'G-GDDZX0T7FP',
  router,
  autoTracking: {
    screenview: true
  }
})

app.mount('#app')
