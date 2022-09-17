<template>
  <div class="Loading" v-if="mainStore.isLoading">
    <VanLoading size="24px" color="#fff" type="spinner" vertical
      >加载中...</VanLoading
    >
  </div>
</template>
<script setup>
import useMainStore from "@/stores/modules/main";
const mainStore = useMainStore();
</script>

<style lang="less" scoped>
.Loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
