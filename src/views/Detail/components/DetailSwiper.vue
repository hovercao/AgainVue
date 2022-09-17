<!--
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-09-17 17:20:41
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-09-17 17:31:05
 * @FilePath: \AgainVue\src\views\Detail\components\DetailSwiper.vue
-->
<template>
  <div class="DetailSwiter">
    <VanSwipe :autoplay="3000" indicator-color="white">
      <VanSwipeItem v-for="item in housePics" :key="item.orderIndex">
        <img :src="item.url" alt=""
      /></VanSwipeItem>
    </VanSwipe>
  </div>
</template>
<script setup>
defineProps({
  housePics: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="less" scoped></style>
