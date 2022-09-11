export const loadAssets = (url) => {
  return new URL(`../assets/image/${url}`, import.meta.url).href
}