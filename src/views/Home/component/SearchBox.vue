<template>
  <div class="location">
    <div class="city" @click="goCity">{{ currentCity.cityName }}</div>
    <div class="position" @click="getPosition">
      <span>我的位置</span>
      <i class="iconfont">&#xe601;</i>
    </div>
  </div>
  <div class="selectTime" @click="show=true">
    <div class="start">
      <span class="tip">入住</span>
      <span class="time">{{ startDate }}</span>
    </div>
    <div class="stay">共{{ stayDays }}晚</div>
    <div class="end">
      <span class="tip">离店</span>
      <span class="time">{{ endDate }}</span>
    </div>
  </div>
  <van-calendar v-model:show="show" :show-confirm="false" color="#ff9854" type="range" @confirm="onConfirm"/>
</template>

<script setup>
import {useRouter} from 'vue-router'
import useCityStore from '@/stores/modules/city'
import {storeToRefs} from "pinia";
import {ref} from "vue";
import formatDate, {gitDiffDays} from '@/utils/formatDate'

const nowDate = new Date()
const startDate = ref(formatDate(nowDate))

const nextDate = nowDate.setDate(nowDate.getDate() + 1)
const endDate = ref(formatDate(nextDate))
const stayDays = ref(gitDiffDays(startDate.value, endDate.value))
const show = ref(false)
const router = useRouter()
const cityStore = useCityStore()
const {currentCity} = storeToRefs(cityStore)

function getPosition() {
  navigator.geolocation.getCurrentPosition((res) => {
    console.log(res)
  }, positionError => {
    console.log(positionError)
  })
}

function goCity() {
  router.push('/city')
}

function onConfirm(value) {
  startDate.value = formatDate(value[0])
  endDate.value = formatDate(value[1])
  stayDays.value = gitDiffDays(value[0], value[1])
  show.value = false
}
</script>
<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {

    flex: 1
  }

  .position {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 94px;

    .iconfont {
      font-size: 20px;
      color: var(--primary-color);
    }
  }
}

.selectTime {
  display: flex;
  align-items: center;
  padding: 0 20px;

  .start, .end {
    width: 100px;
    color: #999;
    display: flex;
    flex-direction: column;

    .tip {
      margin-bottom: 5px;
    }
  }

  .stay {
    flex: 1;
    text-align: center;
    color: #999;
  }
}
</style>