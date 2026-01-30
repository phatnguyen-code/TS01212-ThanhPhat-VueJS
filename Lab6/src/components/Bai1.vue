<template>
  <div class="col-md-6 m-auto">
    <div class="card shadow-sm p-4 mt-4">
      <h2 class="text-center text-primary mb-4">
        <i class="fa-solid fa-graduation-cap me-2"></i>Xếp loại học lực
      </h2>
      
      <div class="mb-3">
        <label class="form-label fw-bold">Nhập điểm trung bình:</label>
        <input 
          v-model.number="score" 
          type="number" 
          class="form-control" 
          placeholder="Nhập số điểm (0-10)..."
          min="0" max="10"
        />
      </div>

      <div class="mt-3 text-center">
        <div v-if="score < 0 || score > 10" class="alert alert-secondary">
          Vui lòng nhập điểm hợp lệ từ 0 đến 10!
        </div>

        <div v-else-if="score < 5" class="alert alert-danger">
          <i class="fa-solid fa-face-frown me-2"></i>Xếp loại: <strong>Yếu</strong>
        </div>

        <div v-else-if="score < 6.5" class="alert alert-warning">
          <i class="fa-solid fa-face-meh me-2"></i>Xếp loại: <strong>Trung bình</strong>
        </div>

        <div v-else-if="score < 8" class="alert alert-info">
          <i class="fa-solid fa-face-smile me-2"></i>Xếp loại: <strong>Khá</strong>
        </div>

        <div v-else-if="score < 9" class="alert alert-success">
          <i class="fa-solid fa-face-laugh-beam me-2"></i>Xếp loại: <strong>Giỏi</strong>
        </div>

        <div v-else class="alert alert-primary">
          <i class="fa-solid fa-trophy me-2"></i>Xếp loại: <strong>Xuất sắc</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const score = ref(null);
</script>