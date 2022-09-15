<!--
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-09-15 07:58:42
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-09-15 18:58:51
 * @FilePath: \AgainVue\src\views\Home\Home.vue
 * 
-->
<template>
  <NavBar></NavBar>
  <div class="banner">
    <img
        src="https://th.bing.com/th/id/OIP.O1CyeKs-ES3CZTfWbTjA2gHaEo?pid=ImgDet&rs=1"
        alt=""
    />
  </div>
  <SearchBox ref="searchRef"/>
  <div class="hotSuggests">
    <span
        v-for="(item, index) in hotSuggests"
        :key="index"
        :style="{
        color: item.tagText.color,
        background: item.tagText.background.color
      }"
    >{{ item.tagText.text }}</span
    >
  </div>
  <div class="searchBut">
    <VanButton type="primary" block round @click="goSearch">搜索</VanButton>
  </div>
  <HomeCategories/>
  <HomeList/>
</template>

<script setup>
import NavBar from './component/NavBar.vue'
import SearchBox from './component/SearchBox.vue'
import HomeCategories from './component/HomeCategories.vue'
import HomeList from './component/HomeList.vue'
import {useRouter} from 'vue-router'

import useHomeStore from '@/stores/modules/home'
import {storeToRefs} from 'pinia'
import {ref} from 'vue'

const homeStore = useHomeStore()
const router = useRouter()
const searchRef = ref(null)
homeStore.fetchHomeHotSuggests()
homeStore.fetchGetCategories()
homeStore.fetchGetHouseList()
const {hotSuggests} = storeToRefs(homeStore)
function goSearch() {
  router.push({
    path: '/search',
    query: {
      ...searchRef.value
    }
  })
}
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

.searchBut {
  margin-top: 16px;
  padding: 20px;
}
</style>
