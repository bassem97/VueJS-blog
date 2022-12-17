<script lang="ts">
import { defineComponent } from 'vue'
import EventService from '@/services/EventService'
import type { Event } from '@/typings/Event'
import EventResponse from '@/typings/EventResponse'

export default defineComponent({
  props: ['id'],
  data() {
    return {
      event: null as Event | null
    }
  },
  created() {
    EventService.getEvent(this.id).then((response: EventResponse) => {
      this.event = response.data
    })
  }
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
