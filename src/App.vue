<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <Navbar />

    <main>
      <HomeSection :portfolio="portfolio" />
      <AboutSection :portfolio="portfolio" />

      <!-- Projects section -->
      <section id="projects" class="min-h-screen py-20">
        <div class="max-w-4xl mx-auto px-6">
          <h2 class="text-3xl font-bold mb-12 text-center text-neon-pink">
            Projects
          </h2>
          <div class="grid gap-12">
            <ProjectCard
              v-for="project in portfolio.projects"
              :key="project.id"
              :project="project"
            />
          </div>
        </div>
      </section>

      <!-- Contact section -->
      <section
        id="contact"
        class="min-h-screen flex items-center justify-center py-20"
      >
        <div class="max-w-md mx-auto px-6">
          <h2 class="text-3xl font-bold mb-8 text-center text-neon-pink">
            Contact Me
          </h2>
        </div>
      </section>
    </main>

    <footer class="bg-gray-800 py-6 text-center text-gray-400">
      <p>
        &copy; {{ new Date().getFullYear() }} {{ portfolio.name }}. All rights
        reserved.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import ProjectCard from './components/ProjectCard.vue'
import HomeSection from './pageComponents/HomeSection.vue'
import AboutSection from './pageComponents/AboutSection.vue'

const portfolio = ref({
  fname: 'Sirakran',
  lname: 'K.',
  title: 'UI/UX Enthusiast & FrontEnd Developer',
  skills: [
    'UX/UI design',
    'Figma',
    'HTML',
    'CSS',
    'JavaScript',
    'Vue.js',
    'React',
    'Java',
    'Spring Boot',
    'MySQL',
    'MongoDB',
    'Nginx',
    'Docker',
    'Git'
  ],
  projects: [
    {
      id: 1,
      title: 'Waste2Wheel',
      description:
        'A sustainability app helping users reduce their carbon footprint through daily challenges and community engagement.',
      technologies: ['Vue.js', 'Node.js', 'MongoDB'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Fitcheck',
      description:
        'A meditation and mindfulness platform featuring guided sessions and progress tracking.',
      technologies: ['React', 'Express', 'PostgreSQL'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'KANBAN',
      description:
        'Real-time collaborative coding environment for remote pair programming and code reviews.',
      technologies: ['Vue.js', 'Socket.io', 'Express'],
      image: '/api/placeholder/400/300'
    }
  ]
})
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

html {
  scroll-behavior: smooth;
}
</style>
