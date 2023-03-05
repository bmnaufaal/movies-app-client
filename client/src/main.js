import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

import './assets/style.css'

const app = createApp(App)
app.use(vue3GoogleLogin, {
  clientId:
    "253349187516-fqfct5q4dtnd31q9a3aas0ndnaj9hmfh.apps.googleusercontent.com",
});

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.use(pinia)
app.use(router)

app.mount('#app')
