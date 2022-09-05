<template>
  <div class="header">
    <div class="left">
      <slot name="left">left</slot>
    </div>
    <div class="center">
      <slot name="center">center</slot>
    </div>
    <div class="right">
      <slot name="right">left</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBar"
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;

}

div {
  height: 44px;

}

.left, .right {
  width: 80px;
  background: skyblue;
}

.center {
  flex: 1;
  background: aqua;
}
</style>