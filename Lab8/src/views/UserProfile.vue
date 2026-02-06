<template>
  <div class="user-profile">
    <h1>Trang Hồ Sơ Người Dùng</h1>
    
    <nav class="sub-nav">
      <router-link :to="{ name: 'UserProfileInfo' }">Thông tin</router-link> |
      <router-link :to="{ name: 'UserProfileSettings' }">Cài đặt</router-link>
    </nav>
    <hr>
    
    <router-view></router-view>
  </div>
</template>

<style scoped>
.sub-nav a {
    color: green;
    margin: 0 10px;
}
</style>