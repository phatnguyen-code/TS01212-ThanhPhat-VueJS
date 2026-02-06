<template>
  <div class="row g-4">
    <div class="col-md-6 col-lg-4" v-for="post in posts" :key="post.id">
      <div class="card h-100 border-0 shadow-sm">
        <div class="card-body">
          <h5 class="card-title text-primary fw-bold">{{ post.title }}</h5>
          <p class="card-text text-muted mb-3">
            {{ post.content.substring(0, 100) }}...
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <img :src="post.authorAvatar" alt="Author" class="rounded-circle me-2" width="32" height="32">
              <small class="text-muted">{{ post.author }}</small>
            </div>
            <router-link :to="'/post/' + post.id" class="btn btn-sm btn-primary">
              Xem
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 12px;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.btn-sm {
  border-radius: 6px;
  padding: 0.25rem 0.75rem;
}
</style>