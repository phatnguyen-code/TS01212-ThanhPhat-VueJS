<template>
  <div class="col-sm-9 p-4 m-auto border rounded shadow-sm mt-5 bg-white">
    <h3 class="text-center text-primary fw-bold mb-4">Quản lý công việc</h3>
    
    <form @submit.prevent="addList">
      <div class="mb-3">
        <label class="form-label">Tên công việc:</label>
        <input 
          v-model="newTodo" 
          type="text" 
          class="form-control" 
          placeholder="Nhập tên công việc..."
          required
        />
        <button class="btn btn-primary" type="submit">Thêm công việc</button>
      </div>
    </form>

    <ul class="list-group mt-3">
      <li 
        v-for="(job, index) in jobs" 
        :key="index" 
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span class="fw-bold">{{ job }}</span>
        
        <button @click="removeList(index)" class="btn btn-danger btn-sm">
          Xóa
        </button>
      </li>

      <li v-if="jobs.length === 0" class="list-group-item text-center text-muted">
        Danh sách trống.
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newTodo = ref('');
const jobs = ref(['Ăn sáng', 'Đi học', 'Chơi bóng rổ']);

// Hàm thêm
const addList = () => {
  if (newTodo.value.trim()) {
    jobs.value.push(newTodo.value);
    newTodo.value = '';
  }
}

const removeList = (index) => {
  jobs.value.splice(index, 1);
}
</script>