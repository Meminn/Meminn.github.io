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
  
