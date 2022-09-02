import { createApp } from 'vue'
import { createPinia } from 'pinia'
import store from './stores'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'

import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'


const app = createApp(App)
app.use(store)
app.use(ElementPlus)
app.component('svg-icon', SvgIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
