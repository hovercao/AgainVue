<template>
  <div class="item">
    <img :src="itemData.image.url" alt="" />
    {{ itemData.houseName }}
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style lang="less" scoped>
.item {
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
