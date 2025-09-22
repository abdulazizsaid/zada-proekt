<template>
    <div class="w-full flex items-center justify-center min-h-[100dvh_-_104px]">

        <Transition name="fade-scale" mode="out-in">
            <keep-alive>
                <component class="min-h-[100dvh_-_104px] min-w-[1882px]" :is="currentComponent" :key="currentIndex" />
            </keep-alive>
        </Transition>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, Transition } from "vue";

// componentlar import qilinadi
import First from "./templates/first/index.vue";
import Second from "./templates/second/index.vue";
import Third from "./templates/third/index.vue";
import Fourth from "./templates/fourth/index.vue";

const components = [First, Second, Third, Fourth];
const currentIndex = ref(2);
const currentComponent = computed(() => components[currentIndex.value]);

let interval;

onMounted(() => {
    // interval = setInterval(() => {
    //     currentIndex.value = (currentIndex.value + 1) % components.length;
    // }, 15000); // har 7 sekundda almashadi
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
    transition: all 0.5s ease-out;
}

.fade-scale-enter-from {
    opacity: 0.5;
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
    opacity: 0.2;
    transform: scale(0.8);
}
</style>