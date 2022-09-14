import Request from '../index'

export function getCityAll() {
  return Request.get({
    url: 'city/all'
  })
}

