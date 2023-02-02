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
.register.container-fluid
  .row
    .col-sm-9.col-md-7.col-lg-5.mx-auto
      .card.border-0.shadow.rounded-3.my-5
        .card-body.p-4.p-sm-5
          h5.card-title.text-center.mb-5.fw-light.fs-5 Register
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
              input.btn.btn-primary.btnclass(type="submit" value="Register")
            div(v-if="backendError") {{ backendError }}
            div Already have an account?
            |
            router-link.link(to='/login') Log In

           
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin-bottom: 1rem;
}

.form-control {
  width: 100%;
  border-radius: 0px;
}

.btnclass {
  height: 44px;
  width: 130px;
  margin: auto;

  margin-bottom: 5px;
}
.link {
  color: #ff8a00;
}
</style>
