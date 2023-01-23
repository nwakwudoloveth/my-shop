<script setup()>
import { mapActions } from 'vuex'
import UserCard from '@/components/user-card.vue'
import ProductCard from '@/components/product-card.vue'

import Navbarbuyer from '@/components/navbarbuyer.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names

  components: {
    UserCard,
    ProductCard,
    Navbarbuyer,
  },
  data() {
    return {
      users: [],
      products: [],
    }
  },
  async created() {
    this.products = await this.fetchProducts()
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
}
</script>

<template lang="pug">
Navbarbuyer
.box
  
 h1.hero Shop smart, not expensive! 
 h4.hero Get Amazing Deals on High-Quality pre-owned items.
 p.hero 
  | Find your next treasure at a great price - pre-owned items that are as good as new.
  br 
  | Don't miss out on the opportunity to save big and score a great deal on high-quality pre-owned items. 
  
  
  
.productbox  
   h3 New Products
   product-card(v-for="product in products"  :product="product")
 

   //user-card(v-for="user in users" :user="user") 
//-   ProductCard
//-   ProductCard
//-   ProductCard

</template>

<style>
h1 {
  font-weight: bold;
}
.hero {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
}
.box {
  background-color: #008ecc;
  width: 100%;
  height: 400px;
  place-items: centre;

  margin-bottom: 40px;
  padding: 7% 7% 7%;
}
.productbox {
  margin: 1% 5% 1% 5%;
}
</style>
