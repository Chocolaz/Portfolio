<template>
  <section
    id="projects"
    class="min-h-screen py-20 bg-porsche-black relative overflow-hidden"
  >
    <!-- Motion Gradient Background -->
    <div class="absolute inset-0 bg-gradient-animated opacity-50"></div>

    <!-- Pattern Overlay -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div
        class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CiAgPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0NDQ0NDQiIHN0cm9rZS13aWR0aD0iMSIgLz4KPC9zdmc+')] bg-repeat"
      ></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-6">
      <h2
        class="text-4xl font-bold font-audiowide mb-12 text-center text-porsche-silver neon-effect"
      >
        Projects
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <ProjectCard
          v-for="project in portfolio.projects"
          :key="project.id"
          :project="project"
          class="hover:scale-105 transform transition-transform duration-300"
        />
      </div>
    </div>

    <!-- Infinite Animated Gradient Border -->
    <div class="absolute bottom-0 left-0 w-full h-1 gradient-border"></div>
  </section>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { defineProps } from 'vue'

const props = defineProps({
  portfolio: Object
})
</script>

<style scoped>
/* Neon effect for headings */
.neon-effect {
  transition: all 0.3s ease;
}
.neon-effect:hover {
  text-shadow: 0 0 10px rgba(213, 0, 28, 0.8), 0 0 20px rgba(213, 0, 28, 0.6),
    0 0 30px rgba(213, 0, 28, 0.4), 0 0 40px rgba(213, 0, 28, 0.2);
}

@keyframes gradientAnimation {
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

/* Infinite animated gradient border */
.gradient-border {
  background: linear-gradient(
    to right,
    #c0c0c0,
    #ff0000,
    #1a1a1a,
    #c0c0c0,
    #ff0000
  );
  background-size: 300% 100%;
  animation: gradientShift 10s linear infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
