<script>
import { mapActions } from 'vuex'
import CounterBox from '@/components/counter.vue'
import CartIcon from '@/components/icons/icon-cart.vue'
export default {
  name: 'ProductCard',
  props: ['product'],
  components: {
    CounterBox,
    CartIcon,
  },
  methods: {
    ...mapActions(['addToCart']),
  },
}
</script>

<template lang="pug">
.card 
      img.card-img-top(:src="`${product.image}`"  alt='...') 
      .card-body
        h5.card-title {{product.name}} 
        h5 ${{product.price}}
        button.btn.btn-outline-darkbuttonbutton(@click="addToCart(product._id)") Add to Cart
        //-   CartIcon 
        //CounterBox

        
  
  
</template>

<style scoped>
.card {
  width: 14rem;

  display: inline-block;
  margin: 10px;
}

.btn {
  margin-left: 40px;
  background-color: none;
  border-color: #008ecc;
}
</style>
