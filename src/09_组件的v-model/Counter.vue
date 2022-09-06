<template>
  <span>{{ modelValue }}</span>
  <button @click="handleClick">change</button>
</template>

<script>
export default {
  name: "Counter",
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleClick() {
      this.$emit('update:modelValue', 100)
    }
  }
}
</script>

<style scoped>

</style>