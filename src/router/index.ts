import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import EventListView from '@/views/EventList.vue'
import EventDetailsView from '@/views/EventDetailsView.vue'
import TodoView from '@/views/TodoView.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '*',
  //   component: NotFoundView
  // },
  {
    path: '/',
    name: 'event-list',
    component: EventListView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/event/:id',
    name: 'event-details',
    props: true,
    component: EventDetailsView
  },
  {
    path: '/todos',
    name: 'todos',
    component: TodoView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
