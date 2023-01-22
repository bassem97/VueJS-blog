import { defineStore } from 'pinia'
import type Todo from '@/typings/Todo'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: new Array<Todo>(),
    id: 0
  }),
  actions: {
    addTodo(todo: Todo) {
      this.todoList.push({ ...todo, id: this.id++, completed: false })
    },
    deleteTodoById(id: number) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id)
    },
    toggleCompleted(id: number) {
      const todo = this.todoList.find((todo) => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  },
  getters: {
    getTodoList(): Array<Todo> {
      return this.todoList
    },

    getTodoListLength(): number {
      return this.todoList.length
    }
  }
})
