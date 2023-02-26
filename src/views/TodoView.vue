<script>
import TodoForm from '@/components/TodoForm.vue'

export default {
  name: 'TodoView',
  components: { TodoForm },
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
    <!--   <TodoList/>-->
  </div>
</template>
