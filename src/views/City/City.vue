<template>
  <VanSearch
      v-model="searchValue"
      placeholder="请输入城市"
      shape="round"
      show-action
      @cancel="onCancel"
  ></VanSearch>
  <VanTabs v-model:active="tabActive" color="#ff9854">
    <VanTab title="国内.港澳台"></VanTab>
    <VanTab title="海外"></VanTab>
  </VanTabs>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {getCityAll} from '@/service'

const router = useRouter()
const searchValue = ref('')
const tabActive = ref(0)

function onCancel() {
  router.back()
}

onMounted(()=>{
  getCityAll()
})
</script>
<style lang="less" scoped>

</style>