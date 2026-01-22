<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import HomeView from './components/HomeView.vue';
</script>

<template>
  <Navbar/>
  <HomeView/>
  <footer class="bg-white border-top py-5 mt-5">
    <div class="container text-center">
      <p class="text-muted small mb-0">&copy; 2024 Assignment SOF308 - Giao diện thiết kế bởi [Tên SV]</p>
    </div>
  </footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
