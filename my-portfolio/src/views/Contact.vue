<template>
  <form @submit.prevent="sendEmail" class="contact-form">
    <label for="subject">Subject:</label>
    <input type="text" id="subject" v-model="form.subject" required />
    
    <label for="email">Your Email:</label>
    <input type="email" id="email" v-model="form.email" required />
    
    <label for="message">Message:</label>
    <textarea id="message" v-model="form.message" required></textarea>
    
    <button type="submit">Send</button>
  </form>
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
.contact-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #2c2c2c;
  position: absolute;
  top: 50%;
  left: 37%;
  transform: translate(-50%, -50%);
}

.contact-form label {
  color:#c9c9c9;
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #6c6c6c;
  border-radius: 5px;
  background-color:#3f3f3f;
  color:#c9c9c9;
}

.contact-form button {
  display: inline-block;
  padding: 10px 20px;
  color: #c9c9c9;
  background-color: #191919;
  border: #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #404040;
}
</style>
