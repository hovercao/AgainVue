<template>
  <div class="tab-bar">
    <template v-for="(item,index) in tabBarData">
      <div class="tab-bar-item" :class="{active:currentIndex===index}" @click="itemClick(index,item.path)">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{ item.pathname }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import tabBarData from '@/assets/data/tabbar'
import {ref} from "vue";
import {useRouter} from 'vue-router'

const currentIndex = ref(0)
const router = useRouter()

const itemClick = (index, path) => {
  currentIndex.value = index
  router.push(path)
}

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
    font-size: 25px;
  }

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }

    span {
      text-align: center;
      margin-bottom: 8px;
    }
  }
}
</style>