<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card shadow border-0">
        <div class="card-header bg-warning text-dark py-4">
          <h3 class="mb-0">
            <i class="bi bi-person-circle me-2"></i>
            Thông tin cá nhân
          </h3>
        </div>
        
        <div class="card-body p-4">
          <div class="text-center mb-4">
            <img src="https://via.placeholder.com/150" alt="Avatar" class="rounded-circle mb-3">
            <h4>Nguyễn Thành Phát</h4>
            <p class="text-muted">example@email.com</p>
          </div>
          
          <form @submit.prevent="updateProfile">
            <div class="mb-3">
              <label class="form-label fw-semibold">Họ tên</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="name"
                required
              >
            </div>
            
            <div class="mb-3">
              <label class="form-label fw-semibold">Email</label>
              <input 
                type="email" 
                class="form-control" 
                v-model="email"
                required
              >
            </div>
            
            <div class="mb-3">
              <label class="form-label fw-semibold">Mật khẩu mới</label>
              <input 
                type="password" 
                class="form-control" 
                v-model="password"
                placeholder="Để trống nếu không đổi"
              >
            </div>
            
            <div class="mb-3">
              <label class="form-label fw-semibold">Ảnh đại diện (URL)</label>
              <input 
                type="url" 
                class="form-control" 
                v-model="avatar"
                placeholder="https://example.com/avatar.jpg"
              >
            </div>
            
            <div class="d-flex justify-content-between">
              <button type="button" class="btn btn-outline-danger" @click="deleteAccount">
                Xóa tài khoản
              </button>
              <button type="submit" class="btn btn-warning">
                <i class="bi bi-check-circle me-2"></i>Cập nhật
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
  name: 'ProfileView',
  data() {
    return {
      name: 'Nguyễn Thành Phát',
      email: 'example@email.com',
      password: '',
      avatar: 'https://via.placeholder.com/150'
    }
  },
  methods: {
    updateProfile() {
      alert('Cập nhật thành công!')
    },
    deleteAccount() {
      if (confirm('Bạn có chắc muốn xóa tài khoản?')) {
        alert('Tài khoản đã xóa!')
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 12px;
}

.form-control {
  border-radius: 8px;
  padding: 0.75rem 1rem;
}

.btn {
  border-radius: 8px;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
}
</style>