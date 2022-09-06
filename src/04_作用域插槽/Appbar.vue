<template>
  <template v-for="item in titles">
    <slot :item="item">
      <p>{{ item }}</p>
    </slot>
  </template>
</template>

<script>
export default {
  props: {
    titles: Array,
    default: () => []
  },
  name: "Appbar"
}
</script>

<style scoped>

</style>