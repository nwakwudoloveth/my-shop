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
  //- #nav.nav.navbar.navbar-expand-lg.bg-light.container-fluid
  //-        button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo03' aria-controls='navbarTogglerDemo03' aria-expanded='false' aria-label='Toggle navigation')
  //-         span.navbar-toggler-icon
  //-        a.navbar-brand(href='#') MyShop
  //-        #navbarTogglerDemo03.collapse.navbar-collapse
         
  //-         form.d-flex(role='search')
  //-             input.form-control.me-2(type='search' placeholder='Search' aria-label='Search')
  //-             button.btn.btn-outline-success.btnclass(type='submit') 
  //-              SearchIcon
      
         
  //-         ul.navbar-nav.me-auto.mb-2.mb-lg-0
  //-             li.nav-item
  //-              router-link.nav-link(to="/") Home 
  //-             li.nav-item
  //-              router-link.nav-link(to="/list") List product
  //-             li.nav-item
  //-              router-link.nav-link(to="/list ") View offer
  //-         .icons.navbar-nav
  //-           .btn
  //-               AccountIcon
  //-           .btn
  //-               HeartIcon
  //-           .btn
                
  //-               CartIcon
        
             

              
  router-view
</template>

<style lang="scss">
@import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #01070d;
  // background-color: #e6eaee;
}
#nav {
  //padding: 3% 10% 3%;
}

.navbar-nav {
  margin-left: 20%;
  //display: inline;
}
.container-fluid {
  padding: 1% 7% 1%;
}
.nav-brand {
  width: 50%;
}
.btnclass {
  background-color: #ff8a00;

  border-radius: 0px;
  font-weight: bolds;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 100px;
  height: 40px;

  // color: #ff8a00;
  // border: none;
}
.btnclass:hover {
  //color: #fff6e4;
  background-color: #ffa53c;
  color: #ffff;
}
.btnclass:active {
  //color: #fff6e4;
  background: #ff8a00;
  color: #ffff;
}
a {
  margin: 10px;
}
input {
  // width: 20%;
  // height: 40px;
}

.btnborder {
  border-radius: 0px;
  font-weight: bolds;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolds;
  width: 100px;
  height: 40px;
  color: #ff8a00;
  border-color: #ff8a00;
  // color: #ff8a00;
  // border: none;
}
.btnborder:hover {
  background-color: #ffa53c;
  color: #ffff;
}

.btn-primary {
  --bs-btn-active-color: #ffff;
  --bs-btn-active-bg: #ff8a00;
}
.btn-outline-success {
  --bs-btn-active-color: #ffff;
  --bs-btn-active-bg: #ff8a00;
}
</style>
