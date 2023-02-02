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
      } catch (error) {
        this.backendError = error.response.data
      }
    },
  },
}
</script>

<template lang="pug">
.container-fluid
  .row
    .col-sm-9.col-md-7.col-lg-5.mx-auto
      .card.border-0.shadow.rounded-3.my-5
        .card-body.p-4.p-sm-5
          h5.card-title.text-center.mb-5.fw-light.fs-5 Log In
          form(@submit="submitLogin")
            .mb-3
            
            label.form-Label(for="email") Email:&nbsp;
              input.form-control(v-model="email" id="email" type="email" placeholder="Your email" required)
            .mb-3 
            label.form-Label(for="password") Password:&nbsp;
              input.form-control(v-model="password" id="password" type="password" placeholder="Your password" required)
            div.m-2.error-message(v-show="backendError") Wrong Credentials!! Check your password and e-mail!
            input.btn.btn-primary.btnclass(type="submit" value="Log in")
            
            

            p Don't have an account yet? 
             |
             router-link.link(to='/register') Register

</template>

<style lang="scss" scoped>
label {
  display: block;
  margin-bottom: 1rem;
}
.login {
  padding: 3% 10% 7%;
  border: 1px;
  margin-left: 50px;
  margin-right: 50px;
}
.form-control {
  width: 100%;
  border-radius: 0px;
}

.link {
  color: #ff8a00;
}
.btnclass {
  height: 44px;
  width: 130px;
  margin: auto;
  color: #ffff;
  margin-bottom: 5px;
}
.error-message {
  border: solid 1px #ff0000;
  text-align: center;
  color: #ff0000;
}
</style>
