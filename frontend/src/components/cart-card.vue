<script>
import { mapActions, mapState } from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'CartCard',
  props: ['product'],
  components: {},

  methods: {
    ...mapActions(['removeItem']),
  },
  computed: {
    ...mapState(['cart']),
  },
}
</script>

<template lang="pug">
.container.mt-5
  .row
    .col-12
      
  .row.mb-3
    .col
      img(:src="`${product.image}`" alt='Product Image')
    .col
      h5 {{product.name}}
      h5 {{product.price}}
   
    .col
      .btn-group.btn-group-lg
        button.btn.btn-secondary -
        button.btn.btn-secondary 1
        button.btn.btn-secondary +
    .col
      button.btn.btn-danger(@click="removeItem(product._id)") Remove
  //- .row.mb-3
  //-   .col-8
  //-     h6 Total:
  //-   .col-4
  //-     h6 $0.00
  //- .row
  //-   .col-12.text-center
  //-     button.btn.btn-primary.btn-lg Checkout

</template>

<style scoped>
.col {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}

img {
  width: 200px;
  height: 180px;
}
</style>
