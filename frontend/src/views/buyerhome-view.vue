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
.box.container-fluid
 .row
    .col-sm-9.col-md-7.col-lg-12.mx-auto
      img.img-fluid.heroImage(src='@/assets/images/LandingPage2.png')
      div.grid-container.items
        h1.hero.text-start.text-break Shop smart, not expensive! 
        h4.hero.text-start.text-break Get Amazing Deals on High-Quality pre-owned items.
  
  
  
  
.productbox  
   h3.text-center Top Deals
   product-card(v-for="product in products"  :product="product")
 

   //user-card(v-for="user in users" :user="user") 
//-   ProductCard
//-   ProductCard
//-   ProductCard

</template>

<style scoped>
h1 {
}
.heroImage {
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  width: 100%;
}
h1 {
  align-items: center;
  color: black;
  font-weight: bold;
  position: absolute;
  top: 150px;
  left: 70px;
  font-size: 2rem;
}
h4 {
  position: absolute;
  top: 200px;
  left: 70px;
  font-size: 1rem;
}
p {
  position: absolute;
  top: 220px;
  left: 70px;
  font-size: 1rem;
}

.box {
  position: relative;
  background-color: #7ce2f0;
  width: 100%;
  height: 400px;
  box-sizing: border-box;
  margin-bottom: 0px;
  margin-top: 30px;
  padding: 3% 3% 3%;
}
.productbox {
  margin: 0% 0% 1% 0%;
  background-color: #ffff;
  padding: 1% 3% 3% 3%;
  align-items: center;
}
.hero {
  color: #202249;
}
</style>
