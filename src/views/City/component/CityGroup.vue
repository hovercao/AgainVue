<template>
  <van-index-bar :index-list="indexList">
    <van-index-anchor index="热门"/>
    <div class="list">
      <template v-for="item in hotCities">
        <span @click="clickCity(item)">{{ item.cityName }}</span>
      </template>
    </div>

    <template v-for="group in cities">
      <van-index-anchor :index="group.group"/>
      <template v-for="item in group.cities">
        <van-cell :title="item.cityName" @click="clickCity(item)"/>
      </template>
    </template>
  </van-index-bar>

</template>
<script setup>
import {computed} from "vue";
import {useRouter} from "vue-router";
import useCityStore from '@/stores/modules/city'


const props = defineProps({
  currentCityGroup: {
    type: Object,
    default: () => ({})
  }
})
const router = useRouter()
const cityStore = useCityStore()

const cities = computed(() => props.currentCityGroup.cities)
const hotCities = computed(() => props.currentCityGroup.hotCities)
const indexList = computed(() => {
  if (Array.isArray(cities.value)) {
    const arr = cities.value.map(node => {
      return node.group
    })
    arr.unshift('#')
    return arr
  }
  return []
})

function clickCity(item) {
  cityStore.currentCity = item
  router.back()
}
</script>
<style lang="less" scoped>
.list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;

  span {
    display: inline-block;
    width: 70px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background: #fff4ec;
    margin: 10px 0;
  }
}
</style>