<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <p class="mb-10 text-7xl">{{ msg }}</p>
  <p class="text-5xl  text-gray-500">
    welcome our starter 
  </p>
  <p class="text-4xl text-gray-500">
    if you have more questions you can find ansvers in readme files
  </p>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
