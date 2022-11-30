<script>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TodoView',
  components: { TodoList, TodoForm }
})
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
