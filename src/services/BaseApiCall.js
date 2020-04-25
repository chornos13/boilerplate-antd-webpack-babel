import axios from 'axios'
import { BASE_URL } from 'constants/ConstApi'
import { get } from 'lodash'

const OPTIONS = () => ({
  interceptors: {
    request: {
      onFulfilled: null,
      onRejected: null,
    },
    response: {
      onFulfilled: null,
      onRejected: null,
    },
  },
})

class BaseApiCall {
  constructor(configs = {}, options = OPTIONS(), Class) {
    this.Class = Class
    this.options = options
    this.configs = configs
    this.http = axios.create({
      baseURL: BASE_URL,
      headers: { Authorization: localStorage.getItem('Authorization') },
      ...(this.configs || {}),
    })

    this.setInterceptorRequest(this.options)
    this.setInterceptorResponse(this.options)
  }

  setInterceptorRequest(options) {
    const request = get(options, 'interceptors.request', {})
    this.http.interceptors.request.use(request.onFulfilled, request.onRejected)
  }

  setInterceptorResponse(options) {
    const response = get(options, 'interceptors.response', {})
    this.http.interceptors.response.use(
      response.onFulfilled,
      response.onRejected,
    )
  }

  useScopeInterceptor(iComponent, configInterCeptor = OPTIONS()) {
    return new Promise((resolve) => {
      // eslint-disable-next-line no-use-before-define
      const customBaseApiCall = new this.Class(this.configs, configInterCeptor)
      // const classProto = Object.getPrototypeOf(oriApiCall)
      // const protoNames = Object.getOwnPropertyNames(classProto).filter(
      //   (x) => x !== 'constructor',
      // )

      // for (let i = 0; i < protoNames.length; i += 1) {
      //   const name = protoNames[i]
      //   customBaseApiCall[name] = function(contextAPI) {
      //     const a = oriApiCall[name]()
      //
      //     console.log(a)
      //     a.aa = 'wa'
      //     console.log(a)
      //
      //     return a
      //   }
      // }

      // console.log({ protoNames })

      const setData = (stateName) => {
        return (res) => {
          iComponent.setState({
            [stateName]: res.data.data,
          })
        }
      }

      resolve({ api: customBaseApiCall, setData })
    })
  }
}

export default BaseApiCall
