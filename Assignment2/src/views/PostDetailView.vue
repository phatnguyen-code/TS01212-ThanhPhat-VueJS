<template>
  <div>
    <div class="mb-4">
      <router-link to="/" class="btn btn-outline-secondary">
        <i class="bi bi-arrow-left me-2"></i>Quay lại
      </router-link>
    </div>
    
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    
    <div v-else-if="post" class="card shadow border-0 mb-4">
      <div v-if="post.image" class="post-image">
        <img :src="post.image" class="card-img-top" alt="Post image">
      </div>
      
      <div class="card-body p-4">
        <h1 class="mb-3 text-primary">{{ post.title }}</h1>
        
        <div class="d-flex align-items-center mb-4">
          <img :src="post.authorAvatar" alt="Author" class="rounded-circle me-3" width="48" height="48">
          <div>
            <h5 class="mb-0">{{ post.author }}</h5>
            <small class="text-muted">{{ post.date }}</small>
          </div>
        </div>
        
        <div class="content mb-4">
          <p>{{ post.content }}</p>
        </div>
        
        <div class="border-top pt-3">
          <button class="btn btn-outline-warning btn-sm me-2" @click="editPost">
            <i class="bi bi-pencil me-1"></i>Sửa
          </button>
          <button class="btn btn-outline-danger btn-sm" @click="deletePost">
            <i class="bi bi-trash me-1"></i>Xóa
          </button>
        </div>
      </div>
    </div>
    
    <div v-else class="alert alert-danger text-center">
      <i class="bi bi-exclamation-triangle me-2"></i>
      Bài viết không tồn tại!
    </div>
    
    <div v-if="post" class="card shadow border-0">
      <div class="card-header bg-light">
        <h4 class="mb-0">
          <i class="bi bi-chat-left-text me-2"></i>
          Bình luận ({{ comments.length }})
        </h4>
      </div>
      
      <div class="card-body p-4">
        <div v-if="!currentUser" class="alert alert-info mb-4">
          <i class="bi bi-info-circle me-2"></i>
          <router-link to="/login" class="alert-link fw-semibold">Đăng nhập</router-link>
          để bình luận bài viết này
        </div>
        
        <form v-if="currentUser" @submit.prevent="addComment" class="mb-4">
          <div class="d-flex align-items-start mb-3">
            <img :src="currentUser.avatar || 'https://via.placeholder.com/40'" 
                 alt="Avatar" class="rounded-circle me-3" width="48" height="48">
            <div class="flex-grow-1">
              <div class="mb-2">
                <strong>{{ currentUser.name }}</strong>
              </div>
              <textarea 
                class="form-control" 
                v-model="newComment"
                rows="3"
                placeholder="Viết bình luận của bạn..."
                :disabled="isSubmitting"
                required
              ></textarea>
              <div class="text-end mt-2">
                <button type="submit" class="btn btn-primary" :disabled="!newComment.trim() || isSubmitting">
                  <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                  <i class="bi bi-send me-2"></i>Gửi bình luận
                </button>
              </div>
            </div>
          </div>
        </form>
        
        <div v-if="comments.length === 0" class="text-center text-muted py-5">
          <i class="bi bi-chat-left display-4 d-block mb-3"></i>
          <h5>Chưa có bình luận nào</h5>
          <p>Hãy là người đầu tiên bình luận!</p>
        </div>
        
        <div v-else class="comments-list">
          <div v-for="comment in comments" :key="comment.id" class="comment-item border-bottom pb-4 mb-4">
            <div class="d-flex">
              <div class="flex-shrink-0">
                <img :src="comment.authorAvatar" alt="Avatar" class="rounded-circle" width="48" height="48">
              </div>
              
              <div class="flex-grow-1 ms-3">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h6 class="mb-0 fw-semibold">{{ comment.author }}</h6>
                    <small class="text-muted">
                      <i class="bi bi-clock me-1"></i>{{ comment.time }}
                    </small>
                  </div>
                  
                  <div v-if="currentUser && (currentUser.id === comment.authorId || currentUser.id === post.authorId)">
                    <button class="btn btn-sm btn-outline-danger" @click="deleteComment(comment.id)" 
                            title="Xóa bình luận">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
                
                <div class="comment-content mb-2">
                  <p class="mb-0">{{ comment.content }}</p>
                </div>
                
                <div class="comment-actions">
                  <button class="btn btn-sm btn-outline-secondary me-2" @click="likeComment(comment.id)">
                    <i class="bi bi-hand-thumbs-up me-1"></i>Thích ({{ comment.likes || 0 }})
                  </button>
                  <button class="btn btn-sm btn-outline-secondary" @click="replyToComment(comment)">
                    <i class="bi bi-reply me-1"></i>Trả lời
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostDetailView',
  data() {
    return {
      post: null,
      comments: [], 
      newComment: '',
      loading: true,
      isSubmitting: false,
      currentUser: null
    }
  },
  created() {
    this.loadCurrentUser()
    this.loadPost()
    this.loadComments()
  },
  methods: {
    loadCurrentUser() {
      const user = localStorage.getItem('currentUser')
      if (user) {
        this.currentUser = JSON.parse(user)
      }
    },
    
    loadPost() {
      const postId = parseInt(this.$route.params.id)
      const posts = JSON.parse(localStorage.getItem('posts') || '[]')
      this.post = posts.find(p => p.id === postId)
      this.loading = false
    },
    
    loadComments() {
      const postId = parseInt(this.$route.params.id)
      const savedComments = JSON.parse(localStorage.getItem(`comments_${postId}`) || '[]')
      
      if (savedComments.length === 0) {
        this.comments = [
          {
            id: 1,
            author: 'Trần Thị B',
            authorAvatar: 'https://via.placeholder.com/40',
            authorId: 2, 
            content: 'Bài viết rất hữu ích! Cảm ơn tác giả đã chia sẻ.',
            time: '20/01/2024 14:30',
            likes: 3,
            createdAt: new Date().toISOString()
          },
          {
            id: 2,
            author: 'Lê Văn C',
            authorAvatar: 'https://via.placeholder.com/40',
            authorId: 3,
            content: 'Rất thích cách giải thích rõ ràng và dễ hiểu.',
            time: '20/01/2024 15:45',
            likes: 1,
            createdAt: new Date().toISOString()
          }
        ]
        localStorage.setItem(`comments_${postId}`, JSON.stringify(this.comments))
      } else {
        this.comments = savedComments
      }
    },
    
    addComment() {
      if (!this.currentUser) {
        alert('Vui lòng đăng nhập để bình luận!')
        this.$router.push('/login')
        return
      }
      
      if (!this.newComment.trim()) {
        alert('Vui lòng nhập nội dung bình luận!')
        return
      }
      
      this.isSubmitting = true
      
      const newComment = {
        id: Date.now(), 
        author: this.currentUser.name,
        authorAvatar: this.currentUser.avatar || 'https://via.placeholder.com/40',
        authorId: this.currentUser.id,
        content: this.newComment,
        time: new Date().toLocaleString('vi-VN'),
        likes: 0,
        createdAt: new Date().toISOString()
      }
      
      const postId = parseInt(this.$route.params.id)
      const savedComments = JSON.parse(localStorage.getItem(`comments_${postId}`) || '[]')
      savedComments.push(newComment)
      localStorage.setItem(`comments_${postId}`, JSON.stringify(savedComments))
      
      this.comments.push(newComment)
      this.newComment = ''
      this.isSubmitting = false
      
      setTimeout(() => {
        const commentInput = document.querySelector('textarea')
        if (commentInput) {
          commentInput.focus()
        }
      }, 100)
    },
    
    deleteComment(commentId) {
      if (!confirm('Bạn có chắc muốn xóa bình luận này?')) return
      
      const postId = parseInt(this.$route.params.id)
      const savedComments = JSON.parse(localStorage.getItem(`comments_${postId}`) || '[]')
      const filteredComments = savedComments.filter(comment => comment.id !== commentId)
      
      localStorage.setItem(`comments_${postId}`, JSON.stringify(filteredComments))
      this.comments = filteredComments
    },
    
    likeComment(commentId) {
      if (!this.currentUser) {
        alert('Vui lòng đăng nhập để thích bình luận!')
        return
      }
      
      const comment = this.comments.find(c => c.id === commentId)
      if (comment) {
        comment.likes = (comment.likes || 0) + 1
        
        const postId = parseInt(this.$route.params.id)
        localStorage.setItem(`comments_${postId}`, JSON.stringify(this.comments))
      }
    },
    
    replyToComment(comment) {
      if (!this.currentUser) {
        alert('Vui lòng đăng nhập để trả lời bình luận!')
        return
      }
      
      this.newComment = `@${comment.author} `
      const textarea = document.querySelector('textarea')
      if (textarea) {
        textarea.focus()
        textarea.scrollIntoView({ behavior: 'smooth' })
      }
    },
    
    editPost() {
      alert('Tính năng sửa bài viết sẽ được thêm sau!')
    },
    
    deletePost() {
      if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
        const postId = parseInt(this.$route.params.id)
        const posts = JSON.parse(localStorage.getItem('posts') || '[]')
        const filteredPosts = posts.filter(p => p.id !== postId)
        
        localStorage.setItem('posts', JSON.stringify(filteredPosts))
        alert('Đã xóa bài viết!')
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.post-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}

.content {
  line-height: 1.8;
  font-size: 1.1rem;
}

.btn-sm {
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
}

.comment-item {
  transition: background-color 0.3s;
}

.comment-item:hover {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 0.75rem;
  margin: -0.75rem;
}

.comment-actions .btn-sm {
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
}

.alert-info {
  border-radius: 8px;
  border: 1px solid #b6d4fe;
}

.alert-link {
  text-decoration: none;
}

.alert-link:hover {
  text-decoration: underline;
}

textarea.form-control {
  border-radius: 8px;
  resize: vertical;
}

textarea.form-control:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
</style>