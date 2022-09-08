import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { zhCn, en } from 'element-plus/es/locale'
import { useAppStateStore } from '@/stores/app'

export default (app) => {
  const appStore = useAppStateStore()
  app.use(ElementPlus, {
    locale: appStore.language === 'en' ? en : zhCn,
  })
}
