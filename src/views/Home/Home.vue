<template>
  <NavBar></NavBar>
  <div class="banner">
    <img
      src="https://th.bing.com/th/id/OIP.O1CyeKs-ES3CZTfWbTjA2gHaEo?pid=ImgDet&rs=1"
      alt=""
    />
  </div>
  <SearchBox ref="searchRef" />
  <div class="hotSuggests">
    <span
      v-for="(item, index) in hotSuggests"
      :key="index"
      :style="{
        color: item.tagText.color,
        background: item.tagText.background.color,
      }"
      >{{ item.tagText.text }}</span
    >
  </div>
  <div class="searchBut">
    <VanButton type="primary" block round @click="goSearch">搜索</VanButton>
  </div>
  <HomeCategories />
  <HomeList />
  <div v-if="scrollTop >= clientHeight" class="search">
    <SearchBar></SearchBar>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { ref } from "vue";

import NavBar from "./component/NavBar.vue";
import SearchBox from "./component/SearchBox.vue";
import HomeCategories from "./component/HomeCategories.vue";
import HomeList from "./component/HomeList.vue";
import SearchBar from "@/components/SearchBar/SearchBar.vue";

import useHomeStore from "@/stores/modules/home";
import useScroll from "@/hooks/useScroll";

const homeStore = useHomeStore();
const router = useRouter();
const searchRef = ref(null);
const { scrollTop, clientHeight } = useScroll();
homeStore.fetchHomeHotSuggests();
homeStore.fetchGetCategories();
homeStore.fetchGetHouseList();
const { hotSuggests } = storeToRefs(homeStore);

function goSearch() {
  router.push({
    path: "/search",
    query: {
      ...searchRef.value,
    },
  });
}

useScroll(() => {
  homeStore.fetchGetHouseList();
});
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
.search {
  position: fixed;
  top: 0;
  height: 45px;
  background: #fff;
  left: 0;
  right: 0;
  padding: 16px 16px 10px;
}
</style>
