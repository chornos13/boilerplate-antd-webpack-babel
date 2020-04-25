class Interceptors {
  static default() {
    return {
      interceptors: {
        request: {
          onFulfilled: function reqFulfilledFetchAllData(config) {
            return config
          },
          onRejected: function reqRejectedFetchAllData(error) {
            return Promise.reject(error)
          },
        },
        response: {
          onFulfilled: function resFulfilledFetchAllData(response) {
            return response
          },
          onRejected: function resRejectedFetchAllData(error) {
            return Promise.reject(error)
          },
        },
      },
    }
  }

  static fetchAllData() {
    return {
      interceptors: {
        request: {
          onFulfilled: function reqFulfilledFetchAllData(config) {
            config.url = `${config.url}?page=0&pageSize=999999`
            return config
          },
          onRejected: function reqRejectedFetchAllData(error) {
            return Promise.reject(error)
          },
        },
        response: {
          onFulfilled: function resFulfilledFetchAllData(response) {
            return response
          },
          onRejected: function resRejectedFetchAllData(error) {
            return Promise.reject(error)
          },
        },
      },
    }
  }
}

export default Interceptors
