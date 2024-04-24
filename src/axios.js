// src/axios.js
import axios from 'axios'

const Axios = () => {
  const axiosInstance = axios.create({
    // baseURL: import.meta.VUE_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    timeout: 15000
  })
  const token = localStorage.getItem('token')
  if (token) {
    axiosInstance.defaults.headers.Authorization = `Bearer ${token}`
  }

  return axiosInstance
}

export default Axios
