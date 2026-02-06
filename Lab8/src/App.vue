<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <hr>
  <router-view />
</template>

<style>
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
</style>
