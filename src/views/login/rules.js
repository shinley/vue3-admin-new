// 在非组件中要直接导入
import use18n from '@/i18n'

const i18n = use18n()
export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      // 非组件中要用 i18n.global
      callback(new Error(i18n.global.t('msg.login.passwordRule')))
    } else {
      callback()
    }
  }
}
