<template>
  <div class="tab-bar">
    <div class="tab-bar-item" v-for="item in tabBarData">
      <i class="iconfont" v-html="item.icon"></i>
      <span>{{ item.pathname }}</span>
    </div>
  </div>
</template>

<script setup>
import tabBarData from '@/assets/data/tabbar'


</script>
<style lang="less" scoped>
.tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 55px;
  border-top: 1px solid #f3f3f3;

  .iconfont {
    color: #000;
    font-size: 25px;
  }

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      text-align: center;
      margin-bottom: 8px;
    }
  }
}
</style>