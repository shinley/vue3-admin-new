import { createApp } from 'vue'
import { createPinia } from 'pinia'
import installElementPlus from './plugins/element'
// 导入路由监权
import { usePermission } from './permission'
import use18n from './i18n'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.component('svg-icon', SvgIcon)
app.use(router)

const i18n = use18n()
app.use(i18n)

// 用到了状态管理，要在注册pinia之后
installElementPlus(app)
// 由于useXXXStroe 方法不能全局调用，所以此处使用方法
usePermission()

app.mount('#app')
