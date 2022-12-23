<script setup()>
//import TheWelcome from '../components/the-welcome.vue'
import UserCard from '@/components/user-card.vue'
import ProductCard from '@/components/product-card.vue'
import CartIcon from '@/components/addtoCart.vue'
import axios from 'axios'

export default {
  components: {
    UserCard,
    ProductCard,
    CartIcon,
  },
  data() {
    return {
      users: [],
      products: [],
    }
  },
  async created() {
    const usersRequest = await axios.get('/api/users')
    this.users = usersRequest.data

    const productsRequest = await axios.get('/api/users/products')
    this.products = productsRequest.data
  },
}
</script>

<template lang="pug">
.box
CartIcon
 
.productbox  
   h1 New offers
   product-card(v-for="product in products"  :product="product")
 
//-  // ProductCard
// user-card(v-for="user in users" :user="user") 
//-   ProductCard
//-   ProductCard
//-   ProductCard

</template>

<style>
.box {
  background-color: rgb(114, 202, 234);
  width: 80%;
  height: 300px;
  margin: auto;
}
.productbox {
  margin: 3% 15% 7%;
}
</style>
