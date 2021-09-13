import { http } from '../utils/axios'
import { Api } from './config'

export function getData(data: number) {
  return http.get(`${Api.user}/users/mock/login/${data}`)
}
export function getBanner() {
  return http.post(Api.user)
}
