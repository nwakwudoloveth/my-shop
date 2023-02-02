<script>
import { mapActions } from 'vuex'
import Navbarbuyer from '@/components/navbarbuyer.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Detail',
  //props: ['product'],
  components: {
    Navbarbuyer,
  },

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
    ...mapActions(['addToCart']),
  },
}
</script>

<template lang="pug">
Navbarbuyer  
.container-fluid
 .row 
    .col-sm-3.col-md-6.col-lg-4
      img(:src="`${product?.image}`" alt='productImage')
    .col-sm-3.col-md-6.col-lg-4  
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
      button.btn.btn-primary.text-center.btnclass(@click="addToCart(product._id)" type='button') Buy Now
      button.btn.btn-outline-warning.btnclass(@click="addToCart(product._id)" type='button') Add to Cart
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
img {
  width: 300px;
  margin-right: 30px;
  margin-left: 30px;
}

.col {
  padding-right: 30px;
  padding-left: 30px;
}
.btnclass {
  height: 44px;
  width: 130px;
  margin: 5px;
  color: #ffff;
  margin-bottom: 5px;
}
</style>
