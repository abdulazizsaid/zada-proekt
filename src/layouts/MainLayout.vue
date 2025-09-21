<template>
  <!-- start #mainWrap-->
  <div id="mainWrap" class="bg-[#010200]">
    <div class="mx-auto innitialed-cont">
      <Header />
      <div class="w-full px-10 py-6 ">
        <router-view />
      </div>
      <!-- <Footer /> -->
    </div>
  </div>
  <!-- end #mainWrap-->
</template>

<script setup>

import Header from '@/shared/components/templates/header/index.vue'
</script>

<style>
:root {
  --sidebar-width-expanded: 250px;
  /* kerakli qiymatni yozasiz */
}

.innitialed-cont {
  /* margin-left: auto !important; */
  max-width: 1946px;
}

/* @media (max-width: 575.98px) {
  .innitialed-cont {
    min-width: 100%;
    margin: 0 auto !important;
  }
}

@media (min-width: 576px) {
  .innitialed-cont {
    min-width: 540px;
    max-width: 540px;
    margin: 0 auto !important;
  }
}

@media (min-width: 768px) {
  .innitialed-cont {
    min-width: 720px;
    max-width: 720px;
    margin: 0 auto !important;
  }
}

@media (min-width: 992px) {
  .innitialed-cont {
    min-width: calc(960px);
    max-width: 960px;
    margin: 0 auto !important;
  }
}

@media (min-width: 1400px) {
  .innitialed-cont {
    min-width: calc(1200px);
    max-width: 1400px;
    margin: 0 auto !important;
  }
}

@media (min-width: 1600px) {
  .innitialed-cont {
    min-width: calc(1400px);
    max-width: 1600px;
    margin: 0 auto !important;
  }
}

@media (min-width: 1800px) {
  .innitialed-cont {
    min-width: calc(1600px);
    max-width: 1800px;
    margin: 0 auto !important;
  }
} */
</style>
