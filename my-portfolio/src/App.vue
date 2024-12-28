<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="layout">
    <Sidebar class="sidebar" />
    <div class="main-content">
      <nav class="topbar">
        <RouterLink to="/">About Me</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/resume">Resume</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .sidebar {
    position: fixed;
    top: 0px; /* Adjust based on topbar height */
    left: 0;
    width: 300px;
    padding: 1rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center content horizontally */
  }
  
  .content {
    justify-content: center;
    margin: 80px 0 0 220px; /* Adjust based on topbar and sidebar width */
    padding: 1rem;
  }

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.topbar {
  width: 100%;
  font-size: 12px;
  text-align: center; /* Center items */
  margin-top: 2rem;
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
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .topbar {
    text-align: center; /* Center items */
    margin-left: 0;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 0;
  }

  .sidebar {
    top: 80px; /* Adjust based on topbar height */
    height: calc(100vh - 80px); /* Adjust based on topbar height */
    align-items: center; /* Center content horizontally */
  }

  .content {
    margin: 100px 0 0 220px; /* Adjust based on topbar and sidebar width */
  }
}
</style>
