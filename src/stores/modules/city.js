import {defineStore} from 'pinia'
import {getCityAll} from "@/service";

export default defineStore('city', {
  state: () => ({
    allCities: {}
  }),
  actions: {
    async fetchAllCitiesAction() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})