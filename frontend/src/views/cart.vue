<script>
import Navbarbuyer from '@/components/navbarbuyer.vue'
import CartCard from '@/components/cart-card.vue'
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cart',
  components: {
    Navbarbuyer,
    CartCard,
  },
  data() {
    return {
      cart: [],
    }
  },

  async created() {
    this.cart = await this.fetchCart()
  },
  methods: {
    ...mapActions(['fetchCart']),
  },
  // computed: {
  //   ...mapState(['cart']),
  // },
}
</script>

<template lang="pug">
Navbarbuyer
h3 My Cart
CartCard(v-for="product in cart.items"  :product="product")
div.d-flex.justify-content-between(v-if="cart?.items?.length")
  div  
    a.btn.btn-warning(href='#') Continue Shopping
  div
    | Total 
    strong {{cart.items.length}}
  div
    a.btn.btn-success(href='#') Checkout 
div(v-else)
 div 
  p.text-center Cart is empty
 
</template>

<style scoped>
h3 {
  margin-left: 80px;
}
</style>
