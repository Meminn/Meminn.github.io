<template>
  <div class="contact-container">
    <form @submit.prevent="sendEmail" class="contact-form">
      <label for="subject">Subject:</label>
      <input type="text" id="subject" v-model="form.subject" required />
      
      <label for="email">Your Email:</label>
      <input type="email" id="email" v-model="form.email" required />
      
      <label for="message">Message:</label>
      <textarea id="message" v-model="form.message" required></textarea>
      
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export default {
  data() {
    return {
      form: { subject: '', email: '', message: '' },
    };
  },
  methods: {
    sendEmail() {
      const templateParams = {
        subject: this.form.subject,
        email: this.form.email,
        message: this.form.message,
        to_email: 'meminbayrak55@gmail.com'
      };

      emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        USER_ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
        this.form.subject = '';
        this.form.email = '';
        this.form.message = '';
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send email. Please try again later.');
      });
    }
  }
};
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 95px); /* Topbar height'ı çıkardık */
  padding: 20px;
}

.contact-form {
  width: 100%;
  max-width: 600px;
  padding: 40px;
  border: 1px solid var(--vt-c-divider-dark-1);
  border-radius: 10px;
  background-color: var(--vt-c-black-soft);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-form label {
  display: block;
  margin-bottom: 8px;
  color: var(--vt-c-text-dark-1);
  font-weight: bold;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid var(--vt-c-divider-dark-2);
  border-radius: 5px;
  background-color: var(--vt-c-black-mute);
  color: var(--vt-c-text-dark-1);
  font-size: 16px;
}

.contact-form textarea {
  min-height: 150px;
  resize: vertical;
}

.contact-form button {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--vt-c-black);
  color: var(--vt-c-text-dark-1);
  border: 1px solid var(--vt-c-divider-dark-1);
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.contact-form button:hover {
  background-color: var(--vt-c-black-mute);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .contact-form {
    padding: 20px;
    margin: 10px;
  }
}
</style>
