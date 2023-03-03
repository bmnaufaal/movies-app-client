<script>
import toast from '../../helper/toast.js'
import { useLoginStore } from '../stores/login.js'
import { mapActions, mapWritableState } from 'pinia'

export default {
  name: 'Navbar',
  methods: {
    handleLogout() {
      localStorage.clear()
      this.isLoggedIn = false
      this.$router.push('/login')
      toast('Success logout')
    }
  },
  computed: {
    ...mapWritableState(useLoginStore, ['isLoggedIn'])
  },
  created() {
    if (localStorage.access_token) {
      this.isLoggedIn = true
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand pointer" :to="{ name: 'home' }">Movies App</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link pointer active">Home</router-link>
            <!-- <a class="nav-link pointer active" aria-current="page">Home</a> -->
          </li>
        </ul>

        <router-link class="btn btn-primary" :to="{ name: 'login' }" v-if="!isLoggedIn"
          >Login</router-link
        >
        <button class="btn btn-danger" @click.prevent="handleLogout" v-if="isLoggedIn">
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>
