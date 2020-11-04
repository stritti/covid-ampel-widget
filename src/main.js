import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { NavBar } from 'vant'
import { Sticky } from 'vant'
import { ActionBar, ActionBarIcon, ActionBarButton } from 'vant'
import { Cell, CellGroup } from 'vant'

import 'vant/lib/index.css'

const app = createApp(App)

app.use(router)

app.use(NavBar)
app.use(Sticky)
app.use(ActionBar)
app.use(ActionBarIcon)
app.use(ActionBarButton)
app.use(Cell)
app.use(CellGroup)

app.mount('#app')
