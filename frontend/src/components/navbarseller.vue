<script>
//import { defineComponent } from '@vue/composition-api'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbarseller',
}
</script>

<template lang="pug">
#nav.nav.navbar.navbar-expand-lg.bg-light.container-fluid
      button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo03' aria-controls='navbarTogglerDemo03' aria-expanded='false' aria-label='Toggle navigation')
      span.navbar-toggler-icon
      a.navbar-brand(href='#') MyShop
      #navbarTogglerDemo03.collapse.navbar-collapse
      ul.navbar-nav.me-auto.mb-2.mb-lg-0
          li.nav-item
            router-link.nav-link(to="") Home 
          li.nav-item
            router-link.nav-link(to="/list") List product
          li.nav-item
            router-link.nav-link(to="/list ") View offer
router-view           
</template>
