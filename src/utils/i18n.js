import use18n from '../i18n'

export function generateTitle(title) {
  const i18n = use18n()
  return i18n.global.t('msg.route.' + title)
}
