<template>
  <div class="col-sm-4 m-5">
    <h2>Bình luận bài viết</h2>

    <div class="card">
      <img src="../assets/images/eat-clean.png" alt="Hình ảnh" />
      <div class="card-body">
        <h3 class="card-title">8 loại rau củ giàu canxi</h3>
        <p class="card-text">
          Canxi là khoáng chất cần thiết đối với cơ thể người.
          Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất.
          Có 8 loại rau củ giàu canxi...
        </p>
      </div>
    </div>

    <!-- Form nhập bình luận -->
    <form @submit.prevent="submitComment">
      <div class="mt-3">
        <textarea
          id="commentText"
          cols="60"
          v-model="commentText"
          placeholder="Nhập bình luận của bạn"
        ></textarea>
      </div>

      <button type="submit" class="btn btn-success mt-2">
        Gửi bình luận
      </button>
    </form>

    <!-- Danh sách bình luận -->
    <div v-if="comments.length" class="mt-3">
      <h5>Danh sách bình luận:</h5>
      <ul style="list-style-type: circle;">
        <li v-for="(comment, index) in comments" :key="index">
          <p>
            <strong>{{ comment.name }}:</strong>
            {{ comment.text }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Nhận username từ component cha
const props = defineProps({
  username: {
    type: String,
    required: true
  }
})

// Nội dung bình luận
const commentText = ref('')

// Mảng lưu danh sách bình luận
const comments = ref([])

// Hàm xử lý gửi bình luận
function submitComment() {
  if (commentText.value.trim() !== '') {
    comments.value.push({
      name: props.username,
      text: commentText.value
    })

    // Reset textarea
    commentText.value = ''
  }
}
</script>
