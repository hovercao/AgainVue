<template>
  <div class="HomeCategories">
    <template v-for="item in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <p>{{ item.title }}</p>
      </div>
    </template>
  </div>
</template>
<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore);
</script>
<style lang="less" scoped>
.HomeCategories {
  display: flex;
  overflow-x: auto;
  margin: 0 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    flex-shrink: 0;
    width: 70px;

    text-align: center;

    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
