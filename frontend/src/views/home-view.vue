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
.box.container-fluid
  .row
    .col-sm-9.col-md-7.col-lg-12.mx-auto.justify-content-start
        h1 Super Amazing Offers
        p  Don't miss out on the opportunity to save big on high-quality pre-owned items. 
      button.btn.btn-primary.btnclass.ml-auto( type="button") Shop Now
// h1 Start Shopping
</template>

<style scoped>
h1 {
  position: absolute;
  top: 260px;
  left: 70px;
  color: #ffff;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  letter-spacing: 0px;
}
p {
  position: absolute;
  left: 70px;
  color: #ffff;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  top: 305px;
}

.box {
  background-color: #1db5c9;
  width: 100%;
  height: 400px;
  box-sizing: border-box;
  margin-bottom: 0px;
  margin-top: 30px;
  padding: 3% 3% 3%;
}
.hero {
  width: 100%;
  height: 240;
}
.btnclass {
  position: absolute;
  left: 25px;
  top: 430px;
  align-items: flex-start;
  height: 44px;
  width: 130px;
}
.btnborder {
}

/* .svg {
  position: absolute;
  left: 160px;
  top: 220px;
} */
</style>
