<template>
  <NavBar></NavBar>
  <div class="banner">
    <img src="https://th.bing.com/th/id/OIP.O1CyeKs-ES3CZTfWbTjA2gHaEo?pid=ImgDet&rs=1" alt="">
  </div>
  <SearchBox/>
  <div class="hotSuggests">
    <span v-for="(item,index) in hotSuggests" :key="index"
          :style="{color:item.tagText.color,background:item.tagText.background.color}"
    >{{ item.tagText.text }}</span>
  </div>
</template>

<script setup>
import NavBar from "./component/NavBar.vue";
import SearchBox from './component/SearchBox.vue'

import useHomeStore from '@/stores/modules/home'
import {storeToRefs} from "pinia";

const homeStore = useHomeStore()
homeStore.fetchHomeHotSuggests()
homeStore.fetchGetCategories()
const {hotSuggests, categories} = storeToRefs(homeStore)


</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
}

.hotSuggests {
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  margin-top: 16px;

  span {
    display: inline-block;
    padding: 3px 5px;
    margin: 5px 3px;
    border-radius: 5px;
    font-size: 12px;
  }
}

</style>
