<template>
  <section
    id="about"
    class="min-h-screen flex items-center justify-center py-20 bg-porsche-black"
  >
    <div class="max-w-4xl mx-auto px-6 relative">
      <div
        class="absolute top-0 left-0 w-20 h-1 bg-porsche-red transform -translate-x-10"
      ></div>
      <h2
        class="text-5xl font-bold mb-12 text-left animate-fade-in text-porsche-silver"
      >
        About Me
      </h2>
      <p
        class="text-porsche-silver leading-relaxed mb-10 animate-fade-in text-lg"
      >
        {{ portfolio.about }}
      </p>
      <div class="flex flex-wrap justify-start gap-4 mb-10">
        <span
          v-for="skill in portfolio.skills"
          :key="skill"
          class="bg-porsche-darkgray text-porsche-silver px-6 py-3 rounded-full text-sm font-medium shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-porsche-red hover:text-white futuristic-button neon-effect"
        >
          {{ skill }}
        </span>
      </div>
      <div
        class="w-full h-1 bg-gradient-to-r from-porsche-red via-porsche-silver to-porsche-black"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  portfolio: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Define your colors directly */
.bg-porsche-black {
  background-color: #191919;
}

.bg-porsche-red {
  background-color: #d5001c;
}

.text-porsche-silver {
  color: #e5e5e5;
}

.bg-porsche-darkgray {
  background-color: #2a2a2a;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.futuristic-button {
  position: relative;
  overflow: hidden;
}

.futuristic-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  transform: translateY(-50%) rotate(45deg);
  transition: all 0.3s ease;
  opacity: 0;
}

.futuristic-button:hover::before {
  opacity: 1;
  transform: translateY(0) rotate(45deg);
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient-shift 5s ease infinite;
}

/* Neon text styling */
.neon-effect {
  color: #fff;
  text-shadow: 0 0 5px rgba(255, 0, 0, 0.8), 0 0 10px rgba(255, 0, 0, 0.6),
    0 0 15px rgba(255, 0, 0, 0.4), 0 0 20px rgba(255, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.neon-effect:hover {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4),
    0 0 40px gold;
}
</style>
