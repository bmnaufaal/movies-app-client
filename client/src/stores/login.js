import { defineStore } from 'pinia'
import axios from 'axios'
import toast from '../../helper/toast.js'

export const useLoginStore = defineStore('login', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    isLoggedIn: false
  }),
  actions: {
    async handleLogin(inputLogin) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: this.baseUrl + '/customers/login',
          data: inputLogin
        })
        toast('Success login')
        localStorage.setItem('access_token', data.access_token)
        this.isLoggedIn = true
        this.router.push('/home')
      } catch (error) {
        console.log(error)
        toast('Failed login')
      }
    },
    async callback(response) {
      // This callback will be triggered when the user selects or login to
      // his Google account from the popup
      try {
        const google = await axios({
          method: 'POST',
          url: this.baseUrl + '/customers/google-sign-in',
          headers: {
            token_google: response.credential
          }
        })
        toast('Success Google Sign In')
        localStorage.setItem('access_token', google.data.access_token)
        this.isLoggedIn = true
        this.router.push('/home')
      } catch (error) {
        console.log(error)
        toast('Failed Google Sign In')
      }
    }
  }
})
