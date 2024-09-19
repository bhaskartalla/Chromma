import axios from 'axios'
import { v4 as uuidV4 } from 'uuid'

const apiInstance = axios.create()

apiInstance.interceptors.request.use(
  function (config) {
    config.headers = {
      anonymous_id: window.localStorage.getItem('anonymousId'),
      client_id: 'TCP-WEB-APP',
      client_secret: 'c2632ea1-27be-44ac-a6c8-5f6335048003',
      'neu-app-version': '4.2.0',
      programid: '73eb6345-9cc9-4c37-a8e8-8620d6d32cf5',
      request_id: uuidV4(),
      authorization: 'Bearer 1b08dc5d-74fa-4086-8977-3ae595c2f68c',
    }
    // console.log('🚀 ~ apiInstance.interceptors.request config : ', config)
    return config
  },
  function (error) {
    console.log('🚀 ~ apiInstance.interceptors.request error : ', error)
    return Promise.reject(error)
  }
)

apiInstance.interceptors.response.use(
  (response) => {
    // console.log("apiInstance.interceptors.response response : ", response);
    return response
  },
  (error) => {
    console.log('🚀 ~ apiInstance.interceptors.response error:', error)
    return Promise.reject(error)
  }
)

export default apiInstance
