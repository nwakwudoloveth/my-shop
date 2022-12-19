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
               router-link.nav-link(to="/about") View Offer
              li.nav-item
               router-link.nav-link(to="/about") List Product
           form.d-flex(role='search')
              input.form-control.me-2(type='search' placeholder='Search' aria-label='Search')
              button.btn.btn-outline-success.btnclass(type='submit') Search
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
