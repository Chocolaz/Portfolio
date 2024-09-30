<template>
  <section
    class="min-h-screen bg-gradient-to-r flex items-center justify-center py-20 custom-gradient relative overflow-hidden"
    id="about"
  >
    <!-- Background pattern  -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div
        class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CiAgPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0NDQ0NDQiIHN0cm9rZS13aWR0aD0iMSIgLz4KPC9zdmc+')] bg-repeat"
      ></div>
    </div>

    <!-- Main content -->
    <div
      class="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10"
    >
      <!-- About Me -->
      <div
        class="max-w-4xl lg:w-1/2 relative"
        :class="{ 'animate-fade-in': isVisible }"
      >
        <h2
          class="text-5xl font-bold mb-6 text-left text-porsche-silver font-audiowide neon-effect"
        >
          About Me
        </h2>
        <p class="leading-relaxed mb-6 text-lg text-porsche-silver">
          I'm a dedicated frontend developer and UX/UI designer, focused on
          creating meaningful digital experiences. With a strong background in
          project management, business analysis, and research, I'm skilled at
          understanding user needs and translating them into intuitive,
          responsive web applications.
          <span class="block mt-1"
            >Ready to collaborate? Let's work together to build digital
            solutions that make a real impact.</span
          >
        </p>

        <!-- Skill -->
        <div class="flex flex-wrap justify-start gap-4 mb-6">
          <span
            v-for="(skill, index) in portfolio.skills"
            :key="skill"
            class="bg-porsche-darkgray text-porsche-silver px-6 py-3 rounded-full text-sm font-medium shadow-lg transform transition-all duration-300 futuristic-button neon-effect"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Profile Image -->
      <div
        class="mt-10 lg:mt-0 lg:w-1/2 flex justify-center relative"
        :class="{ 'animate-fade-in': isVisible }"
      >
        <div class="relative group">
          <img
            src="../assets/greeting.png"
            alt="My Picture"
            class="rounded-full w-64 h-64 object-cover border-4 border-porsche-silver shadow-lg transform transition-all duration-500 group-hover:scale-105 neon-image"
          />
          <div
            class="absolute inset-0 rounded-full border-2 border-porsche-red opacity-0 group-hover:opacity-100 transition duration-500 pulse-border"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  portfolio: {
    type: Object,
    required: true
  }
})

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 500)
})
</script>

<style scoped>
.font-audiowide {
  font-family: 'Audiowide', sans-serif;
}

.neon-effect {
  transition: all 0.3s ease;
}
.neon-effect:hover {
  text-shadow: 0 0 10px rgba(213, 0, 28, 0.8), 0 0 20px rgba(213, 0, 28, 0.6),
    0 0 30px rgba(213, 0, 28, 0.4), 0 0 40px rgba(213, 0, 28, 0.2);
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

.pulse-border {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.7);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(255, 255, 255, 0.5);
  }
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

.group:hover img {
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.7), 0 0 30px rgba(255, 0, 0, 0.5);
  transform: scale(1.1);
}

.futuristic-button {
  position: relative;
  overflow: hidden;
  border: 1px solid #aaa;
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
  transform: translateY(-75%) rotate(45deg);
  transition: all 0.3s ease;
  opacity: 0;
}

.futuristic-button:hover::before {
  opacity: 1;
  transform: translateY(0) rotate(45deg);
}
</style>
