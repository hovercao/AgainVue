<!--
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-09-17 17:20:41
 * @LastEditors: hovercao 43169035+hovercao@users.noreply.github.com
 * @LastEditTime: 2022-09-18 12:18:41
 * @FilePath: /AgainVue/src/views/Detail/components/DetailSwiper.vue
-->
<template>
  <div class="DetailSwiter">
    <VanSwipe :autoplay="3000" indicator-color="white">
      <VanSwipeItem v-for="item in housePics" :key="item.orderIndex">
        <img :src="item.url" />
      </VanSwipeItem>
      <template #indicator="{ active, total }">
        <!-- <div>{{ props.active }}/{{ housePics.length }}-{{ props.total }}</div> -->
        <div class="swiperIndicators">
          <template v-for="(value, key, index) in swiperItem" :key="key">
            <span>{{ value[0].title }}</span>
          </template>
        </div>
      </template>
    </VanSwipe>
  </div>
</template>
<script setup>
import { nextTick, onMounted, ref, toRefs, watch } from "vue";
const props = defineProps({
  housePics: {
    type: Array,
    default: () => [],
  },
});
const { housePics } = toRefs(props);
const swiperItem = ref({});
watch(
  () => housePics.value,
  () => {
    for (const item of housePics.value) {
      let valueArray = swiperItem[item.enumPictureCategory];
      if (!valueArray) {
        valueArray = [];
        swiperItem.value[item.enumPictureCategory] = valueArray;
      }
      swiperItem.value[item.enumPictureCategory].push(item);
    }
    console.log(swiperItem.value);
  }
);

const nameReg = /【(.*?)】/i;

function getName(name) {
  return nameReg.exec(name)[1];
}
</script>

<style lang="less" scoped></style>
