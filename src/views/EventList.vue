<script lang="ts">
import EventCard from '@/components/EventCard.vue'
import { defineComponent, ref } from 'vue'
import { type Event } from '@/typings/Event'
import EventService from '@/services/EventService'
import type EventResponse from '@/typings/EventResponse'

export default defineComponent({
  name: 'EventList',
  components: { EventCard },
  setup() {
    const events = ref<Event[]>([])

    EventService.getEvents().then((response: EventResponse) => {
      events.value = response.data
    })

    return {
      events
    }
  }
})
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
