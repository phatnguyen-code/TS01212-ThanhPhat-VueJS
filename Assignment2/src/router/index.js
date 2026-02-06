import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/HomeView.vue') },
  { path: '/login', component: () => import('../views/LoginView.vue') },
  { path: '/register', component: () => import('../views/RegisterView.vue') },
  { path: '/create-post', component: () => import('../views/CreatePostView.vue') },
  { path: '/post/:id', component: () => import('../views/PostDetailView.vue') },
  { path: '/profile', component: () => import('../views/ProfileView.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router