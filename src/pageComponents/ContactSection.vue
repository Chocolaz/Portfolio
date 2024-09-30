<template>
  <section id="contact" class="py-16 px-5 bg-porsche-black">
    <div class="container mx-auto">
      <h2
        class="text-4xl font-bold text-center mb-12 text-porsche-silver neon-effect"
      >
        Contact Me
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in contactInfo"
          :key="index"
          class="bg-porsche-darkgray p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out card-gradient shadow-custom"
        >
          <div class="flex items-center mb-4">
            <component :is="item.icon" class="w-8 h-8 text-porsche-red mr-3" />
            <h3 class="text-xl font-semibold text-porsche-silver">
              {{ item.title }}
            </h3>
          </div>
          <p class="text-gray-300">
            <a
              v-if="item.link"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-porsche-red hover:text-white neon-effect"
            >
              {{ item.content }}
            </a>
            <template v-else>{{ item.content }}</template>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { MapPin, Phone, Mail, Github, Linkedin } from 'lucide-vue-next'

const contactInfo = ref([
  {
    icon: MapPin,
    title: 'Address',
    content: '23 Putthabucha 40 ThungKru Bangkok 10140'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+66 910143426',
    link: 'tel:+66910143426'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'sirakancard@gmail.com',
    link: 'mailto:sirakancard@gmail.com'
  },
  {
    icon: Github,
    title: 'Github',
    content: 'github.com/Chocolaz',
    link: 'https://github.com/Chocolaz'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    content: 'LinkedIn Profile',
    link: 'https://www.linkedin.com/in/sirakran-kranjanawilasgul-89579a326/'
  }
])
</script>

<style scoped>
h2 {
  font-family: 'Audiowide', sans-serif;
}

.neon-effect {
  transition: all 0.3s ease;
}
.neon-effect:hover {
  text-shadow: 0 0 10px rgba(213, 0, 28, 0.8), 0 0 20px rgba(213, 0, 28, 0.6),
    0 0 30px rgba(213, 0, 28, 0.4), 0 0 40px rgba(213, 0, 28, 0.2);
}

.card-gradient {
  background: linear-gradient(145deg, #212123, #1a1919);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.shadow-custom {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.297), 0 5px 10px rgba(0, 0, 0, 0.123); 
}
</style>
