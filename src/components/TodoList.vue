<script lang="ts">
import { useTodoListStore } from '@/stores/todoList'
import { storeToRefs } from 'pinia'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TodoList',
  setup() {
    const todoStore = ref(useTodoListStore())
    const { todoList } = storeToRefs(todoStore.value)
    const { toggleCompleted, deleteTodoById } = todoStore.value

    return {
      todoList,
      toggleCompleted,
      deleteTodoById
    }
  }
})
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" class="todo">
    <h2 :class="{ completed: todo.completed }">{{ todo.title }}</h2>
    <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
    <span @click.stop="deleteTodoById(todo.id)">&#10060;</span>
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
  margin-top: 18px;
  background-color: #f7f9fa;
}

span {
  margin: 0 10px;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
}
</style>
