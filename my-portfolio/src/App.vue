<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import Sidebar from './components/Sidebar.vue';

const route = useRoute();

// Extract the dynamic role base path (e.g., "/b" or "/ds")
import { computed } from 'vue';

const basePath = computed(() => {
  const pathSegment = route.path.split('/')[1];
  return ['b', 'f', 'de', 'ds'].includes(pathSegment) ? `/${pathSegment}` : '/b';
});
</script>

<template>
  <div class="layout">
    <Sidebar class="sidebar" />
    <div class="main-content">
      <nav class="topbar">
        <!-- Use dynamic basePath for navigation -->
        <RouterLink :to="basePath">About Me</RouterLink>
        <RouterLink :to="`${basePath}/projects`">Projects</RouterLink>
        <RouterLink :to="`${basePath}/contact`">Contact</RouterLink>
      </nav>
      
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  position: fixed;
  top: 80px;
  left: 300px;
  right: 0;
  bottom: 0;
  width: calc(100% - 200px);
  overflow-y: auto;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  background-color: var(--color-background);
}

.topbar {
  width: 100%;
  font-size: 18px;
  text-align: center;
  margin: 2rem auto 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.topbar a.router-link-exact-active {
  color: var(--color-text);
}

.topbar a.router-link-exact-active:hover {
  background-color: transparent;
}

.topbar a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.topbar a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .sidebar {
    top: 80px;
    height: calc(100vh - 80px);
    align-items: center;
  }

  .content {
    margin: 0px 0 0 00px;
  }
}
</style>
