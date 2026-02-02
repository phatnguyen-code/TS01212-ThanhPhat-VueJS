<template>
    <div class="container">
        <LoginComponent v-if="!isLoggedIn" @LoggedIn="handleLoginSuccess" />
        <CommentComponent v-else :username="loggedInUser" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginComponent from './LoginComponent.vue';
import CommentComponent from './CommentComponent.vue';

// Quản lý trạng thái đăng nhập và tên người dùng
const isLoggedIn = ref(false)
const loggedInUser = ref('')

// Hàm xử lý khi đăng nhập thành công
function handleLoginSuccess(username) {
  loggedInUser.value = username
  isLoggedIn.value = true
}
</script>