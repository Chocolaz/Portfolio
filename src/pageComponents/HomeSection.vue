<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center relative overflow-hidden bg-porsche-black"
  >
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <BgHome />
    </div>

    <!-- Main Content with Neon Effect -->
    <div class="relative z-10 text-center neon-effect">
      <h1 class="text-6xl font-bold mb-6 animate-zoom-in">
        {{ portfolio.fname }}
        <span class="text-dmcPrimary"> {{ portfolio.lname }} </span>
      </h1>
      <p class="text-2xl animate-zoom-in-slow">
        {{ portfolio.title }}
      </p>
    </div>
  </section>
</template>

<script setup>
import BgHome from '../components/BgHome.vue'

defineProps({
  portfolio: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
h1,
p {
  font-family: 'Audiowide', sans-serif;
}

.neon-effect h1 {
  text-shadow: 0 0 10px rgba(55, 5, 5, 0.8), 0 0 20px rgba(0, 0, 0, 0.6),
    0 0 30px rgba(255, 0, 0, 0.4), 0 0 40px #8a0808;
  transition: all 0.3s ease;
}

.neon-effect p {
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6),
    0 0 30px rgba(255, 0, 0, 0.4), 0 0 40px #dc0000;
  transition: all 0.3s ease;
}

.neon-effect h1:hover,
.neon-effect p:hover {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
    0 0 30px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4),
    0 0 50px gold;
}

@keyframes zoom-in {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

@keyframes zoom-in-slow {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.02);
  }
}

.animate-zoom-in {
  animation: zoom-in 1.5s ease-in-out infinite alternate;
}

.animate-zoom-in-slow {
  animation: zoom-in-slow 3s ease-in-out infinite alternate;
}

h1 {
  font-size: 5rem;
}

p {
  font-size: 1.5rem;
  margin-top: 1rem;
}

#home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
  }
}
</style>
