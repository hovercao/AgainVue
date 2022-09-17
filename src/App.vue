<template>
  <RouterView></RouterView>
  <TabBar v-if="!route.meta.hideTabbar"></TabBar>
  <Loading />
</template>
<script setup>
import TabBar from "@/components/TabBar/TabBar.vue";
import Loading from "./components/Loading/Loading.vue";
import { useRoute } from "vue-router";
import { nextTick, onMounted } from "vue";
const route = useRoute();
onMounted(async () => {
  await nextTick();
});
</script>
