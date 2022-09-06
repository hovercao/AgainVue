<template>
  <!--  <Counter v-model:model-value="value" @update:modelValue="value=$event"></Counter>-->
  <!--  等价于-->
  <Counter v-model="value"></Counter>

</template>

<script>
import Counter from "@/09_组件的v-model/Counter";

export default {
  name: "App",
  components: {Counter},
  data() {
    return {
      value: 1
    }
  }
}
</script>

<style scoped>

</style>