<template>
  <aside class="sidebar">
    <img :src="profilePhoto" alt="Profile Photo" class="profile-photo" />
    <h1>{{ name }}</h1>
    <ul>
      <li><router-link to="/">About Me</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/resume">Resume</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <div class="contact-info">
      <p>Email: <a :href="`mailto:${email}`">{{ email }}</a></p>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      name: "Mehmet Emin Bayrak",
      profilePhoto: "/assets/me.jpg",
      email: "mehmet@example.com",
    };
  },
};
</script>
