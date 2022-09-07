<template>
  <div>{{ fullName }}</div>
  <div @click="changeName">{{ fullName2 }}</div>
</template>
<script setup>

import {computed, reactive} from "vue";

const names = reactive({
  firstName: '黄',
  lastName: '嘉兴'
})

const fullName = computed(() => {
  return names.firstName + ' ' + names.lastName
})

const fullName2 = computed({
  set(newValue) {

  },
  get() {
    return names.firstName + ' ' + names.lastName
  }
})

const changeName=()=>{
  names.lastName='佩'
  names.firstName='曹'
  console.log(names)
}

</script>