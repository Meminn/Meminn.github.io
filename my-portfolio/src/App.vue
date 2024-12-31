<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import Sidebar from './components/Sidebar.vue';

const route = useRoute();

// Extract the dynamic role base path (e.g., "/b" or "/ds")
import { computed } from 'vue';

const basePath = computed(() => {
  const pathSegment = route.path.split('/')[1];
  return pathSegment ? (['ds', 'b', 'f', 'de', 'fs'].includes(pathSegment) ? `/${pathSegment}` : '/ds') : '/ds';
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
.main-content, .content {
  position: absolute;
  top: 0;
  left: 200px;
  right: 0;
  bottom: 0;
  width: calc(100% - 200px);
  overflow-y: auto;
}

.sidebar {
  position: absolute;
  top: 10px;
  left: 0;
  height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  background-color: var(--vt-c-black-soft);
}

.topbar {
  width: 100%;
  font-size: 18px;
  height: 75px;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--vt-c-black);
  z-index: 10;
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
  border-left: 1px solid var(--color-text);
}

.topbar a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .sidebar {
    top: 0px;
    align-items: center;
  }

  .main-content{
    top: 75px;
    left: 200px;
    right: 0;
    bottom: 0;
  }
}
</style>
