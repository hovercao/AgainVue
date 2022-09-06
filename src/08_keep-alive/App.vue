<template>
  <button v-for="item in butList" @click="butClick(item)">
    {{ item }}
  </button>
  <div>
    <keep-alive include="Home">
      <component :is="tabName"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from './Home'
import About from './About'

export default {

  name: "App",
  components: {
    Home, About
  },
  data() {
    return {
      butList: ['Home', "About"],
      tabName: 'Home'
    }
  },
  methods: {
    butClick(item) {
      this.tabName = item
    }
  }
}
</script>

<style scoped>

</style>