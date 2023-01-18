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

<style scoped>
.todo {
  padding: 5vh;
  min-height: 100vh;
  width: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
