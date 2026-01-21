<template>  
          <div class="card-body p-4">
            <div class="mb-4">
              <label class="form-label fw-bold">Nhập năm sinh:</label>
              <input 
                type="number" 
                v-model.number="birthYear" 
                class="form-control form-control-lg" 
                placeholder="Ví dụ: 2000"
              />
            </div>

            <div v-if="birthYear" class="result-box p-3 rounded bg-light border">
              <h5 class="text-secondary">Năm sinh: <span class="text-dark">{{ birthYear }}</span></h5>
              <h5 class="text-secondary">Số tuổi: <span class="text-danger">{{ age }}</span></h5>
              
              <hr>

              <div>
                <span class="fw-bold">Phân loại:</span>
                <span :class="['badge', ageBadgeClass]" style="font-size: 1rem;">
                  {{ ageText }}
                </span>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  data() {
    return {
      birthYear: null,
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
    age() {
      if (!this.birthYear || this.birthYear > this.currentYear) return 0;
      return this.currentYear - this.birthYear;
    },
    ageText() {
      const a = this.age;
      if (a === 0 && !this.birthYear) return "";
      if (a <= 12) return "Trẻ em";
      if (a <= 18) return "Thiếu niên";
      if (a <= 35) return "Thanh niên";
      if (a <= 60) return "Trung niên";
      return "Lớn tuổi";
    },
    ageBadgeClass() {
      const a = this.age;
      if (a <= 12) return "bg-info";
      if (a <= 18) return "bg-success";
      if (a <= 35) return "bg-primary";
      if (a <= 60) return "bg-warning text-dark";
      return "bg-danger";
    }
  },
};
</script>
