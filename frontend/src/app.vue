<script>
import SearchIcon from '@/components/icons/icon-search.vue'
import CartIcon from '@/components/icons/icon-cart.vue'
import AccountIcon from '@/components/icons/icon-account.vue'
import HeartIcon from '@/components/icons/icon-heart.vue'
export default {
  components: {
    SearchIcon,
    CartIcon,
    AccountIcon,
    HeartIcon,
  },
}
</script>

<template lang="pug">
#app
  #nav
      nav.navbar.navbar-expand-lg.bg-light
       .container-fluid
         button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo03' aria-controls='navbarTogglerDemo03' aria-expanded='false' aria-label='Toggle navigation')
          span.navbar-toggler-icon
         a.navbar-brand(href='#') MyShop
         #navbarTogglerDemo03.collapse.navbar-collapse
           ul.navbar-nav.me-auto.mb-2.mb-lg-0
              li.nav-item
               router-link.nav-link(to="/") Home 
              li.nav-item
               router-link.nav-link(to="/list") List product
              li.nav-item
               router-link.nav-link(to="/login") View Offer
           form.d-flex(role='search')
              input.form-control.me-2(type='search' placeholder='Search' aria-label='Search')
              button.btn.btn-outline-success.btnclass(type='submit') 
               SearchIcon
              .btn
               AccountIcon
              .btn
               HeartIcon
              .btn
               
               CartIcon
        
             

              
  router-view
</template>

<style lang="scss">
@import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #01070d;
  background-color: #e6eaee;
}
#nav {
  padding: 3% 10% 3%;
}

.navbar-nav {
  margin-left: 20%;
  //display: inline;
}
.nav-brand {
  width: 50%;
}
.btnclass {
  background-color: rgb(114, 202, 234);
  color: #ffff;
  border: none;
}
.btnclass:hover {
  color: #ffff;
  background-color: rgb(29, 155, 234);
}

a {
  margin: 10px;
}
input {
  width: 20%;
  height: 40px;
}
</style>
