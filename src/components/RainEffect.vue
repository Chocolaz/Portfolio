<!-- components/RainEffect.vue -->
<template>
  <canvas ref="canvas" class="absolute inset-0 w-full h-full"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let ctx
let raindrops = []

const createRaindrop = () => {
  return {
    x: Math.random() * window.innerWidth,
    y: -20,
    length: Math.random() * 10 + 5,
    speed: Math.random() * 5 + 2
  }
}

const drawRain = () => {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  ctx.strokeStyle = 'rgba(0, 243, 255, 0.5)'
  ctx.lineWidth = 1

  raindrops.forEach((drop) => {
    ctx.beginPath()
    ctx.moveTo(drop.x, drop.y)
    ctx.lineTo(drop.x, drop.y + drop.length)
    ctx.stroke()

    drop.y += drop.speed

    if (drop.y > canvas.value.height) {
      Object.assign(drop, createRaindrop())
    }
  })

  requestAnimationFrame(drawRain)
}

onMounted(() => {
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  ctx = canvas.value.getContext('2d')

  for (let i = 0; i < 100; i++) {
    raindrops.push(createRaindrop())
  }

  drawRain()

  window.addEventListener('resize', () => {
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', () => {})
})
</script>
