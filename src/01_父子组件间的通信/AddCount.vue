<template>
  <div @click="addCount">
    <button data-number="1">+1</button>
    <button data-number="5">+5</button>
    <button data-number="10">+10</button>
  </div>
</template>

<script>
export default {
  name: "AddCount",
  methods: {
    addCount(e) {
      const target = e.target
      const countNumber = Number(target.dataset.number)
      this.$emit('addCounter', countNumber)
    }
  }
}
</script>

<style scoped>

</style>