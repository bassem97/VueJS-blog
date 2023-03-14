<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue'
import EventService from '@/services/EventService'
import type { Event } from '@/typings/Event'

interface Props {
  id: number
}

const props = defineProps<Props>()
const { id } = toRefs(props)
const event = ref<Event | null>(null)

onMounted(async () => {
  return EventService.getEvent(id.value)
    .then((response: any) => {
      console.log(response)
      event.value = response.data
      console.log(event)
    })
    .catch((error: any) => {
      console.error(error)
    })
})

// get ride of object is possibly undefined error
if (event.value === null) {
  event.value = null
}
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
