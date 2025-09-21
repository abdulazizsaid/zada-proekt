<template>
    <div class="w-full flex items-center justify-center min-h-[100dvh_-_104px]">
        <Transition name="fade-scale" mode="out-in">
            <div>
                <Header :title="currentIndex == 3 ? 'IT Park Programs and Infrastructure' : 'Uzbekistan – Central Asia’s fastest growing ecosystem'" />
                <component class="min-h-[100dvh_-_104px] min-w-[1946px]" :is="currentComponent" :key="currentIndex" />
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, Transition } from "vue";

import Header from '@/shared/components/templates/header/index.vue'
// componentlar import qilinadi
import First from "./templates/first/index.vue";
import Second from "./templates/second/index.vue";
import Third from "./templates/third/index.vue";
import Fourth from "./templates/fourth/index.vue";

const components = [First, Second, Third, Fourth];
const currentIndex = ref(0);
const currentComponent = computed(() => components[currentIndex.value]);

let interval;

onMounted(() => {
    interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % components.length;
    }, 20000); // har 6 sekundda almashadi
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
    transition: all 0.8s ease;
}

.fade-scale-enter-from {
    opacity: 0;
    transform: scale(0.8);
}

.fade-scale-enter-to {
    opacity: 1;
    transform: scale(1);
}

.fade-scale-leave-from {
    opacity: 1;
    transform: scale(1);
}

.fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>
