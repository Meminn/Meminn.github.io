<template>
  <div class="about">
    <h1>About Me</h1>
    <p>This is the About Me page.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>