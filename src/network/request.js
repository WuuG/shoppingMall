import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    //后台接口，可以去B站底下添加老师微信获取
    baseURL: 'http://152.136.185.210:',
    timeout: 5000,
  })
  return instance(config);
}