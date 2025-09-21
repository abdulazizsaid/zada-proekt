<template>
  <div class="bg-[#151F07] rounded-[40px] w-full h-1/2 overflow-hidden">
    <div class="p-[40px]">
      <p class="text-[#D1EDAA] text-[24px]">Foreign members from</p>
      <h2 class="text-[#7DBA28] text-[48px] font-bold mb-4">
        {{ total }} countries
      </h2>
    </div>
    <div class="relative w-full h-[426px]">
      <div class="absolute -bottom-22 w-[546px] h-[426px] overflow-hidden">
        <!-- scrolling container -->
        <div class="grid grid-cols-26 grid-rows-3 gap-3 animate-scroll overflow-hidden w-44 ">
          <!-- flaglar ikki marta duplicat qilinadi -->
          <div v-for="(flag, index) in duplicatedFlags" :key="index" class="w-[89.64263153076172px] h-[58.73245620727539px] shrink-0">
            <img :src="flag" alt="flag" class="w-full h-full object-cover rounded" />
          </div>
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
const duplicatedFlags = computed(() => [...props.flags, ...props.flags, ...props.flags, ...props.flags, ...props.flags, ...props.flags]);
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
  animation: scroll 35s linear infinite;
}
</style>
