<template>
  <q-page class="bg-primary">
    <div class="row justify-center">
      <div class="col-auto">
        <div class="q-pa-xl bg-white"
          style="width: 550px; margin-top: 50%; border-radius: 4px">
          <div class="title text-center">
            Login
          </div>
          <q-input
            filled
            v-model="credentials.user"
            label="Usuario"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            v-model="credentials.password"
            filled
            label="Contraseña"
            :type="isPwd ? 'password' : 'text'">
            <template v-slot:append>
              <q-icon
                class="cursor-pointer"
                :name="isPwd ? 'visibility_off' : 'visibility'"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div class="row justify-end">
            <q-btn
              style="width: 150px"
              label="Login"
              class="q-mt-md q-mr-sm"
              color="primary"
              :loading="submitting"
              @click="login"
            >
              <template v-slot:loading>
                Cargando...
              </template>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      /**
       * visible password
       * @type {Boolean}
       */
      isPwd: true,
      /**
       * user credentials
       * @type {object}
       */
      credentials: {
        user: null,
        password: null
      },
      /**
       * Loading status
       * @type {Boolean}
       */
      submitting: false
    }
  },
  methods: {
    login () {
      this.$_authLibrary
        .login(this.credentials)
        .then(res => {
          console.log(res)
        })
      this.submitting = true

      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.submitting = false
      }, 3000)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
