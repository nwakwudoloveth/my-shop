<script>
import { mapActions, mapState } from 'vuex'
import SearchIcon from '@/components/icons/icon-search.vue'
import CartIcon from '@/components/icons/icon-cart.vue'
import AccountIcon from '@/components/icons/icon-account.vue'
import HeartIcon from '@/components/icons/icon-heart.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbarbuyer',

  components: {
    SearchIcon,
    CartIcon,
    AccountIcon,
    HeartIcon,
  },
  async created() {
    await this.fetchCart()
  },

  // methods: {
  //   ...mapActions(['fetchCart']),
  // },

  computed: {
    ...mapState(['cart']),
  },
}
</script>

<template lang="pug">
#nav.nav.navbar.navbar-expand-lg.bg-light.container-fluid
         button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo03' aria-controls='navbarTogglerDemo03' aria-expanded='false' aria-label='Toggle navigation')
          span.navbar-toggler-icon
         router-link.navbar-brand(href='/buyer').nav-link(to="/buyer") MyShop
         #navbarTogglerDemo03.collapse.navbar-collapse
          
         
          li.nav-item.dropdown.category
            .nav-link.dropdown-toggle(href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false')
              | Category
            ul.dropdown-menu
              li
                a.dropdown-item(href='#') 
              li
                hr.dropdown-divider
              li
                a.dropdown-item(href='#') Popular Products
              
             



          form.d-flex(role='search')
              input.form-control.form-control-sm.col-lg-6.me-2(type='search' placeholder='Search' aria-label='Search')
              button.btn.btn-outline-success.btnclass(type='submit') 
               SearchIcon
      
              
          .icons.navbar-nav
            .btn
              AccountIcon
              |     Account
            .btn
                HeartIcon
                |     Saved
            
            .btn(@click="$router.push('/cart')" type='button') 
              .btn
              CartIcon
              |    Cart         
              .btn.btncart.rounded-pill.badge
               | {{cart?.items?.length}}
                
              
              
router-view
</template>

<style lang="scss">
#nav {
  //padding: 3% 10% 3%;
}

.navbar-nav {
  margin-left: 10px;

  //display: inline;
  //margin-right: 10px;
}
.container-fluid {
  padding: 1% 5% 1%;
}
.nav-brand {
  width: 50%;
}
.btnclass {
  // background-color:
  color: #ffff;
  border: none;
  width: 40px;
  height: 40px;
  margin-left: 2px;
  border-radius: 4px;
}
.btnclass:hover {
  color: #ffff;
}
.btnborder {
  width: 160px;
  margin-bottom: 0px;
  border-radius: 10px;
  margin-top: 13px;
  pointer-events: none;
}

a {
  margin: 10px;
}
form {
  width: 40%;
  height: 40px;
  margin-right: 50px;
}

.category {
  margin-left: 10px;
  margin-right: 100px;
}

.dropdown-item {
  margin-left: 0;
  //padding-left: 0;
}

.btncart {
  // background-color:
  color: #ffff;
  border: none;
  width: 30px;
  height: 20px;
  margin-left: 2px;
  background-color: #ff8a00;
}

//margin-left: 10px;
// border-radius: 0px;
</style>
