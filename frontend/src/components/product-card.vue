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
.card.border-0.my-5 
      img.border.card-img-top.image-fluid(:src="`${product.image}`"  alt='...')(@click="$router.push(`products/${product._id}`)") 
      .card-body
        p.card-title {{product.name}}  
        p.price €{{product.price}}
       
       
        
        //-   CartIcon 
        //CounterBox

        
  
  
</template>

<style scoped>
.card-footer {
  background-color: #fff6e4;
}
img {
  width: 100%;
  height: 180px;
}
.card {
  width: 230px;
  display: inline-block;
  margin: 10px;
}

.btnborder {
  margin: auto;
  background-color: none;
  width: 130px;
  height: 40px;
  border-color: #ff8a00;
}
.price {
  color: #00000;
  font-weight: bold;
}
</style>
