<template>
  <div>{{ scrollPosition.y }}</div>
  <div>{{ scrollPosition.x }}</div>
  <div class="App">App</div>

</template>
<script setup>
import useScrollPosition from "@/11_自定义hooks/hooks/useScrollPosition";

const {scrollPosition} = useScrollPosition()

</script>
<style scoped>
.App {
  height: 3000px;
}
</style>