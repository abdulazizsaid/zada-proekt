<template>
    <div class="w-full space-y-5 rounded-lg">
        <div v-for="(item, index) in data" :key="index" class="flex items-end justify-between gap-6">
            <!-- Chap tomonda nom va progress bar -->
            <div class="flex-1 mr-4">
                <p class="p_info">{{ item.name }}</p>
                <div
                    class="w-full h-[27px] rounded-sm overflow-hidden mt-[11.5px]">
                    <div class="h-full rounded-sm transition-all duration-500"
                        style="background: linear-gradient(90deg, #385412 0%, #7DBA28 100%);" :style="{
                            width: ((item.value / maxValue) * 100) + '%',
                        }"></div>
                </div>
            </div>
            <!-- O‘ng tomonda son -->
            <p class="title3 -mb-1">{{ item.value }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
    data: {
        type: Array,
        required: true, // [{ name: "IT Services", value: 1341 }, ...]
    },
    colors: {
        type: Array,
        default: () => ["#63D047", "#5DBF44", "#57AE41", "#519E3D", "#4B8D3A"],
    },
});

// Maksimal qiymat – bar uzunligini hisoblash uchun
const maxValue = computed(() => Math.max(...props.data.map(d => d.value)));
</script>

<style scoped>
/* Progress animatsiyasi */
div[style] {
    transition: width 0.6s ease-in-out;
}

.p_info {
    color: #D1EDAA;
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
}

.title3 {
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    color: #7DBA28;
}
</style>
