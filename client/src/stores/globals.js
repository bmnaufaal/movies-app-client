import { defineStore } from 'pinia'
import axios from 'axios'
import toast from '../../helper/toast.js'

export const useGlobalsStore = defineStore('globals', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
  })
})
