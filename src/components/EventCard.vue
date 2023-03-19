<script setup lang="ts">
import type { Event } from '@/typings/Event'

interface Props {
  event: Event
}

const props = defineProps<Props>()
console.log(props.event)
</script>

<template>
  <div class="event-card">
    <!--    Display event data-->
    <h2>{{ event.title }}</h2>
    <span>@{{ event.time }} on {{ event.date }}</span>
  </div>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
}
</style>
