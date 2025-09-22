<template>
  <div class="bg-[#151F07] rounded-[40px] w-full overflow-hidden" style="corner-shape: round;">
    <div class="p-[40px] pb-[64px]">
      <p class="p_info">Foreign members from</p>
      <h2 class="num_info mb-4">
        {{ total }} countries
      </h2>
    </div>
    <div class="relative w-full h-[216px]">
      <div class="w-[456px] h-[216px] space-y-[20px] overflow-hidden relative p-[1px]">
        <!-- gradient chap -->
        <div style="background: linear-gradient(90deg, #151F07 0%, rgba(21, 31, 7, 0) 100%);" class="absolute -left-1 top-0 w-[40px] h-full z-10 pointer-events-none 
                 to-transparent"></div>

        <!-- gradient o'ng -->
        <div style="background: linear-gradient(90deg, rgba(21, 31, 7, 0) 0%, #151F07 100%);" class="absolute -right-2 top-0 w-[40px] h-full z-10 pointer-events-none 
                bg-gradient-to-l from-black/40 to-transparent"></div>

        <BrandCarousel :direction="'left'" :brands="flags.slice(0, 7)" />
        <BrandCarousel :direction="'right'" :brands="flags.slice(7, 14)" />
        <BrandCarousel :direction="'left'" :brands="flags.slice(14, 21)" />
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
