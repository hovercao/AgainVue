<template>
  Home
  <HomaBanner></HomaBanner>
</template>

<script>

import HomaBanner from '@/06_事件总线/HomeBanner.vue';
import eventBus from "@/utils/event-bus";

export default {
  name: "Home",
  components: {HomaBanner},
  created() {
    eventBus.on('eventBus', (a, b) => {
      console.log(a, b)
    })
  }
}
</script>

<style scoped>

</style>