<template>
  <NavBar></NavBar>
  <div class="banner">
    <img src="https://th.bing.com/th/id/OIP.O1CyeKs-ES3CZTfWbTjA2gHaEo?pid=ImgDet&rs=1" alt="">
  </div>
  <div class="location">
    <div class="city">广州</div>
    <div class="position">
      <span>我的位置</span>
      <i class="iconfont">&#xe601;</i>
    </div>
  </div>
</template>

<script setup>
import NavBar from "./component/NavBar.vue";

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

.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {

    flex: 1
  }

  .position {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 94px;

    .iconfont {
      font-size: 20px;
      color: var(--primary-color);
    }
  }
}
</style>
