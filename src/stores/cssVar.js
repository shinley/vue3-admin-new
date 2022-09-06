import { defineStore } from 'pinia'

import variables from '@/styles/variables.module.scss'

export const useCssVarStore = defineStore({
  id: 'cssvar',
  getters: {
    cssVar: (state) => variables,
  },
})
