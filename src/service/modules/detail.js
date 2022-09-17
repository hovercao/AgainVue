import Request from "@/service";

export function getDetailInfo(houseId) {
  return Request.get({
    url: "detail/infos",
    params: {
      houseId,
    },
  });
}
