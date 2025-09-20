<template>
  <div class="bg-[#151F07] p-[40px] rounded-[40px] w-full h-1/2 overflow-hidden">
    <p class="text-[#D1EDAA] text-[24px]">Foreign members from</p>
    <h2 class="text-[#7DBA28] text-[48px] font-bold mb-4">
      {{ total }} countries
    </h2>

    <div class="relative w-[476px] h-40 overflow-hidden">
      <!-- scrolling container -->
      <div class="grid grid-cols-12 gap-3 animate-scroll overflow-hidden w-44">
        <!-- flaglar ikki marta duplicat qilinadi -->
        <div
          v-for="(flag, index) in duplicatedFlags"
          :key="index"
          class="w-12 h-8 shrink-0"
        >
          <img
            :src="flag"
            alt="flag"
            class="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

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
const duplicatedFlags = computed(() => [...props.flags, ...props.flags, ...props.flags, ...props.flags]);
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  width: max-content;
  animation: scroll 10s linear infinite;
}
</style>
