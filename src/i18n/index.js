import { useAppStateStore } from '../stores/app'
import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'
const messages = {
  en: {
    msg: {
      test: 'hello world',
      ...enLocale,
    },
  },
  zh: {
    msg: {
      test: '你好世界',
      ...zhLocale,
    },
  },
}

const use18n = () => {
  const appStore = useAppStateStore()
  const i18n = createI18n({
    legacy: false,
    // 全局使用 t 函数
    globalInjection: true,
    locale: appStore.language,
    messages,
  })
  return i18n
}
export default use18n
