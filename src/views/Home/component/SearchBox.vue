<template>
  <div class="location">
    <div class="city" @click="goCity">广州</div>
    <div class="position" @click="getPosition">
      <span>我的位置</span>
      <i class="iconfont">&#xe601;</i>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

function getPosition() {
  navigator.geolocation.getCurrentPosition((res) => {
    console.log(res)
  }, positionError => {
    console.log(positionError)
  })
}

function goCity() {
  router.push('/city')
}
</script>
<style lang="less" scoped>
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