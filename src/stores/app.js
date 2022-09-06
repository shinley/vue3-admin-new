import { defineStore } from 'pinia'

export const useAppStateStore = defineStore({
  id: 'app-state',
  state: () => ({
    sidebarOpened: true,
  }),
  actions: {
    triggerSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened
    },
  },
})
