<script>
export default {
  name: 'UserCard',
  props: ['user'],
}
</script>

<template lang="pug">
.box
  h2 {{user.name}} {{user.email}}
</template>

<style lang="css" scoped>
.box {
  padding: 2rem;
  border: 1px solid #ffff;
  border-radius: 0.3rem;
}
</style>
