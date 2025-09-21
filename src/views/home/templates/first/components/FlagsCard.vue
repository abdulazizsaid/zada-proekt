<template>
  <div class="bg-[#151F07] rounded-[40px] w-full overflow-hidden">
    <div class="p-[40px] pb-[80px]">
      <p class="p_info">Foreign members from</p>
      <h2 class="num_info mb-4">
        {{ total }} countries
      </h2>
    </div>
    <div class="relative w-full h-[216px]">
      <div class="w-[476px] h-[216px] space-y-[20px] overflow-hidden">
        <BrandCarousel :direction="'left'" :brands="flags" />
        <BrandCarousel :direction="'right'" :brands="flags" />
        <BrandCarousel :direction="'left'" :brands="flags" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import BrandCarousel from "./BrandCarousel.vue"

const props = defineProps({
  total: {
    type: Number,
    default: 64,
  },
  flags: {
    type: Array,
    required: true,
  },
});

// Flaglarni cheksiz qilish uchun 2x duplicat qilamiz
const duplicatedFlags = computed(() => [...props.flags, ...props.flags, ...props.flags, ...props.flags, ...props.flags, ...props.flags]);
</script>

<style scoped>
.p_info {
  color: #D1EDAA;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
}


.num_info {
  color: #7DBA28;
  font-weight: 900;
  font-size: 48px;
  line-height: 60px;
}
</style>
