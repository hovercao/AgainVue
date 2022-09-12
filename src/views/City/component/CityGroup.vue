<template>
  <van-index-bar>
    <template v-for="group in cities">
      <van-index-anchor :index="group.group" />
      <template v-for="item in group.cities">
        <van-cell :title="item.cityName"/>
      </template>
    </template>
  </van-index-bar>

</template>
<script setup>
import {computed, toRefs} from "vue";

const props = defineProps({
  currentCityGroup: {
    type: Object,
    default: () => ({})
  }
})
const cities = computed(() => props.currentCityGroup.cities)

</script>