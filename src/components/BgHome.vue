<template>
  <div class="main custom-gradient">
    <div class="text-container">
      <div class="text">WELCOME WELCOME WELCOME</div>
      <div class="text">WELCOME WELCOME WELCOME</div>
    </div>
    <div class="text-container hello1">
      <div class="text">HELLO HELLO HELLO</div>
      <div class="text">HELLO HELLO HELLO</div>
    </div>
    <div class="text-container hello2">
      <div class="text">HELLO HELLO HELLO</div>
      <div class="text">HELLO HELLO HELLO</div>
    </div>
    <div class="text-container hello3">
      <div class="text"><span> </span>HELLO HELLO HELLO</div>
      <div class="text"><span> </span>HELLO HELLO HELLO</div>
    </div>
    <div class="text-container hello4">
      <div class="text">WELCOME WELCOME WELCOME</div>
      <div class="text">WELCOME WELCOME WELCOME</div>
    </div>
  </div>
</template>

<script></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Yatra+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

.main {
  font-family: 'Audiowide', sans-serif;
}

body,
html,
.main {
  margin: 0;
  width: 100%;
  height: 100%;
}

.main {
  overflow: hidden;
  position: relative;
}
.text-container {
  left: 7%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  position: absolute;
  display: inline-flex;
  transform: rotate(-90deg);
  transform-origin: bottom left;
  bottom: 0;
}

.hello1 .text,
.hello2 .text,
.hello3 .text {
  font-size: 200px;
}
.hello1 {
  left: 35%;
}
.hello1 .text {
  animation: movedown 30s linear infinite;
  animation-delay: -30s;
}
.hello1 .text:nth-child(2) {
  animation: movedown2 30s linear infinite;
  animation-delay: -15s;
}

.hello2 {
  left: 60%;
}
.hello2 .text {
  animation: move 50s linear infinite;
  animation-delay: -50s;
}
.hello2 .text:nth-child(2) {
  animation: move2 50s linear infinite;
  animation-delay: -25s;
}

.hello3 {
  left: 87%;
}
.hello3 .text {
  animation: movedown 30s linear infinite;
  animation-delay: -30s;
}
.hello3 .text:nth-child(2) {
  animation: movedown2 30s linear infinite;
  animation-delay: -15s;
}
.hello4 {
  left: 100%;
}

.text {
  white-space: nowrap;
  font-size: 100px;
  color: white;
  white-space: nowrap;
  animation: move 30s linear infinite;
  animation-delay: -30s;
  padding: 0 40px;
}
.text:nth-child(2) {
  animation: move2 30s linear infinite;
  animation-delay: -15s;
}

@keyframes move {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes move2 {
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes movedown {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes movedown2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}
</style>
