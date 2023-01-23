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
Navbarbuyer
.container.mt-5
  .row.mb-3
    .col-12
      
  .row.mb-3
    .col-2
      img(:src="`${product.image}`" alt='Product Image')
    .col-4
      h6 {{product.name}}
    .col-2
      h6 {{product.price}}
    .col-2
      .btn-group.btn-group-lg
        button.btn.btn-secondary -
        button.btn.btn-secondary 1
        button.btn.btn-secondary +
    .col-2
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
