import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 导入路由监权
import { usePermission } from './permission'

import App from './App.vue'
import router from './router/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'

import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

app.use(ElementPlus)
app.component('svg-icon', SvgIcon)
app.use(router)

usePermission(pinia)

app.mount('#app')
