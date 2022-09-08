import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { useAppStateStore } from '@/stores/app'

export default (app) => {
  const appStore = useAppStateStore()
  app.use(ElementPlus, {
    locale: appStore.language === 'en' ? en : zhCn,
  })
}
