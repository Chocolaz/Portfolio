<!-- components/ProjectCard.vue -->
<template>
  <div
    class="relative bg-gradient-to-br from-[#333333] to-[#1a1a1a] rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
    style="height: 420px; width: 320px"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
    <img
      :src="project.image || '/api/placeholder/300/200'"
      :alt="project.title"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div
      class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#333333] to-transparent z-20"
    ></div>
    <div class="absolute inset-0 flex flex-col justify-end p-6 z-30">
      <h3 class="text-xl font-bold mb-2 text-porsche-silver font-['Audiowide']">
        {{ project.title }}
      </h3>
      <p
        class="text-gray-300 text-sm mb-4 line-clamp-2 transition-all duration-300 group-hover:line-clamp-none"
      >
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="bg-porsche-red text-xs text-white px-2 py-1 rounded-full transition-all duration-300 hover:bg-porsche-black"
        >
          {{ tech }}
        </span>
      </div>
      <button
        class="neon-effect bg-porsche-darkgray text-sm text-porsche-silver py-2 px-4 rounded-full transition-all duration-300 hover:bg-porsche-red hover:text-white flex items-center justify-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-alert-circle"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        Learn More
      </button>
    </div>
    <div
      :class="[
        'absolute inset-0 border-2 border-porsche-red rounded-lg transition-all duration-300',
        { 'opacity-100': isHovered, 'opacity-0': !isHovered }
      ]"
      :style="{
        boxShadow: isHovered
          ? '0 0 10px rgba(213, 0, 28, 0.5), 0 0 20px rgba(213, 0, 28, 0.3), 0 0 30px rgba(213, 0, 28, 0.1)'
          : 'none'
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const isHovered = ref(false)
</script>

<style scoped></style>
