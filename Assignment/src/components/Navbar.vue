<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top py-3">
    <div class="container">
      <router-link class="navbar-brand fw-bold text-primary fs-3" to="/">
        <i class="fa-solid fa-code-merge me-2"></i>TECH VUE
      </router-link>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mx-2">
            <router-link class="nav-link fw-bold" to="/"><i class="fa-solid fa-house me-1 text-primary"></i> Trang chủ</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link fw-bold text-success" to="/admin">
              <i class="fa-solid fa-square-plus me-1"></i> Đăng bài viết
            </router-link>
          </li>
        </ul>

        <div class="d-flex align-items-center gap-2">
          <router-link to="/login" class="btn btn-outline-primary rounded-pill px-4 fw-bold border-2">
            <i class="fa-solid fa-right-to-bracket me-1"></i> Đăng nhập
          </router-link>
          <router-link to="/login" class="btn btn-primary rounded-pill px-4 shadow-sm fw-bold">
            <i class="fa-solid fa-user-plus me-1"></i> Đăng ký
          </router-link>
        </div>
      </div>
    </div>
  </nav>
  <div style="margin-top: 85px;"></div>
</template>