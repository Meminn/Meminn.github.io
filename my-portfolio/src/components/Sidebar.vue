<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <div class="profile-section">
        <img :src="profilePhoto" alt="Profile Photo" class="photo"/>
        <h1 style="text-align: center;">{{ name }}</h1>
        <h2 style="text-align: center;">{{ role }}</h2>
      </div>
      <div class="contact-info">

        <h2 style="font-weight: bold;">Contact Info</h2>

        <p><font-awesome-icon icon="phone" /> (+90) 505 720 81 34</p>
        <p><font-awesome-icon icon="envelope" /> <a :href="`mailto:${email}`">{{ email }}</a></p>

        <p><font-awesome-icon :icon="['fab', 'linkedin']" /> <a href="https://linkedin.com/in/mehmet-eminbayrak" target="_blank">linkedin.com/in/mehmet-eminbayrak</a></p>
        <p><font-awesome-icon :icon="['fab', 'github']" /> <a href="https://github.com/Meminn" target="_blank">github.com/Meminn</a></p>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const profilePhoto = '/assets/photo.jpg';  // Updated path

const name = "Mehmet Emin Bayrak";
const email = "meminbayrak55@gmail.com";

const role = computed(() => {
  const roleParam = route.path.split('/')[1]; // Get the second segment of the path
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
    return 'DATA SCIENTIST';
  }
});
</script>

<style>
/** .sidebar-content {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;
}
**/
/* .profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
} */

/* .photo {
  border-radius: 50%;
  width: 175px;
  height: 175px;
} */

/* h1 {
  font-weight: bold;
  font-size: 1.6rem;
  margin-top: 10px;
  color: var(--vt-c-text-dark-1);
} */

/* h2 {
  font-size: 1.2rem;
  color: var(--vt-c-text-dark-2);
} */

/* .contact-info {
  margin-top: 20px;
} */

/* .contact-info p {
  margin: 15px 0;
} */

/* .contact-info a {
  text-decoration: none;
} */

/* .contact-info a:hover {
  text-decoration: underline;
} */

/* .contact-info font-awesome-icon {
  margin-right: 10px;
} */

/* @media (max-width: 768px) {
  .sidebar-content {
    margin-top: 60px;
  }
} */
</style>
