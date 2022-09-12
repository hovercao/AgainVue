<template>
  <VanSearch
      v-model="searchValue"
      placeholder="请输入城市"
      shape="round"
      show-action
      @cancel="onCancel"
  ></VanSearch>
  <VanTabs v-model:active="tabActive" color="#ff9854">
    <template v-for="(value,key,index) in allCities">
      <VanTab :title="value?.title" :name="key"></VanTab>
    </template>
  </VanTabs>
  <div class="counter">
    <CityGroup :currentCityGroup="currentCityGroup"/>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useRouter} from "vue-router";
import useCityStory from "@/stores/modules/city";
import {storeToRefs} from 'pinia'
import CityGroup from './component/CityGroup.vue'

const router = useRouter()
const searchValue = ref('')
const tabActive = ref(0)
const cityStore = useCityStory()
cityStore.fetchAllCitiesAction()
const {allCities} = storeToRefs(cityStore)

const currentCityGroup = computed(() => allCities.value[tabActive.value])

function onCancel() {
  router.back()
}


</script>
<style lang="less" scoped>
.counter {
  height: calc(100vh - 94px);
  overflow-y: auto;
}
</style>