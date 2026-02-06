<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card shadow border-0">
        <div class="card-header bg-primary text-white text-center py-4">
          <h3 class="mb-0">
            <i class="bi bi-box-arrow-in-right me-2"></i>
            Đăng nhập
          </h3>
        </div>
        
        <div class="card-body p-4">
          <form @submit.prevent="login">
            <div class="mb-3">
              <label class="form-label fw-semibold">Email</label>
              <input 
                type="email" 
                class="form-control" 
                v-model="email"
                placeholder="Nhập email"
                required
              >
            </div>
            
            <div class="mb-3">
              <label class="form-label fw-semibold">Mật khẩu</label>
              <input 
                type="password" 
                class="form-control" 
                v-model="password"
                placeholder="Nhập mật khẩu"
                required
              >
            </div>
            
            <div v-if="error" class="alert alert-danger">
              <i class="bi bi-exclamation-triangle me-2"></i>
              {{ error }}
            </div>
            
            <div class="d-grid">
              <button type="submit" class="btn btn-primary" :disabled="loading">
                <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                <i class="bi bi-box-arrow-in-right me-2"></i>Đăng nhập
              </button>
            </div>
            
            <div class="text-center mt-3">
              <p class="mb-0">
                Chưa có tài khoản? 
                <router-link to="/register" class="text-primary text-decoration-none">
                  Đăng ký ngay
                </router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      error: '',
      loading: false
    }
  },
  methods: {
    login() {
      this.error = ''
      this.loading = true
      
      if (!this.email.trim() || !this.password.trim()) {
        this.error = 'Vui lòng nhập đầy đủ email và mật khẩu!'
        this.loading = false
        return
      }
      
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      
      const user = users.find(user => 
        user.email === this.email && user.password === this.password
      )
      
      if (!user) {
        this.error = 'Email hoặc mật khẩu không đúng!'
        this.loading = false
        return
      }
      
      localStorage.setItem('currentUser', JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar
      }))
      
      this.loading = false
      alert('Đăng nhập thành công!')
      this.$router.push('/')
    }
  }
}
</script>