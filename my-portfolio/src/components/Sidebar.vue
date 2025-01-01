<template>
  <aside class="sidebar">
    <img :src="profilePhoto" alt="Profile Photo" class="photo"/>
    <h1>{{ name }}</h1>
    <h2>{{ role }}</h2>
    <div class="contact-info">
      <h2>Contact Info</h2>
      <p><font-awesome-icon icon="phone" /> (+90) 505 720 81 34</p>
      <p><font-awesome-icon icon="envelope" /> <a :href="`mailto:${email}`">{{ email }}</a></p>
      <p><font-awesome-icon :icon="['fab', 'linkedin']" /> <a href="https://linkedin.com/in/mehmet-eminbayrak" target="_blank">linkedin.com/in/mehmet-eminbayrak</a></p>
      <p><font-awesome-icon :icon="['fab', 'github']" />   <a href="https://github.com/Meminn" target="_blank">github.com/Meminn</a></p>  
    </div>
  </aside>
</template>

<script>
import profilePhoto from '@/assets/photo.jpg';

export default {
  data() {
    return {
      name: "Mehmet Emin Bayrak",
      profilePhoto,
      email: "meminbayrak55@gmail.com",
      role: this.getRoleFromUrl(),
    };
  },
  methods: {
    getRoleFromUrl() {
      const path = window.location.pathname;
      const segments = path.split('/');
      const roleParam = segments[2]; // Get the segment between the first and last slash
      if (roleParam === 'b') {
        return 'BACKEND DEVELOPER';
      } else if (roleParam === 'ds') {
        return 'DATA SCIENTIST';
      } else if (roleParam === 'de') {
        return 'DATA ENGINEER';
      } else if (roleParam === 'fs') {
        return 'FULL-STACK DEVELOPER'; 
      } else if (roleParam === 'fe') {
        return 'FRONTEND DEVELOPER'; 
      } else if (roleParam === 'a') {
        return 'ANDROID DEVELOPER';
      } else {
        return roleParam;
      }
    },
  },
};
</script>

<style>
.photo {
  border-radius: 50%;
  width: 175px;
  height: 175px;
}

h1 {
  font-weight: bold;
  font-size: 1.6rem;
  margin-top: 10px;
  color: var(--vt-c-text-dark-1);
}

h2 {
  font-size: 1.2rem;
  color: var(--vt-c-text-dark-2);
} 
.contact-info {
  margin-top: 20px;
}
.contact-info p {
  margin: 15px 0;
}

.contact-info a {
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.contact-info font-awesome-icon {
  margin-right: 10px;
}
</style>
