<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoList'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const todoStore = ref(useTodoListStore())
const { todoList } = storeToRefs(todoStore.value)
const { toggleCompleted } = todoStore.value
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" class="todo">
    <h2 :class="{ completed: todo.completed }">{{ todo.title }}</h2>
    <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
  </div>
</template>

<style scoped>
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.completed {
  text-decoration: line-through;
}
</style>
