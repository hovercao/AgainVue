<template>
  HomeBanner
  <button @click="handleClick">eventBus</button>
</template>

<script>
import eventBus from "@/utils/event-bus";

export default {
  name: "HomeBanner",
  methods: {
    handleClick() {
      eventBus.emit('eventBus', 2222222222, '1212')
    }
  }
}
</script>

<style scoped>

</style>