<script lang="ts">
import EventCard from '@/components/EventCard.vue'
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import { type Event } from '@/typings/Event'
import EventService from '@/services/EventService'
import type EventResponse from '@/typings/EventResponse'

export default defineComponent({
  name: 'EventList',
  components: { EventCard },
  setup() {
    const reactiveProps = reactive({
      events: [] as Event[]
    })

    onMounted(async () => {
      const response: EventResponse = await EventService.getEvents()
      reactiveProps.events = response.data
    })

    return {
      ...toRefs(reactiveProps)
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
