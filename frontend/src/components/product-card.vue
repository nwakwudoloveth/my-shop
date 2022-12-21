<script>
export default {
  name: 'ProductCard',
  props: ['product'],
}
</script>

<template lang="pug">
.card
      img.card-img-top(src='https://picsum.photos/200' alt='...')
      .card-body
        h5.card-title {{product.name}} {{product.price}}
       
        font-awesome-icon(icon="fa-solid fa-magnifying-glass")

        button.btn.btn-primary.btnclass Add to cart
         
  
</template>

<style>
.card {
  width: 14rem;
  padding: 2%;
  display: inline-block;
  margin: 10px;
}
</style>
