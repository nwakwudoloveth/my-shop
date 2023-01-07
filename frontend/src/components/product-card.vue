<script>
import CounterBox from '@/components/counter.vue'
import CartIcon from '@/components/icons/icon-cart.vue'
export default {
  name: 'ProductCard',
  props: ['product'],
  components: {
    CounterBox,
    CartIcon,
  },
}
</script>

<template lang="pug">
.card
      img.card-img-top(:src="`${product.image}`"  alt='...') 
      .card-body
        h5.card-title {{product.name}} {{product.price}}
        //- button.btn.btn-primary.btnclass(type='button')
        
        //-   CartIcon 
        //-   |    Add to cart
        //CounterBox
         
  
</template>

<style>
.card {
  width: 14rem;
  padding: 2%;
  display: inline-block;
  margin: 10px;
}
</style>
