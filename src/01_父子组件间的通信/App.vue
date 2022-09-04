<template>
  {{ count }}
  <AddCount @addCounter="addNumber"></AddCount>
</template>

<script>
import AddCount from "@/01_父子组件间的通信/AddCount";

export default {
  name: "App",
  components: {
    AddCount
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addNumber(count) {
      this.count += count
    }
  }
}
</script>

<style scoped>

</style>