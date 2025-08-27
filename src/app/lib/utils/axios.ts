import Axios from 'axios'

const axios = Axios.create({
  baseURL: "http://localhost:8000",
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN"
})

export default axios