<script setup()>
import { mapActions } from 'vuex'
import UserCard from '@/components/user-card.vue'
import ProductCard from '@/components/product-card.vue'
import CartIcon from '@/components/addtoCart.vue'


export default {
  // eslint-disable-next-line vue/multi-word-component-names

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
    this.products = await this.fetchProducts()
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
}
</script>

<template lang="pug">
.box
CartIcon
 
.productbox  
   h1 New offers
   product-card(v-for="product in products"  :product="product")
 

   //user-card(v-for="user in users" :user="user") 
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
