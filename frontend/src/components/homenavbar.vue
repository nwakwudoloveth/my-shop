<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'HomeNavbarbuyer',
}
</script>

<template lang="pug">
#nav.nav.navbar.navbar-expand-lg.bg-light
 .container-fluid.justify-content-end
         
         a.navbar-brand(href='').router-link.nav-link(to="/") MyShop
         button.btn.btn-outline-warning.btnborder(@click="$router.push('/login')" type="button") Log in
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
}

a {
  margin: 10px;
}
.btn-primary {
  --bs-btn-active-color: #ffff;
  --bs-btn-active-bg: #ff8a00;
}
</style>
