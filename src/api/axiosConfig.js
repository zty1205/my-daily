import axios from "axios"

import { Message, Loading } from 'element-ui'

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000
})

function serializeParams(params) {
  if (params) {
    let paramsArr = []
    for (let key of Object.keys(params)) {
      paramsArr.push(key + '=' + params[key])
    }
    return '?' + paramsArr.join('&')
  }
  return ''
}

function doRequest(loadingTarget, promise) {
  let loadingInstance = loadingTarget ? Loading.service({target: loadingTarget}) : false
  return promise.then((res) => {
    loadingInstance && loadingInstance.close()
    if (!res || !res.data || res.data.rs) {
      Message({
        message: res.data.errorInfo || "请求出错",
        type: 'error',
        duration: 1500
      })
      return Promise.reject(res)
    }
    return Promise.resolve(res.data || {})
  }, (error) => {
    loadingInstance && loadingInstance.close()
    return Promise.reject(error)
  })
}

function doGet({url, requestParams, loadingTarget}) {
  let promise = axiosInstance.get(url + serializeParams(requestParams))
  return doRequest(loadingTarget, promise)
}

function doPost({url, requestParams, requestBody, loadingTarget}) {
  let promise = axiosInstance.post(url + serializeParams(requestParams), requestBody)
  return doPromise(loadingTarget, promise)
}

// 添加拦截器 对token进行校验

export default {
  doGet,
  doPost
}
