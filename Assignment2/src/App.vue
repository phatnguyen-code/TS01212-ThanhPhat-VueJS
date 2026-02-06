<template>
  <div id="app">
    <Navbar />
    <main class="container py-4">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  min-height: 100vh;
  background: linear-gradient(135deg, 
    #f0f4ff 0%,
    #e6f0ff 25%,
    #f0f7ff 50%,
    #f5f0ff 75%,
    #fff0f5 100%);
  background-attachment: fixed;
  color: #2d3748;
  line-height: 1.6;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 
    0 20px 60px rgba(102, 126, 234, 0.1),
    0 8px 32px rgba(31, 38, 135, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.4);
  margin: 2rem auto;
  padding: 2.5rem !important;
  position: relative;
  overflow: hidden;
  animation: containerFloat 6s ease-in-out infinite;
}

.container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, 
    #667eea 0%,
    #764ba2 25%,
    #f093fb 50%,
    #f5576c 75%,
    #667eea 100%);
  background-size: 200% 100%;
  animation: gradientShift 4s linear infinite;
  border-radius: 24px 24px 0 0;
}

@keyframes containerFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes gradientShift {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 
    0 8px 32px rgba(31, 38, 135, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  animation: fadeIn 0.6s ease-out;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 25px 50px rgba(102, 126, 234, 0.15),
    0 10px 30px rgba(31, 38, 135, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border-color: rgba(102, 126, 234, 0.3);
}

.card-header {
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.1) 0%,
    rgba(118, 75, 162, 0.1) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1.5rem 1.5rem;
  font-weight: 600;
  color: #4a5568;
}

.btn {
  border-radius: 12px;
  font-weight: 600;
  padding: 0.75rem 1.75rem;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.2), 
    transparent);
  transition: left 0.5s ease;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.btn-outline-primary {
  background: transparent;
  border: 2px solid #667eea;
  color: #667eea;
}

.btn-outline-primary:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.form-control {
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
}

.form-control:focus {
  border-color: #667eea;
  box-shadow: 
    0 0 0 3px rgba(102, 126, 234, 0.2),
    0 4px 12px rgba(102, 126, 234, 0.1);
  background: white;
  transform: translateY(-2px);
}

.form-label {
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 10px;
  border: 3px solid rgba(255, 255, 255, 0.3);
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #5a67d8, #6b46c1);
}

.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.1) 0%,
    rgba(118, 75, 162, 0.1) 100%);
  border-radius: 50%;
  animation: float 20s infinite linear;
}

.particle:nth-child(1) {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.particle:nth-child(2) {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 10%;
  animation-delay: -5s;
}

.particle:nth-child(3) {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 20%;
  animation-delay: -10s;
}

.particle:nth-child(4) {
  width: 100px;
  height: 100px;
  top: 20%;
  right: 20%;
  animation-delay: -15s;
}

.particle:nth-child(5) {
  width: 70px;
  height: 70px;
  bottom: 40%;
  right: 30%;
  animation-delay: -7s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(20px, 40px) rotate(90deg);
  }
  50% {
    transform: translate(-30px, 20px) rotate(180deg);
  }
  75% {
    transform: translate(10px, -30px) rotate(270deg);
  }
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

h1 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
}

.text-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.alert {
  border-radius: 16px;
  border: none;
  backdrop-filter: blur(10px);
  padding: 1.25rem 1.5rem;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.08);
}

.alert-info {
  background: rgba(102, 126, 234, 0.1);
  color: #434190;
  border-left: 4px solid #667eea;
}

.alert-success {
  background: rgba(72, 187, 120, 0.1);
  color: #22543d;
  border-left: 4px solid #48bb78;
}

.alert-danger {
  background: rgba(245, 101, 101, 0.1);
  color: #742a2a;
  border-left: 4px solid #f56565;
}

img.rounded-circle {
  border: 3px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

img.rounded-circle:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
  .container {
    margin: 1rem;
    padding: 1.5rem !important;
    border-radius: 20px;
    animation: none;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .btn {
    padding: 0.625rem 1.5rem;
  }
  
  .card {
    margin-bottom: 1rem;
  }
  
  .particle {
    display: none;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.glow {
  position: relative;
}

.glow::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, 
    #667eea, 
    #764ba2, 
    #f093fb, 
    #f5576c);
  border-radius: inherit;
  z-index: -1;
  filter: blur(10px);
  opacity: 0.3;
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

.shadow-soft {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
}

.shadow-medium {
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
}

.shadow-strong {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}
</style>