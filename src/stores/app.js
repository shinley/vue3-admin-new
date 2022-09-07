import { defineStore } from 'pinia'
import { LANG } from '../constant'
import { setItem, getItem } from '../utils/storage'

export const useAppStateStore = defineStore({
  id: 'app-state',
  state: () => ({
    sidebarOpened: true,
    language: getItem(LANG) || 'zh',
  }),
  actions: {
    triggerSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened
    },
    setLanguage(lang) {
      setItem(LANG, lang)
      this.language = lang
    },
  },
})
