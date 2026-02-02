<template>
  <div class="container mt-5">
    <h2 class="text-center text-primary fw-bold mb-4">Đăng ký thông tin</h2>
    
    <div class="row">
      <div class="col-md-10">
        <div class="card p-4 shadow-sm bg-white">
          <h4 class="mb-3">Form Đăng ký</h4>
          
          <form @submit.prevent="register">
            <div class="mb-3">
              <label class="form-label fw-bold">Họ và tên:</label>
              <input 
                v-model="info.name" 
                type="text" 
                class="form-control" 
                placeholder="Nhập họ tên..."
              />
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">Email:</label>
              <input 
                v-model="info.email" 
                type="email" 
                class="form-control" 
                placeholder="Nhập email..."
              />
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">Mật khẩu:</label>
              <input 
                v-model="info.password" 
                type="password" 
                class="form-control" 
                placeholder="Nhập mật khẩu..."
              />
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">Ngày sinh:</label>
              <input 
                v-model="info.dob" 
                type="date" 
                class="form-control" 
              />
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold d-block">Giới tính:</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" value="Nam" v-model="info.gender">
                <label class="form-check-label">Nam</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" value="Nữ" v-model="info.gender">
                <label class="form-check-label">Nữ</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" value="Khác" v-model="info.gender">
                <label class="form-check-label">Khác</label>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold d-block">Sở thích:</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="Đọc sách" v-model="info.hobbies">
                <label class="form-check-label">Đọc sách</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="Du lịch" v-model="info.hobbies">
                <label class="form-check-label">Du lịch</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="Code dạo" v-model="info.hobbies">
                <label class="form-check-label">Code dạo</label>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">Ngôn ngữ:</label>
              <select class="form-select" v-model="info.language">
                <option value="Tiếng Việt">Tiếng Việt</option>
                <option value="Tiếng Anh">Tiếng Anh</option>
                <option value="Tiếng Nhật">Tiếng Nhật</option>
              </select>
            </div>

            <button type="submit" class="btn btn-success w-100 mt-3">Đăng ký</button>
          </form>
        </div>
      </div>

      <div class="col-md-6" v-if="isSubmitted">
        <div class="card p-6 shadow-sm bg-light h-100">
          <h4 class="text-success mb-3"><i class="fa-solid fa-check-circle me-2"></i>Thông tin đã đăng ký</h4>
          <ul class="list-group">
            <li class="list-group-item"><strong>Họ tên:</strong> {{ info.name }}</li>
            <li class="list-group-item"><strong>Email:</strong> {{ info.email }}</li>
            <li class="list-group-item"><strong>Ngày sinh:</strong> {{ info.dob }}</li>
            <li class="list-group-item"><strong>Giới tính:</strong> {{ info.gender }}</li>
            <li class="list-group-item"><strong>Sở thích:</strong> {{ info.hobbies.join(', ') }}</li>
            <li class="list-group-item"><strong>Ngôn ngữ:</strong> {{ info.language }}</li>
          </ul>
          <button class="btn btn-secondary mt-3" @click="isSubmitted = false">
            Quay lại
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Khởi tạo đối tượng chứa thông tin form
const info = ref({
  name: '',
  email: '',
  password: '',
  dob: '',
  gender: 'Nam',        // Mặc định chọn Nam
  hobbies: [],          // Mảng rỗng để chứa nhiều sở thích
  language: 'Tiếng Việt' // Mặc định chọn Tiếng Việt
});

// Biến trạng thái hiển thị kết quả
const isSubmitted = ref(false);

// Hàm xử lý khi bấm Đăng ký
const register = () => {
  // Ở đây có thể thêm validate nếu cần
  if(info.value.name && info.value.email) {
    isSubmitted.value = true;
  } else {
    alert("Vui lòng nhập ít nhất Họ tên và Email!");
  }
}
</script>