<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cart',
}
</script>

<template lang="pug">
.container.mt-5
  .row.mb-3
    .col-12
      h1 My Cart
  .row.mb-3
    .col-2
      img(src='https://picsum.photos/100' alt='Product Image')
    .col-4
      h2 Product Name
    .col-2
      h3 Price
    .col-2
      .btn-group.btn-group-lg
        button.btn.btn-secondary -
        button.btn.btn-secondary 1
        button.btn.btn-secondary +
    .col-2
      button.btn.btn-danger Delete
  .row.mb-3
    .col-2
      img(src='https://via.placeholder.com/100x100' alt='Product Image')
    .col-4
      h2 Product Name
    .col-2
      h3 Price
    .col-2
      .btn-group.btn-group-lg
        button.btn.btn-secondary -
        button.btn.btn-secondary 1
        button.btn.btn-secondary +
    .col-2
      button.btn.btn-danger Delete
  .row.mb-3
    .col-8
      h3 Total:
    .col-4
      h3 $0.00
  .row
    .col-12.text-center
      button.btn.btn-primary.btn-lg Checkout

</template>
