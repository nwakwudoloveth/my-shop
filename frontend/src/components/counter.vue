<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'CounterBox',
  mounted() {
    this.incrementCount()
  },
  methods: {
    ...mapActions(['incrementCount']),
  },
  computed: {
    ...mapState(['count']),
  },
}
</script>

<template lang="pug">
div
    p {{count}}
</template>
