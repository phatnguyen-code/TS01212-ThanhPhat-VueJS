<template>
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="card shadow border-0">
        <div class="card-header bg-info text-white py-4">
          <h3 class="mb-0">
            <i class="bi bi-pencil-square me-2"></i>
            Đăng bài viết mới
          </h3>
        </div>
        
        <div class="card-body p-4">
          <form @submit.prevent="createPost">
            <div class="mb-3">
              <label class="form-label fw-semibold">Tiêu đề</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="title"
                placeholder="Nhập tiêu đề"
                required
              >
            </div>
            
            <div class="mb-3">
              <label class="form-label fw-semibold">Hình ảnh (URL)</label>
              <input 
                type="url" 
                class="form-control" 
                v-model="image"
                placeholder="https://via.placeholder.com/800x400"
              >
              <div v-if="image" class="mt-2">
                <img :src="image" alt="Preview" class="img-thumbnail" style="max-height: 150px;">
              </div>
            </div>
            
            <div class="mb-3">
              <label class="form-label fw-semibold">Nội dung</label>
              <textarea 
                class="form-control" 
                v-model="content"
                rows="8"
                placeholder="Nhập nội dung bài viết"
                required
              ></textarea>
            </div>
            
            <div class="d-flex justify-content-between">
              <router-link to="/" class="btn btn-outline-secondary">
                Hủy
              </router-link>
              <button type="submit" class="btn btn-info">
                <i class="bi bi-send me-2"></i>Đăng bài
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreatePostView',
  data() {
    return {
      title: '',
      image: '',
      content: '',
      currentUser: null
    }
  },
  created() {
    this.checkLogin()
  },
  methods: {
    checkLogin() {
      const user = localStorage.getItem('currentUser')
      if (!user) {
        alert('Vui lòng đăng nhập để đăng bài!')
        this.$router.push('/login')
        return
      }
      this.currentUser = JSON.parse(user)
    },
    createPost() {
      if (!this.currentUser) {
        alert('Vui lòng đăng nhập!')
        return
      }
      
      const newPost = {
        id: Date.now(),
        title: this.title,
        content: this.content,
        image: this.image || 'https://via.placeholder.com/800x400',
        author: this.currentUser.name,
        authorAvatar: this.currentUser.avatar || 'https://via.placeholder.com/32',
        authorId: this.currentUser.id,
        date: new Date().toLocaleDateString('vi-VN'),
        comments: 0,
        likes: 0,
        createdAt: new Date().toISOString()
      }
      
      const posts = JSON.parse(localStorage.getItem('posts') || '[]')
      posts.unshift(newPost)
      localStorage.setItem('posts', JSON.stringify(posts))
      
      alert('Đăng bài thành công!')
      this.$router.push('/')
    }
  }
}
</script>