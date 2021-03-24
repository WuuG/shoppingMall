import { request } from './request'

export function getHomeDatas() {
  return request({
    url: '/home/multidata'
  })
}