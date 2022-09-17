/*
 * @Author: hovercao 17388766232@163.com
 * @Date: 2022-09-17 16:00:01
 * @LastEditors: hovercao 17388766232@163.com
 * @LastEditTime: 2022-09-17 17:16:53
 * @FilePath: \AgainVue\src\stores\modules\detail.js
 * @Description: 房屋详情Store数据
 */
import { getDetailInfo } from "@/service";
import { defineStore } from "pinia";

const useDetailStore = defineStore("detail", {
  state: () => ({
    currentHouse: {},
    mainPart: {},
    pricePart: {},
  }),
  actions: {
    /**
     * @param {*} houseId 房屋ID
     */
    async fetchDetailInfos(houseId) {
      const res = await getDetailInfo(houseId);
      this.currentHouse = res.data.currentHouse;
      this.mainPart = res.data.mainPart;
      this.pricePart = res.data.pricePart;
    },
  },
});

export default useDetailStore;
