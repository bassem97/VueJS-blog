import type { Event } from '@/typings/Event'

export default interface EventResponse {
  data: Event | Event[] | null
}
