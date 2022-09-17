import dayjs from "dayjs";

export default function (date, format) {
  return dayjs(date).format(format);
}

export function gitDiffDays(start, end) {
  return dayjs(end).diff(start, "day");
}
