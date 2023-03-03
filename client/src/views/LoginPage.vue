<script>
import { useLoginStore } from '../stores/login.js'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'LoginPage',
  data() {
    return {
      inputLogin: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState(useLoginStore, ['isLoggedIn'])
  },
  methods: {
    ...mapActions(useLoginStore, ['handleLogin'])
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white">
          <div class="card-header">
            <h3 class="mb-0">Login</h3>
          </div>
          <div class="row">
            <div class="col">
              <div class="col">
                <div class="card-body p-5 pt-3">
                  <form id="form-login" @submit.prevent="handleLogin(inputLogin)">
                    <div class="mb-3">
                      <label for="login-email" class="form-label">Email</label>
                      <input
                        type="email"
                        id="login-email"
                        class="form-control bg-dark text-white"
                        placeholder="Email"
                        v-model="inputLogin.email"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="login-password" class="form-label">Password</label>
                      <input
                        type="password"
                        id="login-password"
                        class="form-control bg-dark text-white"
                        placeholder="Password"
                        v-model="inputLogin.password"
                      />
                    </div>
                    <div class="text-center">
                      <button class="btn btn-primary" style="width: 100%">Login</button>

                      <!-- Google Sign In -->
                      <!-- <GoogleSignIn class="ms-2" @googleSignIn="googleSignIn" /> -->
                      <!-- or -->
                      <!-- <p class="text-divider">
                        <span>Or sign in with</span>
                      </p>
                      <GoogleLogin class="ms-2" :callback="callback" /> -->
                      <!-- End Of Google Sign In -->
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <div class="py-2">Don't have an account?</div>
              <router-link :to="{ name: 'register' }" class="btn btn-primary"
                >Register here</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
