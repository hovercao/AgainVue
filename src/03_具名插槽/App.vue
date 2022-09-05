<template>
  <AppBar>
    <template v-slot:left>
      返回
    </template>
    <template v-slot:right>
      登录
    </template>
    <template v-slot:center>
      centraler
    </template>
  </AppBar>
</template>

<script>
import AppBar from "@/03_具名插槽/AppBar";

export default {
  name: "App",
  components: {
    AppBar
  }
}
</script>

<style scoped>

</style>