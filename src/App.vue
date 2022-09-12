<template>
  <RouterView></RouterView>
  <TabBar v-if="!route.meta.hideTabbar"></TabBar>
</template>
<script setup>
import TabBar from "@/components/TabBar/TabBar.vue";
import {useRoute} from "vue-router";

const route = useRoute()
</script>
