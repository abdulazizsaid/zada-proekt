<template>
    <div class="w-full">
        <div class="flex w-full">
            <div class="w-full bg-[#151F07] border-2xl">
                <p>Number of Members</p>
                <DonutRingChart title="2999" :regions="['Tashkent 220', 'Regions 2344']" :data="[1, 2]" :keys="[1, 2]"
                    :colors="['#FFC107', '#4CAF50', '#FF9800', '#03A9F4', '#9C27B0']" height="290" link="/" />
            </div>
            <div class="w-full">
                <DonutRingChart title="2999" :regions="[1, 2]" :data="[1, 2]" :keys="[1, 2]"
                    :colors="['#FFC107', '#4CAF50', '#FF9800', '#03A9F4', '#9C27B0']" height="290" link="/" />
            </div>
        </div>
        <div>

        </div>
    </div>
</template>

<script setup>
import DonutRingChart from './components/DonutRingChart.vue';

</script>