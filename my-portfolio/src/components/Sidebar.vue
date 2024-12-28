<template>
  <aside class="sidebar">
    <img :src="profilePhoto" alt="Profile Photo" class="photo"/>
    <h1>{{ name }}</h1>
    <div class="contact-info">
      <p>Email: <a :href="`mailto:${email}`">{{ email }}</a></p>
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
    };
  },
};
</script>

<style>
.photo {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
</style>
