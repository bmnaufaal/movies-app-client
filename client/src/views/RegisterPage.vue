<script>
export default {
  name: 'RegisterPage'
}
</script>

<template>
    <div class="container-fluid">
      <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white">
            <div class="card-header">
              <h3 class="mb-0">Register</h3>
            </div>
            <div class="row">
              <div class="col">
                <div class="col">
                  <div class="card-body p-5 pt-3">
                    <form id="form-login">
                      <div class="mb-3">
                        <label for="login-email" class="form-label">Email</label>
                        <input
                          type="email"
                          id="login-email"
                          class="form-control bg-dark text-white"
                          placeholder="Email"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="login-password" class="form-label">Password</label>
                        <input
                          type="password"
                          id="login-password"
                          class="form-control bg-dark text-white"
                          placeholder="Password"
                        />
                      </div>
                      <div class="text-center">
                        <button class="btn btn-primary" style="width: 100%">Register</button>
  
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
          </div>
        </div>
      </div>
    </div>
  </template>
