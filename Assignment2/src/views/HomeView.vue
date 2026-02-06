<template>
  <div>
    <div class="text-center py-5 mb-5">
      <h1 class="display-5 fw-bold text-primary mb-3">
        Chào mừng đến với Blog Manager
      </h1>
      <p class="lead text-muted mb-4">
        Nơi chia sẻ kiến thức và kết nối cộng đồng
      </p>
      <router-link to="/create-post" class="btn btn-primary btn-lg">
        <i class="bi bi-pencil-square me-2"></i>Đăng bài ngay
      </router-link>
    </div>

    <div v-if="posts.length === 0" class="alert alert-info text-center">
      <i class="bi bi-info-circle me-2"></i>
      Chưa có bài viết nào. Hãy là người đầu tiên đăng bài!
    </div>

    <div v-else>
      <h2 class="mb-4">
        <i class="bi bi-journal-text text-primary me-2"></i>
        Bài viết mới nhất ({{ posts.length }})
      </h2>
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'

export default {
  name: 'HomeView',
  components: {
    PostList
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    this.loadPosts()
  },
  methods: {
    loadPosts() {
      const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]')
      
      if (savedPosts.length === 0) {
        this.posts = [
          {
            id: 1,
            title: 'Hướng dẫn Vue.js cơ bản',
            content: 'Vue.js là framework JavaScript tiến bộ được sử dụng để xây dựng giao diện người dùng...',
            author: 'Nguyễn Văn A',
            authorAvatar: 'https://via.placeholder.com/32',
            date: '20/01/2024'
          },
          {
            id: 2,
            title: 'Bootstrap 5 - Tính năng mới',
            content: 'Bootstrap 5 mang đến nhiều cải tiến về performance và customizability...',
            author: 'Trần Thị B',
            authorAvatar: 'https://via.placeholder.com/32',
            date: '19/01/2024'
          },
          {
            id: 3,
            title: 'Xây dựng REST API với Node.js',
            content: 'Hướng dẫn xây dựng REST API đầy đủ với Node.js và Express framework...',
            author: 'Lê Văn C',
            authorAvatar: 'https://via.placeholder.com/32',
            date: '18/01/2024'
          }
        ]
        
        localStorage.setItem('posts', JSON.stringify(this.posts))
      } else {
        this.posts = savedPosts
      }
    }
  }
}
</script>