<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import { ref, computed } from 'vue';

const route = useRoute();
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Extract the dynamic role base path (e.g., "/b" or "/ds")
const basePath = computed(() => {
  const pathSegment = route.path.split('/')[1];
  return pathSegment ? (['ds', 'b', 'f', 'de', 'fs'].includes(pathSegment) ? `/${pathSegment}` : '/ds') : '/ds';
});
</script>

<template>
  <button class="sidebar-toggle" @click="toggleSidebar">
    <font-awesome-icon :icon="['fas', 'bars']" />
  </button>
  
  <Sidebar 
    class="sidebar" 
    :class="{ 'sidebar-open': isSidebarOpen }"
    @close="isSidebarOpen = false"
  />
  
  <div class="content">  
    <nav class="topbar">
      <RouterLink :to="basePath">About Me</RouterLink>
      <RouterLink :to="`${basePath}/projects`">Projects</RouterLink>
      <RouterLink :to="`${basePath}/contact`">Contact</RouterLink>
    </nav>
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.sidebar-toggle {
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  background: var(--vt-c-black);
  border: none;
  color: var(--vt-c-text-dark-1);
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  width: 40px;
  height: 40px;
}

.content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 400px; /* Sidebar genişliği */
  min-height: 100vh;
  box-sizing: border-box;
}

.main-content {
  padding: 95px 40px 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 400px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  background-color: var(--vt-c-black-soft);
  transition: transform 0.3s ease;
}

.topbar {
  width: 100%;
  font-size: 18px;
  height: 75px;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
  position: fixed;
  top: 0;
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

@media (max-width: 1154px) {
  .sidebar-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sidebar {
    transform: translateX(-100%);
    width: 300px;
  }

  .sidebar.sidebar-open {
    transform: translateX(0);
  }

  .content {
    left: 0;
  }

  .main-content {
    padding: 95px 20px 20px;
  }

  .topbar {
    width: 100%;
    padding-left: 60px;
  }
}
</style>