<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg bg-black"
  >
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-silver font-bold text-2xl tracking-wider uppercase">
        Sirakran<span class="text-dmc-primary">K.</span>
      </div>

      <!-- Hamburger Icon for Mobile -->
      <button
        class="md:hidden block text-silver focus:outline-none"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <!-- Navigation Links -->
      <ul
        :class="[
          'md:flex md:space-x-8 md:items-center',
          menuOpen ? 'block' : 'hidden'
        ]"
        class="absolute md:relative bg-porsche-black opacity-90 top-full left-0 w-full md:w-auto md:bg-transparent transition-all"
      >
        <li v-for="section in sections" :key="section" class="md:inline-block">
          <a
            :href="`#${section.toLowerCase()}`"
            class="block text-base text-silver font-medium tracking-wider transition-all duration-300 relative group px-4 py-2 md:py-0"
          >
            <span class="group-hover:text-dmc-primary neon-effect">{{
              section
            }}</span>
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

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
header {
  font-family: 'Audiowide', sans-serif;
}

.text-dmc-primary {
  color: #dc0000;
}

.text-gold {
  color: gold;
}

a {
  text-shadow: none;
  position: relative;
  transition: transform 0.3s ease, color 0.3s ease;
}

a:hover {
  transform: translateY(-3px);
}

.group:hover span {
  color: #dc0000;
}

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
  background-color: gold;
  transition: width 0.3s ease;
}

a:hover::before {
  width: 100%;
}

nav {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

@media (min-width: 768px) {
  nav {
    padding: 1rem 2rem;
  }
}

ul.hidden {
  display: none;
}

ul.block {
  display: block;
}

@media (min-width: 768px) {
  ul {
    display: flex !important;
  }
}
</style>
