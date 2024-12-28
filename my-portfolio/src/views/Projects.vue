<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    title: 'Project One',
    description: 'Description for project one.',
    technologies: ['Vue', 'JavaScript', 'CSS']
  },
  {
    title: 'Project Two',
    description: 'Description for project two.',
    technologies: ['React', 'JavaScript', 'HTML']
  },
  // Add more projects as needed
]);
</script>

<template>
  <main>
    <div class="placeholder">Welcome to my portfolio!</div>
    <section>
      <h1>My Projects</h1>
      <ul>
        <li v-for="project in projects" :key="project.title">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <p><strong>Technologies:</strong> {{ project.technologies.join(', ') }}</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
main {
  padding: 20px;
}

.placeholder {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #555;
}

section {
  margin-top: 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5em;
  margin-top: 10px;
}

p {
  margin: 5px 0;
}
</style>
