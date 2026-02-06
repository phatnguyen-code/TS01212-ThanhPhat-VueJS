<template>
  <div class="blog-list">
    <h1>Danh sách Blog</h1>
    <ul>
      <li><router-link :to="{ name: 'BlogPost', params: { id: 1 }}">Bài viết số 1</router-link></li>
      <li><router-link :to="{ name: 'BlogPost', params: { id: 2 }}">Bài viết số 2</router-link></li>
      <li><router-link :to="{ name: 'BlogPost', params: { id: 99 }}">Bài viết số 99</router-link></li>
    </ul>
  </div>
</template>