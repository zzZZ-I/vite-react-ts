import axios, { AxiosPromise, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { Api } from '../api/config'

// 请求的参数接口
interface RequestData {
  [prop: string]: any
}
class Http {
  // 定义一个接口请求类，用于创建一个axios请求实例
  constructor(public baseUrl: string) {
    // 这个类接收一个字符串参数，是接口请求的基本路径
    this.baseUrl = baseUrl
  }

  public request<T>(options: AxiosRequestConfig): AxiosPromise<T> {
    // 我们实际调用接口的时候调用实例的这个方法，他返回一个AxiosPromise
    // 这里使用axios.create方法创建一个axios实例，他是一个函数，同时这个函数包含多个属性
    const instance: AxiosInstance = axios.create()
    options = this.mergeConfig(options) // 合并基础路径和每个接口单独传入的配置，比如url、参数等
    this.interceptors(instance) // 调用interceptors方法使拦截器生效
    return instance(options) // 最后返回AxiosPromise
  }

  private interceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        let url = config.url as string
        const path = url.split('?')[0] || ''
        let search = url.split('?')[1] || ''
        // let tempTokenId = window.localStorage.getItem('tempTokenId')||''
        // 添加时间戳
        search = `?_v=${Date.now()}${search ? `&${search}` : ''}`
        url = path + search
        config.url = url
        console.log('请求拦截器', config)
        return config
      },
      (error) => Promise.reject(error)
    )
    // 响应拦截器
    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('响应拦截器', res)

        return res.data || res
      },
      (error) => {
        console.error('响应拦截器--error', error)

        return Promise.reject(error)
      }
    )
    // 请求超时默认时间
    instance.defaults.timeout = 20000
    // post请求默认请求头
    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  }

  private mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig {
    // 这个方法用于合并基础路径配置和接口单独配置
    return { baseURL: this.baseUrl, ...options }
  }

  get<T>(url: string, data: RequestData = {}) {
    this.request<T>({
      url,
      method: 'GET',
      params: {
        ...data
      }
    })
  }

  post<T>(url: string, data: RequestData = {}, options?: any) {
    this.request<T>({
      url,
      method: 'POST',
      data,
      ...options
    })
  }

  put<T>(url: string, data: RequestData = {}) {
    this.request<T>({
      url,
      method: 'PUT',
      data,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
  }

  delete<T>(url: string, data: RequestData = {}) {
    this.request<T>({
      url,
      method: 'DELETE',
      data,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
  }
}
export const http = new Http(Api.Host)
