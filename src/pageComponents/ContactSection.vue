<template>
  <section
    id="contact"
    class="min-h-screen flex items-center justify-center py-20 bg-gradient-to-r from-gray-900 to-black"
  >
    <div class="max-w-md w-full mx-auto px-6">
      <h2 class="text-4xl font-bold mb-8 text-center text-porsche-red">
        Contact Me
      </h2>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-300"
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="name"
            required
            class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-porsche-red"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-300"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-porsche-red"
          />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-300"
            >Message</label
          >
          <textarea
            id="message"
            v-model="message"
            rows="4"
            required
            class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-porsche-red"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            class="w-full px-4 py-2 bg-porsche-red text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-porsche-red transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  console.log('Form submitted:', {
    name: name.value,
    email: email.value,
    message: message.value
  })
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<style scoped>
.text-porsche-red {
  color: #d5001c;
}

.bg-porsche-red {
  background-color: #d5001c;
}

.focus\:ring-porsche-red:focus {
  --tw-ring-color: #d5001c;
}
</style>
