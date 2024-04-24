// src/axios.js
import axios from 'axios'

const Axios = () => {
  const axiosInstance = axios.create({
    // baseURL: import.meta.VUE_APP_BASE_URL
  })
  return axiosInstance
}

export default Axios
