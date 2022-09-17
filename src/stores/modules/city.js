import { defineStore } from "pinia";
import { getCityAll } from "@/service";

export default defineStore("city", {
  state: () => ({
    allCities: {},
    currentCity: { cityName: "深圳" },
  }),
  actions: {
    async fetchAllCitiesAction() {
      const res = await getCityAll();
      this.allCities = res.data;
    },
  },
});
