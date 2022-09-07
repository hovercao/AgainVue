<template>
  <div>App</div>
<!--  <ReadOnly :info="readonly(info)" @changeName="changeName"></ReadOnly>-->
  <Computed></Computed>
</template>
<script setup>
import ReadOnly from "@/10_vue3的内置函数/ReadOnly";
import Computed from './Computed'
import {reactive, readonly} from "vue";

const info = reactive({
  name: 'hjx', age: 25
})

const changeName = () => {
  info.name = 'cp'
}
</script>