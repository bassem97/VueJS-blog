<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import type Route from '@/typings/Route'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: { RouterLink, RouterView },
  setup() {
    const routes: Route[] = [
      {
        label: 'Events',
        name: 'event-list'
      },
      {
        label: 'About',
        name: 'about'
      },
      {
        label: 'Todos',
        name: 'todos'
      }
    ]

    return {
      routes
    }
  }
})
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink v-for="(route, index) in routes" :key="index" :to="{ name: route.name }">
            {{ route.label }} {{ index !== routes.length - 1 ? ' | ' : '' }}
          </RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}
</style>
