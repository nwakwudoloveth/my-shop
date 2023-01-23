<script>
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      backendError: null,
    }
  },
  methods: {
    ...mapActions(['login']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.login({
          email: this.email,
          password: this.password,
        })

        this.$router.push('/buyer')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    },
  },
}
</script>

<template lang="pug">
.login
    form(@submit="submitLogin")
      .mb-3
       h5 Log in to your account
       label.form-Label(for="email") Email:&nbsp;
        input.form-control(v-model="email" id="email" type="email" placeholder="Your email" required)
      .mb-3 
       label.form-Label(for="password") Password:&nbsp;
        input.form-control(v-model="password" id="password" type="password" placeholder="Your password" required)
       input.btn.btn-primary(type="submit" value="Log in")
      div(v-if="backendError") {{ backendError }}
      div Don't have an account yet? <router-link to="/register">Register</router-link>
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem 0;
}
.login {
  padding: 3% 10% 7%;
  border: 1px;
  //background-color: orange;
  margin-left: 50px;
  margin-right: 50px;
  // padding-left: auto;
  // padding-right: auto;
}

.form-control {
  width: 50%;
}
</style>
