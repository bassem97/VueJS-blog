import type { AxiosInstance } from 'axios'
import axios from 'axios'
import type { Event } from '@/typings/Event'
import type EventResponse from '@/typings/EventResponse'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `https://my-json-server.typicode.com/bassem97/VueJS-blog/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(): Promise<EventResponse> {
    return axiosInstance.get('/events')
  },
  getEvent(id: number): Promise<EventResponse> {
    return axiosInstance.get(`/events/${id}`)
  }
}
