<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
    <div class="container">
      <router-link to="/" class="navbar-brand fw-bold text-primary">
        <i class="bi bi-journal-text fs-4 me-2"></i>
        Blog Manager
      </router-link>

      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mx-2">
            <router-link to="/" class="nav-link d-flex align-items-center">
              <i class="bi bi-house-door me-2"></i>
              <span>Trang chủ</span>
            </router-link>
          </li>
          
          <li v-if="isLoggedIn" class="nav-item mx-2">
            <router-link to="/create-post" class="nav-link d-flex align-items-center">
              <i class="bi bi-plus-circle me-2"></i>
              <span>Đăng bài</span>
            </router-link>
          </li>
          
          <li v-if="isLoggedIn" class="nav-item mx-2">
            <router-link to="/profile" class="nav-link d-flex align-items-center">
              <i class="bi bi-person-circle me-2"></i>
              <span>Hồ sơ</span>
            </router-link>
          </li>
        </ul>

        <div class="d-flex">
          <div v-if="isLoggedIn" class="dropdown">
            <button class="btn btn-outline-primary dropdown-toggle d-flex align-items-center" 
                    type="button" data-bs-toggle="dropdown">
              <img :src="currentUser.avatar || 'https://via.placeholder.com/32'" 
                   alt="Avatar" class="rounded-circle me-2" width="28" height="28">
              {{ currentUser.name || 'Người dùng' }}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <router-link to="/profile" class="dropdown-item">
                  <i class="bi bi-person me-2"></i>Hồ sơ
                </router-link>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <button class="dropdown-item text-danger" @click="logout">
                  <i class="bi bi-box-arrow-right me-2"></i>Đăng xuất
                </button>
              </li>
            </ul>
          </div>
          
          <template v-else>
            <router-link to="/login" class="btn btn-outline-primary me-2">
              Đăng nhập
            </router-link>
            <router-link to="/register" class="btn btn-primary">
              Đăng ký
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isLoggedIn: false,
      currentUser: null
    }
  },
  created() {
    this.checkAuth()
  },
  methods: {
    checkAuth() {
      // Kiểm tra localStorage
      const user = localStorage.getItem('currentUser')
      if (user) {
        this.isLoggedIn = true
        this.currentUser = JSON.parse(user)
      }
    },
    logout() {
      localStorage.removeItem('currentUser')
      this.isLoggedIn = false
      this.currentUser = null
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 1rem 0;
}

.nav-link {
  padding: 0.5rem 1rem !important;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s;
  color: #4a5568 !important;
}

.nav-link:hover {
  background-color: #edf2f7;
  color: #2d3748 !important;
}

.nav-link.router-link-active {
  background-color: #ebf8ff;
  color: #2b6cb0 !important;
  font-weight: 600;
}

.btn {
  border-radius: 8px;
  padding: 0.5rem 1.25rem;
  font-weight: 500;
}

.navbar-brand {
  font-size: 1.5rem;
}

.dropdown-toggle::after {
  margin-left: 0.5rem;
}

.dropdown-menu {
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-width: 220px;  
  padding: 0.5rem 0; 
}


.dropdown-toggle {
  min-width: 140px;  
  justify-content: space-between;
}

.dropdown-item {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  margin: 0.125rem 0.5rem;
  width: auto;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
}
</style>