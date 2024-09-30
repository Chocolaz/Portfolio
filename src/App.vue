<template>
  <div
    class="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans"
  >
    <Navbar />

    <main>
      <HomeSection :portfolio="portfolio" />
      <AboutSection :portfolio="portfolio" />

      <ProjectsSection :portfolio="portfolio" />

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
import ProjectsSection from './pageComponents/ProjectsSection.vue'
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
      title: 'KANBAN Task Board',
      description:
        ' Task management platform with dynamic components for task creation, deletion, status changes, and board transfers. Secure API requests using token-based authentication. Responsive design for a seamless user experience.',
      technologies: [
        'Vue.js',
        'HTML',
        'CSS',
        'JavaScript',
        'Git',
        'MySQL',
        'Java',
        'Spring Boot',
        'Docker'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Fitcheck',
      description:
        'A comprehensive health app that helps you track workouts, nutrition, and set personalized goals with interactive features and personalized support to keep you motivated and achieve your fitness objectives.',
      technologies: [
        'Figma',
        'Design Thinking',
        'User Journey',
        'User-Centered Design'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Waste2Wheel',
      description:
        'Transforms your daily commute into a rewarding experience. Encourage sustainable habits like biking and recycling. Track your rides, and climb the leaderboard. With a user-friendly interface and personalized challenges.',
      technologies: [
        'Figma',
        'Design Thinking',
        'User Journey',
        'Business Analyst'
      ],
      image:
        'https://cdn.discordapp.com/attachments/1021065006953013339/1290184487128272948/image.png?ex=66fb8970&is=66fa37f0&hm=64ae508b12ee197b6e8bd53b7fb2c6d4e0262ef28cf7c537056cb0c1928f7429&'
    },
    {
      id: 4,
      title: 'Korean Piano',
      description:
        'An interactive web application blending the traditional sounds of the classic piano with modern electronic piano features, focusing on sound handling in frontend development.',
      technologies: ['Vue.js', 'Figma', 'HTML', 'CSS', 'JavaScript', 'Git'],
      image:
        'https://media.discordapp.net/attachments/1021065006953013339/1290185452007063552/image.png?ex=66fb8a56&is=66fa38d6&hm=b1b0411574d503bba25678d757fc81bedd1afaf937d9f7a8a0d1f66034d56a8e&=&format=webp&quality=lossless&width=714&height=525'
    },
    {
      id: 3,
      title: 'PC Spec Builder CRUD',
      description:
        'CRUD web app for building custom computer specifications. Dynamic data fetching, responsive UI, and admin tools for product management, PC rankings, and article browsing.',
      technologies: ['Vue.js', 'Figma', 'HTML', 'CSS', 'JavaScript', 'Git'],
      image:
        'https://cdn.discordapp.com/attachments/1021065006953013339/1290186098751836200/image.png?ex=66fb8af0&is=66fa3970&hm=f1b70ae7973d2f6a85783b19a03a9b7a56f9794c3a73a286fdf44c7c64748ea2&'
    },
    {
      id: 3,
      title: 'Punktify MP3 Player',
      description:
        'MP3 Player web app with responsive design. This app provides a user-friendly interface for playing MP3 files and enjoying music seamlessly across various devices.',
      technologies: ['Vue.js', 'Figma', 'HTML', 'CSS', 'JavaScript', 'Git'],
      image:
        'https://cdn.discordapp.com/attachments/1021065006953013339/1290183474400985130/image.png?ex=66fb887e&is=66fa36fe&hm=49836efff2d7aee3dca5e8aca7b82e9b7dfb1899bf0d1d414a9e09f6381796a8&'
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
