<template>
  <div class="main-layout bg-light pb-5">
    <div class="container-fluid px-0 mb-5">
      <div class="hero-banner d-flex align-items-center justify-content-center text-white text-center shadow" 
           style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://picsum.photos/1920/400?coding'); height: 400px; background-size: cover; background-position: center;">
        <div class="container">
          <h1 class="display-3 fw-bold mb-3">XÂY DỰNG BLOG VỚI VUEJS</h1>
          <p class="fs-4 mb-4 opacity-75">Thực hành Data Binding, Event Handling và Authentication chuyên nghiệp [cite: 18]</p>
          <div class="d-flex justify-content-center gap-3">
             <router-link to="/admin" class="btn btn-warning btn-lg rounded-pill px-5 fw-bold shadow">
               <i class="fa-solid fa-pen-fancy me-2"></i>Viết bài ngay
             </router-link>
             <router-link to="/login" class="btn btn-outline-light btn-lg rounded-pill px-5 fw-bold">
               Tham gia cộng đồng
             </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row g-4">
        <aside class="col-lg-3">
          <div class="card border-0 shadow-sm rounded-4 mb-4 bg-gradient-primary text-white overflow-hidden position-relative" style="background: linear-gradient(45deg, #4e73df, #224abe);">
            <div class="card-body p-4 text-center position-relative" style="z-index: 1;">
              <i class="fa-solid fa-cloud-arrow-up fa-3x mb-3"></i>
              <h5 class="fw-bold">Bạn có ý tưởng mới?</h5>
              <p class="small opacity-75 mb-4">Mỗi bài viết là một bước tiến trong sự nghiệp lập trình của bạn.</p>
              <router-link to="/admin" class="btn btn-white w-100 rounded-pill fw-bold text-primary shadow-lg py-2">
                <i class="fa-solid fa-plus me-1"></i> TẠO BÀI VIẾT MỚI
              </router-link>
            </div>
            <i class="fa-solid fa-code position-absolute bottom-0 end-0 opacity-25" style="font-size: 100px; transform: translate(20%, 20%)"></i>
          </div>

          <div class="card border-0 shadow-sm rounded-4 mb-4">
            <div class="card-header bg-white border-0 pt-4 px-4 d-flex align-items-center">
              <div class="bg-primary-subtle p-2 rounded-3 me-2">
                <i class="fa-solid fa-folder-tree text-primary"></i>
              </div>
              <h6 class="fw-bold m-0">CHUYÊN MỤC</h6>
            </div>
            <div class="card-body px-4 pb-4">
              <div class="list-group list-group-flush small">
                <a href="#" class="list-group-item list-group-item-action border-0 px-0 d-flex justify-content-between align-items-center py-3">
                  <span><i class="fa-brands fa-vuejs me-2 text-success fs-5"></i>Vue.js Component [cite: 36]</span>
                  <span class="badge bg-light text-dark border rounded-pill px-3">12</span>
                </a>
              </div>
            </div>
          </div>
        </aside>

        <main class="col-lg-9">
          <div class="d-flex justify-content-between align-items-center mb-4 border-start border-4 border-primary ps-3">
            <h3 class="fw-bold m-0 text-dark">Bản tin công nghệ mới</h3>
            <span class="text-muted small"><i class="fa-solid fa-check-circle text-success me-1"></i>Đã cập nhật</span>
          </div>

          <div class="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden post-card" v-for="i in 2" :key="i">
            <div class="row g-0">
              <div class="col-md-5 position-relative">
                <img :src="'https://picsum.photos/600/400?sig=' + i" class="img-fluid h-100 object-fit-cover">
                <div class="position-absolute top-0 start-0 m-3">
                  <span class="badge bg-white text-dark shadow-sm px-3 rounded-pill">Hot News</span>
                </div>
              </div>
              <div class="col-md-7 p-4 d-flex flex-column">
                  <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary-subtle text-primary rounded-pill px-3">Frontend</span>
                    <small class="text-muted ms-auto"><i class="fa-regular fa-calendar-days me-1"></i> 22/01/2026</small>
                  </div>
                  <h4 class="fw-bold mb-3 hover-text-primary">Xây dựng ứng dụng Blog tương tác với Vue.js và Bootstrap</h4>
                  <p class="text-muted small flex-grow-1">Ứng dụng cho phép đăng ký tài khoản, đăng nhập, đăng bài và bình luận[cite: 13].</p>
                  
                  <div class="bg-light rounded-4 p-3 mt-3 border border-white shadow-inner">
                    <div class="d-flex gap-2 mb-2 align-items-center">
                      <img src="https://i.pravatar.cc/32" class="rounded-circle border border-2 border-white shadow-sm">
                      <div class="small p-2 bg-white rounded-4 border-0 w-100 shadow-sm px-3">
                        <span class="fw-bold text-primary small">Admin:</span> <span class="text-secondary small">Cảm ơn các bạn đã ủng hộ dự án!</span>
                      </div>
                    </div>
                    <div class="input-group input-group-sm mt-3 bg-white rounded-pill p-1 shadow-sm border">
                      <input type="text" class="form-control border-0 px-3 bg-transparent" placeholder="Viết phản hồi...">
                      <button class="btn btn-primary rounded-pill px-3"><i class="fa-solid fa-paper-plane"></i></button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-white { background: white; color: #4e73df; border: none; }
.btn-white:hover { background: #f8f9fa; color: #224abe; }
.shadow-inner { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05); }
.post-card { transition: all 0.3s ease; }
.post-card:hover { transform: scale(1.01); box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important; }
.hover-text-primary:hover { color: #4e73df; cursor: pointer; }
</style>