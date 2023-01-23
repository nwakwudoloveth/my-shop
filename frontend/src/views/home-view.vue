<script>
import HomeNavbarbuyer from '@/components/homenavbar.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    HomeNavbarbuyer,
  },
}
</script>

<template lang="pug">
HomeNavbarbuyer
.box
 h1 Start Shopping
</template>

<style scoped>
.box {
  background-color: #008ecc;
  width: 100%;
  height: 400px;
  place-items: centre;

  margin-bottom: 40px;
  padding: 7% 7% 7%;
}
</style>
