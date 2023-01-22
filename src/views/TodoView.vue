<script>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'TodoView',
  components: { TodoList, TodoForm },
  setup() {
    return {
      // event
    }
  }
}
</script>

<template>
  <div class="todo">
    <h1>Todo List</h1>
    <TodoForm />
    <TodoList />
  </div>
</template>
