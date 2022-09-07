<template>
  <div>ReadOnly</div>
  <p @click="nameChange">{{ props.info.name }}</p>
</template>
<script setup>

const props = defineProps({
  info: {
    type: Object,
    default: () => ({})
  }
})
const emits = defineEmits([
    'changeName'
])
const nameChange = () => {
  emits('changeName')
}

</script>