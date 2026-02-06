<template>
  <div class="login">
    <h1>Đăng nhập</h1>
    <p>Nhấn nút bên dưới để giả lập đăng nhập.</p>
    <button @click="handleLogin">Đăng nhập ngay</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      localStorage.setItem('isAuthenticated', 'true');
      alert('Đăng nhập thành công!');
      
      this.$router.push({ name: 'Dashboard' });
    }
  }
}
</script>