<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { onMounted, ref } from 'vue'
import { type Event } from '@/typings/Event'
import type { AxiosResponse } from 'axios'
import EventService from '@/services/EventService'

let events = ref<Event[] | null>(null)

interface EventResponse {
  data: Event[] | null
}

onMounted(async () => {
  return EventService.getEvents()
    .then((response: EventResponse) => {
      events.value = response.data
      console.log(events)
    })
    .catch((error: any) => {
      console.error(error)
    })
})

// get ride of object is possibly undefined error
if (events.value === null) {
  events.value = []
}
</script>

<template>
  <h1>Events for good</h1>

  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
