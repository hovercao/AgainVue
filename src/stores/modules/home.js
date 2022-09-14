import {defineStore} from 'pinia'
import {getHomeHotSuggests, getCategories} from '@/service'

export default defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: []
  }),
  actions: {
    async fetchHomeHotSuggests() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchGetCategories(){
      const res = await getCategories()
      this.categories = res.data
    }
  }
})