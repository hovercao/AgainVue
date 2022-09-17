<!--
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-09-17 14:54:46
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-09-17 17:29:36
 * @FilePath: \AgainVue\src\views\Detail\Detail.vue
-->
<template>
  <div class="Detail">
    <DetailSwiper :house-pics="mainPart?.topModule?.housePicture?.housePics" />
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import useDetailStore from "@/stores/modules/detail";
import DetailSwiper from "./components/DetailSwiper.vue";
import { storeToRefs } from "pinia";

const detailStore = useDetailStore();
const { currentHouse, mainPart, pricePart } = storeToRefs(detailStore);

const route = useRoute();
const houseId = route.params.id;
onMounted(() => {
  detailStore.fetchDetailInfos(houseId);
  setTimeout(() => {
    console.log(mainPart.value);
  }, 100);
});
</script>

<style lang="less" scoped></style>
