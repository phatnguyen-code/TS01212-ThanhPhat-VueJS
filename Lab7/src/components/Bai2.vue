<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      
      <div v-if="!isLoggedIn" class="col-sm-12 border rounded p-4 shadow-sm bg-white">
        <h3 class="text-center text-primary mb-4 fw-bold">Form Đăng nhập</h3>
        
        <form @submit.prevent="login">
          <div class="mb-3">
            <label class="form-label fw-bold">Email:</label>
            <input 
              type="email" 
              class="form-control" 
              v-model="email"
              placeholder="Nhập email..."
              :class="{ 'is-invalid': emailError }" 
            />
            <div v-if="emailError" class="invalid-feedback">{{ emailError }}</div>
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">Mật khẩu:</label>
            <input 
              type="password" 
              class="form-control" 
              v-model="password"
              placeholder="Nhập mật khẩu..."
              :class="{ 'is-invalid': passwordError }"
            />
            <div v-if="passwordError" class="invalid-feedback">{{ passwordError }}</div>
          </div>

          <button type="submit" class="btn btn-primary w-100 mt-2">Đăng nhập</button>
        </form>
      </div>

      <div v-else class="col-sm-12 border rounded p-5 shadow-sm bg-white text-center">
        <h3 class="text-success mb-4">
          <i class="fa-solid fa-user-check me-2"></i>Chào mừng, {{ email }}!
        </h3>
        <p class="text-muted">Bạn đã đăng nhập thành công.</p>
        <button @click="logout" class="btn btn-outline-danger px-4">Đăng xuất</button>
      </div>

    </div>
  </div>
</template>
<script setup> 
import { ref } from 'vue'; 
 
const isLoggedIn = ref(false); 
const email = ref(''); 
const password = ref(''); 
 
const emailError = ref('');
const passwordError = ref(''); 
 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
 
const login = () => { 
    // Reset thông điệp lỗi 
    emailError.value = ''; 
    passwordError.value = ''; 
 
    // Validate email 
    if (!email.value) { 
        emailError.value = 'Email là bắt buộc.'; 
    } else if (!emailRegex.test(email.value)) { 
        emailError.value = 'Vui lòng nhập email hợp lệ.'; 
    } 
 
    // Validate mật khẩu 
    if (!password.value) { 
        passwordError.value = 'Mật khẩu là bắt buộc.'; 
    } 
 
    // Nếu không có lỗi, xử lý login 
    if (!emailError.value && !passwordError.value) { 
        isLoggedIn.value = true; 
    } 
} 
 
const logout = () => { 
    isLoggedIn.value = false; 
    email.value = ''; 
    password.value = ''; 
    emailError.value = ''; 
    passwordError.value = ''; 
} 
</script>