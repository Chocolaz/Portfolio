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

    <footer class="bg-gradient-animated py-6 text-center text-gray-400">
      <p>
        &copy; {{ new Date().getFullYear() }}
        {{ portfolio.fname + portfolio.lname }} All rights reserved.
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
        ' Task management platform with dynamic components for task and status CRUD, and board transfers. Secure API requests and multi user using token-based authentication. Responsive design for a seamless user experience.',
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
      image:
        'https://media.discordapp.net/attachments/1021065006953013339/1290448206974423050/image.png?ex=66fc7f0b&is=66fb2d8b&hm=bb6a6db0c18dcc4cecdc1b46d85c9b2e51eacdc9253d657c4a863db6c72b10ea&=&format=webp&quality=lossless&width=592&height=655',
      link: 'https://github.com/Chocolaz/INT221-KW-3-KANBAN'
    },
    {
      id: 2,
      title: 'Manga Heaven',
      description:
        'Manga Heaven is a vibrant online platform designed to bring togethermanga enthusiasts from around the world. Discover a vast collection ofmanga from talented writers and artists, all in one convenient place.',
      technologies: [
        'Figma',
        'Design Thinking',
        'User Journey',
        'User-Centered Design'
      ],
      image:
        'https://cdn.discordapp.com/attachments/1021065006953013339/1292123500235980800/image.png?ex=67029748&is=670145c8&hm=f0384cfce20c04c0453112fdf7ab8e2e7dffe48e83797618313167f78b0692f3&',
      link: '/pdf/MangaHeaven.pdf'
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
        'https://cdn.discordapp.com/attachments/1021065006953013339/1290184487128272948/image.png?ex=66fb8970&is=66fa37f0&hm=64ae508b12ee197b6e8bd53b7fb2c6d4e0262ef28cf7c537056cb0c1928f7429&',
      link: '/pdf/waste2wheel.pdf'
    },
    {
      id: 4,
      title: 'Korean Piano',
      description:
        'An interactive web application blending the traditional sounds of the classic piano with modern electronic piano features, focusing on sound handling in frontend development.',
      technologies: ['Vue.js', 'Figma', 'HTML', 'CSS', 'JavaScript', 'Git'],
      image:
        'https://media.discordapp.net/attachments/1021065006953013339/1290185452007063552/image.png?ex=66fb8a56&is=66fa38d6&hm=b1b0411574d503bba25678d757fc81bedd1afaf937d9f7a8a0d1f66034d56a8e&=&format=webp&quality=lossless&width=714&height=525',
      link: 'https://github.com/fluffyhugger/PROJECT1-SEC-2-DaiItsara'
    },
    {
      id: 5,
      title: 'PC Spec Builder CRUD',
      description:
        'CRUD web app for building custom computer specifications. Dynamic data fetching, responsive UI, and admin tools for product management, PC rankings, and article browsing.',
      technologies: ['Vue.js', 'Figma', 'HTML', 'CSS', 'JavaScript', 'Git'],
      image:
        'https://media.discordapp.net/attachments/1021065006953013339/1290240187259162634/image.png?ex=66fbbd50&is=66fa6bd0&hm=ea5c6b442fb2ad966d55943cfeafe285bcd0d93adb08f3adf127b0d0cfb0893a&=&format=webp&quality=lossless&width=745&height=655',
      link: 'https://github.com/fluffyhugger/PROJECT2-SEC-2-DaiItsara'
    },
    {
      id: 6,
      title: 'Punktify MP3 Player',
      description:
        'MP3 Player web app with responsive design. This app provides a user-friendly interface for playing MP3 files and enjoying music seamlessly across various devices.',
      technologies: ['Vue.js', 'Figma', 'HTML', 'CSS', 'JavaScript', 'Git'],
      image:
        'https://cdn.discordapp.com/attachments/1021065006953013339/1290183474400985130/image.png?ex=66fb887e&is=66fa36fe&hm=49836efff2d7aee3dca5e8aca7b82e9b7dfb1899bf0d1d414a9e09f6381796a8&',
      link: 'https://github.com/Chocolaz/Punktify'
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
