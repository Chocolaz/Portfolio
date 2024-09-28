<!-- components/ProjectCard.vue -->
<template>
  <div
    class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
  >
    <img
      :src="project.image"
      :alt="project.title"
      class="w-full h-48 object-cover"
    />
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2 text-neon-blue">
        {{ project.title }}
      </h3>
      <p class="text-gray-300 mb-4">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="bg-gray-700 text-xs text-neon-pink px-2 py-1 rounded"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

