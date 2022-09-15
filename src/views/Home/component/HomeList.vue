<template>
  <div class="list">
    <template v-for="item in houseList" :key="item.data.houseId">
      <HouseItemT9 v-if="item.discoveryContentType === 9" />
      <HouseItemT3 v-if="item.discoveryContentType === 3" />
    </template>
  </div>
</template>
<script setup>
import HouseItemT9 from '@/components/HouseItemT9/HouseItemT9.vue'
import HouseItemT3 from '@/components/HouseItemT3/HouseItemT3.vue'
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)
</script>
<style lang="less" scoped></style>
