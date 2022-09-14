import Request from "@/service";

export function getHomeHotSuggests() {
  return Request.get({
    url: 'home/hotSuggests'
  })
}

export function getCategories(){
  return Request.get({
    url: 'home/categories'
  })
}