<template>
  <div class="m-5 col-sm-6">
    <h2 class="text-center">Đăng nhập</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label>Tên đăng nhập:</label>
        <input v-model="username" type="text" class="form-control" placeholder="Nhập tên đăng nhập" />
      </div>
      <div class="mb-3">
        <label>Mật khẩu:</label>
        <input v-model="password" type="password" class="form-control" placeholder="Nhập mật khẩu" />
      </div>
      <button type="submit" class="btn btn-primary">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['LoggedIn']);
const username = ref('');
const password = ref('');

function handleLogin() {
  if (username.value) {
    // Phát ra sự kiện 'LoggedIn' kèm tên người dùng
    emit('LoggedIn', username.value);
  }
}
</script>