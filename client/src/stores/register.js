import { defineStore } from 'pinia'
import axios from 'axios'
import toast from '../../helper/toast.js'

export const useRegisterStore = defineStore('register', {
  state: () => ({
    baseUrl: 'http://localhost:3000'
  }),
  getters: {},
  actions: {
    async handleRegister(inputRegister) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: this.baseUrl + '/customers/register',
          data: inputRegister
        })
        toast('Success register')
        this.router.push('/login')
      } catch (error) {
        console.log(error)
        toast('Failed register')
      }
    }
  }
})
