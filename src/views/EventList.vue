<script lang="ts">
import EventCard from '@/components/EventCard.vue'
import { defineComponent, onMounted, ref } from 'vue'
import { type Event } from '@/typings/Event'
import EventService from '@/services/EventService'
import type EventResponse from '@/typings/EventResponse'

export default defineComponent({
  name: 'EventList',
  components: { EventCard },
  data() {
    return {
      events: [] as Event[]
    }
  },
  created() {
    EventService.getEvents().then((response: EventResponse) => {
      this.events = response.data
    })
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
