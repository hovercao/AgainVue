<template>
  <div class="SearchBar">
    <div class="selectTime">
      <div class="item start">
        <div class="name">住</div>
        <div class="date">{{ startDateStr }}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="date">{{ endDateStr }}</div>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字、</div>
    </div>
    <div class="right">
      <i></i>
    </div>
  </div>
</template>
<script setup>
import useInHotelDate from "@/hooks/useInHotelDate";

const { endDateStr, startDateStr } = useInHotelDate("MM.DD");
</script>

<style lang="less" scoped>
.SearchBar {
  display: flex;
  background-color: #f2f4f6;
  padding: 10px;
}
.selectTime {
  display: flex;
  flex-direction: column;
  width: 50px;
}
.item {
  display: flex;
}
.content {
  flex: 1;
}
.right {
  width: 20px;
}
</style>
