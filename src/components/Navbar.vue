<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg"
  >
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-silver font-bold text-2xl tracking-wider uppercase">
        Sirakran<span class="text-dmc-primary">K.</span>
      </div>
      <ul class="flex space-x-8">
        <li v-for="section in sections" :key="section">
          <a
            :href="`#${section.toLowerCase()}`"
            class="text-base text-silver font-medium tracking-wider transition-all duration-300 relative group"
          >
            <span class="group-hover:text-dmc-primary">{{ section }}</span>
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            ></span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const sections = ref(['Home', 'About', 'Projects', 'Contact'])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

header {
  font-family: 'Audiowide', sans-serif;
}

/* Color adjustments for Porsche design */
.text-dmc-primary {
  color: #dc0000; /* Primary red color */
}

.text-gold {
  color: gold; /* Gold color for accents */
}

/* Link styling */
a {
  text-shadow: none;
  position: relative;
  transition: transform 0.3s ease, color 0.3s ease;
}

a:hover {
  transform: translateY(-3px);
}

/* Hover effect for link text */
.group:hover span {
  color: #dc0000; /* Change text color to primary red on hover */
}

/* Hover line effect */
a span {
  transition: color 0.3s ease;
}

a::before {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: gold; /* Gold line */
  transition: width 0.3s ease;
}

a:hover::before {
  width: 100%;
}

/* Spacing and Layout */
nav {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border */
}

/* Responsive adjustments */
@media (min-width: 768px) {
  nav {
    padding: 1rem 2rem;
  }
}
</style>
