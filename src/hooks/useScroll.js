import { onMounted, onUnmounted, ref } from "vue";

export default function (callback) {
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const clientHeight = ref(0);

  function scrollHandle() {
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    clientHeight.value = document.documentElement.clientHeight;
    if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
      if (callback) callback();
    }
  }

  onMounted(() => {
    document.addEventListener("scroll", scrollHandle);
  });
  onUnmounted(() => {
    document.removeEventListener("scroll", scrollHandle);
  });

  return {
    scrollTop,
    scrollHeight,
    clientHeight,
  };
}
