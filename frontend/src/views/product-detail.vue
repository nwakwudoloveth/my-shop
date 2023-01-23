<script>
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Detail',
  //props: ['product'],

  data() {
    return {
      product: null,
    }
  },
  async created() {
    this.product = await this.fetchProduct(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchProduct']),
  },
}
</script>

<template lang="pug">
  
.container
  .row 
    .col.card.holder
      img(src='https://picsum.photos/200' alt='productImage')
    .col
      h2 {{product.name}}
      p {{product.description}}
      h4 review
      hr
      h2 ${{product.price}}
      h6 Quantity :
      .btn-group.me-2(role='group' aria-label='Second group')
        button.btn.btn-secondary(type='button') -
        button.btn.btn-secondary(type='button') 1
        button.btn.btn-secondary(type='button') +
      br
      button.btn.btn-primary.text-center.action(type='button') Buy Now
      button.btn.btn-outline-primary.text-center.action(type='button') Add to Cart
      br
      h6 Delivery
      p
        a(href='') Enter your Address for delivery


</template>

<style scoped>
.container {
  margin-top: 50px;
}

.card {
  margin-left: 30px;
  margin-right: 20px;
  padding: 0px;

  border: 10px;
  color: green;
}
.action {
  margin: 10px 10px 10px 0px;
}
</style>
