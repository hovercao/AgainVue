import { computed } from "vue";
import useMainStore from "@/stores/modules/main";
import formatDate from "@/utils/formatDate";
import { storeToRefs } from "pinia";

function useInHotelDate(format = "MM月DD日") {
  const mainStore = useMainStore();
  const { startDate, endDate } = storeToRefs(mainStore);
  const startDateStr = computed(() => formatDate(startDate.value, format));
  const endDateStr = computed(() => formatDate(endDate.value, format));

  return {
    startDateStr,
    endDateStr,
  };
}

export default useInHotelDate;
