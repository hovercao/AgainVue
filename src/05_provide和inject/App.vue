<template>
  <Home></Home>
  <button @click="changeMessage">changeMessage</button>
</template>

<script>

import Home from "@/05_provide和inject/Home";
import {computed} from 'vue'

export default {
  name: "App",
  components: {Home},
  data() {
    return {
      message: 'hjx is 25'
    }
  },
  provide() {
    return {
      name: 'hjx',
      age: 25,
      message: computed(() => this.message)
    }
  },
  methods: {
    changeMessage() {
      this.message = 'hjx is 26'
    }
  }
}
</script>

<style scoped>

</style>