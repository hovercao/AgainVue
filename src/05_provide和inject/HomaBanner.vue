<template>
  {{ name }}-{{ age }}-{{ message.value }}
</template>

<script>
export default {
  inject: ['name', 'age', 'message'],
  name: "HomaBanner"
}
</script>

<style scoped>

</style>