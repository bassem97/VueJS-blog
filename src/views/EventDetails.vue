<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import EventService from '@/services/EventService'
import type { Event } from '@/typings/Event'
import EventResponse from '@/typings/EventResponse'

export default defineComponent({
  props: ['id'],
  setup(props) {
    const event = ref<Event | undefined>(undefined)

    onMounted(async () => {
      const response: EventResponse = await EventService.getEvent(props.id)
      event.value = response.data
    })

    return {
      event
    }
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
