<template>
  <div class="container mt-4">
    <div class="card p-4 shadow-sm" style="max-width: 500px; margin: 0 auto;">
      <h3 class="fw-bold mb-3">Bài 2: Xác định mùa</h3>
      
      <div class="mb-3">
        <label class="form-label">Nhập tháng của bạn:</label>
        <input 
          v-model.number="month" 
          type="number" 
          class="form-control" 
          placeholder="Nhập số..."
        />
      </div>

      <h4 class="fw-bold mt-3">
        
        <span v-if="month < 1 || month > 12" class="text-danger">
          Vui lòng nhập tháng từ 1 đến 12!
        </span>

        <span v-else-if="month <= 3" class="text-success">
          Mùa Xuân
        </span>

        <span v-else-if="month <= 6" class="text-warning">
          Mùa Hè
        </span>

        <span v-else-if="month <= 9" class="text-secondary">
          Mùa Thu
        </span>

        <span v-else class="text-primary">
          Mùa Đông
        </span>

      </h4>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const month = ref(1);
</script>