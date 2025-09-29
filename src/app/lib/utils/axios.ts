import Axios from 'axios'

const axios = Axios.create({
  baseURL: "http://202.46.152.202:8001",
  headers: { 'Content-Type': 'application/json' },
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN"
})

export default axios