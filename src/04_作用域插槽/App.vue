<template>
  <Appbar :titles="[21.32,234,323,44]">
    <template v-slot:default="props">
      <button>{{ props.item }}</button>
    </template>
  </Appbar>
</template>

<script>
import Appbar from "@/04_作用域插槽/Appbar";

export default {
  name: "App",
  components: {Appbar}
}
</script>

<style scoped>

</style>