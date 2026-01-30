<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4 text-primary">Kiến thức sức khỏe cộng đồng</h1>
    
    <div class="row">
      <div class="col-sm-4 mb-4" v-for="(item, index) in items" key="index">
        <div class="card h-100 shadow-sm">
          <img :src="item.image" alt="Hình ảnh" class="card-img-top" tyle="height: 200px; object-fit: cover;"/>
          
          <div class="card-body">
            <h3 class="card-title fs-5 fw-bold">{{ item.title }}</h3>
            <p class="card-text text-muted">{{ item.content }}</p>
            
            <button class="btn btn-info text-white">
              <i class="fa-solid fa-circle-info me-1"></i> Xem chi tiết
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import img1 from '../assets/images/eat-clean.png'; 
import img2 from '../assets/images/tap-pilates1.jpg'; 
import img3 from '../assets/images/tim-mach.jpg'; 
import { ref } from 'vue';

const items = ref([ 
    { title: '8 loại rau củ quả giàu canxi', content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ quả giàu canxi...', image: img1 
}, 
    { title: 'Các loại gia vị tốt cho sức khỏe', content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị khác. Với hương vị cay nồng, các loại gia vị này không chỉ giúp món ăn thêm ngon miệng mà còn...', 
image: img2 }, 
    { title: '9 loại đậu bổ dưỡng nên dùng nhiều', content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất. Ăn các loại đậu này mỗi ngày giúp giảm nguy cơ mắc bệnh tim mạch, tiểu đường...', image: 
img3 }, 
]); 
</script>

<style scoped>
.card {
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-5px);
}
</style>