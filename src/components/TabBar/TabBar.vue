<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="item in tabBarData">
        <van-tabbar-item :to="item.path">
          <template #icon>
            <i class="iconfont" v-html="item.icon"></i>
          </template>
          <span>{{ item.pathname }}</span>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabBarData from "@/assets/data/tabbar";
import { ref } from "vue";

const currentIndex = ref(0);
</script>
<style lang="less" scoped>
.tab-bar {
  :deep(.van-tabbar-item__icon) {
    .iconfont {
      font-size: 26px;
    }
  }
}
</style>
