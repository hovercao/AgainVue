import dayjs from "dayjs";

export default function (date) {
  return dayjs(date).format('MM月DD日')
}

export function gitDiffDays(start, end) {
  return dayjs(end).diff(start, 'day')
}