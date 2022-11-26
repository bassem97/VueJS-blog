<script lang="ts">
import { ref, defineComponent } from 'vue'
import type Todo from '@/typings/Todo'
import { useTodoListStore } from '@/stores/todoList'

export default defineComponent({
  name: 'TodoForm',
  setup() {
    const todo = ref<Todo>({
      title: ''
    })

    const todoStore = ref(useTodoListStore())

    const addTodoAndClear = (todo: Todo) => {
      if (!todo.title) return
      todoStore.value.addTodo(todo)
      todo.title = ''
    }

    return {
      todo,
      addTodoAndClear
    }
  }
})
</script>

<template>
  <div>
    <form action="" @submit.prevent="addTodoAndClear(todo)">
      <input type="text" v-model="todo.title" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<style scoped></style>
