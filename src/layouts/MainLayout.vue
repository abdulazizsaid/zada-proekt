<template>
  <!-- start #mainWrap-->
  <div id="mainWrap">
    <Header />
    <div class="container mx-auto w-full">
        <router-view />
    </div>
    <!-- <Footer /> -->
  </div>
  <!-- end #mainWrap-->
</template>

<script setup>

import Header from '@/shared/components/templates/header/index.vue'
</script>
