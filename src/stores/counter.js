import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    token: '',
    counter: 0,
  }),
  getters: {
    getToken: (state) => state.token,
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
      this.token = '123'
      console.log('counter:' + this.counter)
      console.log('counter-token:' + this.getToken)
    },
  },
})
