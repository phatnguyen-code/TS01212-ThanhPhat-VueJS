<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card shadow border-0">
        <div class="card-header bg-success text-white text-center py-4">
          <h3 class="mb-0">
            <i class="bi bi-person-plus me-2"></i>
            Đăng ký tài khoản
          </h3>
        </div>
        
        <div class="card-body p-4">
          <form @submit.prevent="register">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label fw-semibold">Họ tên</label>
                <input 
                  type="text" 
                  class="form-control" 
                  v-model="name"
                  placeholder="Nguyễn Văn A"
                  required
                >
              </div>
              
              <div class="col-md-6 mb-3">
                <label class="form-label fw-semibold">Email</label>
                <input 
                  type="email" 
                  class="form-control" 
                  v-model="email"
                  placeholder="example@email.com"
                  required
                >
              </div>
              
              <div class="col-md-6 mb-3">
                <label class="form-label fw-semibold">Mật khẩu</label>
                <input 
                  type="password" 
                  class="form-control" 
                  v-model="password"
                  placeholder="Tối thiểu 6 ký tự"
                  required
                  minlength="6"
                >
              </div>
              
              <div class="col-md-6 mb-3">
                <label class="form-label fw-semibold">Xác nhận mật khẩu</label>
                <input 
                  type="password" 
                  class="form-control" 
                  v-model="confirmPassword"
                  placeholder="Nhập lại mật khẩu"
                  required
                >
              </div>
            </div>
            
            <div v-if="error" class="alert alert-danger">
              <i class="bi bi-exclamation-triangle me-2"></i>
              {{ error }}
            </div>
            
            <div v-if="success" class="alert alert-success">
              <i class="bi bi-check-circle me-2"></i>
              {{ success }}
            </div>
            
            <div class="d-grid">
              <button type="submit" class="btn btn-success" :disabled="loading">
                <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                <i class="bi bi-person-plus me-2"></i>Đăng ký
              </button>
            </div>
            
            <div class="text-center mt-3">
              <p class="mb-0">
                Đã có tài khoản? 
                <router-link to="/login" class="text-success text-decoration-none">
                  Đăng nhập ngay
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
  name: 'RegisterView',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      success: '',
      loading: false
    }
  },
  methods: {
    register() {
      this.error = ''
      this.success = ''
      
      if (!this.name.trim()) {
        this.error = 'Vui lòng nhập họ tên!'
        return
      }
      
      if (!this.email.trim()) {
        this.error = 'Vui lòng nhập email!'
        return
      }
      
      if (!this.validateEmail(this.email)) {
        this.error = 'Email không hợp lệ!'
        return
      }
      
      if (this.password.length < 6) {
        this.error = 'Mật khẩu phải có ít nhất 6 ký tự!'
        return
      }
      
      if (this.password !== this.confirmPassword) {
        this.error = 'Mật khẩu xác nhận không khớp!'
        return
      }
      
      this.loading = true
      
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      
      const existingUser = users.find(user => user.email === this.email)
      if (existingUser) {
        this.error = 'Email đã được đăng ký!'
        this.loading = false
        return
      }
      
      const newUser = {
        id: Date.now(),
        name: this.name,
        email: this.email,
        password: this.password, 
        avatar: 'https://via.placeholder.com/150',
        createdAt: new Date().toISOString()
      }
      
      users.push(newUser)
      
      localStorage.setItem('users', JSON.stringify(users))
      
      localStorage.setItem('currentUser', JSON.stringify({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        avatar: newUser.avatar
      }))
      
      this.loading = false
      this.success = 'Đăng ký thành công! Đang chuyển hướng...'
      
      setTimeout(() => {
        this.$router.push('/')
      }, 1000)
    },
    
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    }
  }
}
</script>