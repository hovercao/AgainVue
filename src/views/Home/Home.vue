<template>
  <NavBar></NavBar>
  <div class="banner">
    <img src="https://th.bing.com/th/id/OIP.O1CyeKs-ES3CZTfWbTjA2gHaEo?pid=ImgDet&rs=1" alt="">
  </div>
  <SearchBox/>
</template>

<script setup>
import NavBar from "./component/NavBar.vue";
import SearchBox from './component/SearchBox.vue'

</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
}

</style>
