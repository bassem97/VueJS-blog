import type { AxiosInstance } from 'axios'
import axios from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `https://my-json-server.typicode.com/bassem97/VueJS-blog/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(): Promise<Event> {
    return axiosInstance.get('/events')
  }
}
