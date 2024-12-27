 <template>
  <form @submit.prevent="sendEmail">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="form.name" required />
    
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="form.email" required />
    
    <label for="message">Message:</label>
    <textarea id="message" v-model="form.message" required></textarea>
    
    <button type="submit">Send</button>
  </form>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      form: { name: '', email: '', message: '' },
    };
  },
  methods: {
    sendEmail() {
      emailjs.send('service_id', 'template_id', this.form, 'user_id')
        .then(response => alert('Message Sent!'))
        .catch(error => alert('Failed to send message.'));
    },
  },
};
</script>
