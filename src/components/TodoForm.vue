<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import type Todo from '@/typings/Todo'
import { useTodoListStore } from '@/stores/todoList'

export default defineComponent({
  name: 'TodoForm',
  setup() {
    const todoStore = useTodoListStore()
    const addTodoAndClear = (todo: Todo) => {
      if (!todo.title) return
      todoStore.addTodo(todo)
      todo.title = ''
    }
    const reactiveProps = reactive({
      todo: {
        title: ''
      },
      addTodoAndClear
    })

    return {
      ...reactiveProps
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
