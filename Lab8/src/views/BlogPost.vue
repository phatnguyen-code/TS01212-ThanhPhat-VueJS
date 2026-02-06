<template>
  <div class="blog-post">
    <h1>Chi tiết bài viết</h1>
    <h3>Đang xem bài viết có ID: {{ $route.params.id }}</h3>
    
    <p>Nội dung chi tiết của bài viết {{ $route.params.id }} sẽ nằm ở đây.</p>
    
    <button @click="goBack">Quay lại danh sách</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push({ name: 'BlogList' }); // Điều hướng bằng tên [cite: 44]
    }
  }
}
</script>