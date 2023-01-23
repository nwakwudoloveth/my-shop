<script>
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',

      backendError: null,
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.register({
          name: this.name,
          email: this.email,
          password: this.password,
        })

        this.$router.push('/login')
      } catch (e) {
        this.backendError = e.response.data.message
        console.log(e)
        console.log(e.response)
      }
    },
  },
}
</script>

<template lang="pug">
.register
    form( @submit="submitLogin")
     .mb-3
      h5 Create a new account
      label(for="name") Name:&nbsp;
        input.form-control(v-model="name" id="name" type="text" placeholder="Your name" required)
     
     .mb-3
      label(for="email") Email:&nbsp;
        input.form-control(v-model="email" id="email" type="email" placeholder="Your email" required)
     .mb-3
      label(for="password") Password:&nbsp;
        input.form-control(v-model="password" id="password" type="password" placeholder="Your password" required)
      input.btn.btn-primary(type="submit" value="Register")
     div(v-if="backendError") {{ backendError }}
     div Already have an account? <router-link to="/login">Log in</router-link>
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem 0;
}

.register {
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
