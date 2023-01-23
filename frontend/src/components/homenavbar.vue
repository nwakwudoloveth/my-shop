<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'HomeNavbarbuyer',
}
</script>

<template lang="pug">
#nav.nav.navbar.navbar-expand-lg.bg-light.container-fluid
         button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo03' aria-controls='navbarTogglerDemo03' aria-expanded='false' aria-label='Toggle navigation')
          span.navbar-toggler-icon
         a.navbar-brand(href='').router-link.nav-link(to="/") MyShop
         button.btn.btn-primary.btnclass(@click="$router.push('/login')" type="button") Log in
         button.btn.btn-primary.btnclass(@click="$router.push('/Register')" type="button") Register
         

         
router-view
</template>

<style lang="scss">
#nav {
  //padding: 3% 10% 3%;
}

.navbar-nav {
  margin-left: 50px;
  //display: inline;
  //margin-right: 10px;
}
.container-fluid {
  padding: 1% 5% 1%;
}
.navbar-brand {
  width: 50%;
  margin-right: 30%;
}
.btnclass {
  // background-color:
  color: #ffff;
  border: none;
  width: 100px;
  height: 40px;
  margin-left: 40px;
  background-color: none;
  border-color: #008ecc;
}
.btnclass:hover {
  color: #ffff;
  //background-color:
}

a {
  margin: 10px;
}
</style>
