import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 导入路由监权
import { usePermission } from './permission'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'

import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'

import i18n from './i18n'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

app.use(ElementPlus)
app.component('svg-icon', SvgIcon)
app.use(router)
app.use(i18n)

// 由于useXXXStroe 方法不能全局调用，所以此处使用方法
usePermission()

app.mount('#app')
