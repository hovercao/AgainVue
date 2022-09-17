import { defineStore } from "pinia";
import { getHomeHotSuggests, getCategories, getHomeList } from "@/service";

export default defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    currentPage: 1,
  }),
  actions: {
    async fetchHomeHotSuggests() {
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data;
    },
    async fetchGetCategories() {
      const res = await getCategories();
      this.categories = res.data;
    },

    async fetchGetHouseList() {
      const res = await getHomeList(this.currentPage);
      this.houseList.push(...res.data);
      this.currentPage++;
    },
  },
});
