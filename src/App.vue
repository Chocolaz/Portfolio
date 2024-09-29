<template>
  <div
    class="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans"
  >
    <Navbar />

    <main>
      <HomeSection :portfolio="portfolio" />
      <AboutSection :portfolio="portfolio" />

      <!-- Projects section -->
      <section id="projects" class="min-h-screen py-20">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-4xl font-bold mb-12 text-center text-porsche-red">
            Projects
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <ProjectCard
              v-for="project in portfolio.projects"
              :key="project.id"
              :project="project"
            />
          </div>
        </div>
      </section>

      <ContactSection />
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
import ContactSection from './pageComponents/ContactSection.vue'

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
    },
    {
      id: 4,
      title: 'KANBAN',
      description:
        'Real-time collaborative coding environment for remote pair programming and code reviews.',
      technologies: ['Vue.js', 'Socket.io', 'Express'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'KANBAN',
      description:
        'Real-time collaborative coding environment for remote pair programming and code reviews.',
      technologies: ['Vue.js', 'Socket.io', 'Express'],
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

.text-porsche-red {
  color: #d5001c;
}

.bg-porsche-red {
  background-color: #d5001c;
}

.from-gray-900 {
  --tw-gradient-from: #111827;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgb(17 24 39 / 0));
}

.to-black {
  --tw-gradient-to: #000000;
}
</style>
