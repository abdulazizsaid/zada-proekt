<template>
    <div class="flex w-full gap-5">
        <div class=" max-w-[33%] w-full bg-[#151F07] rounded-[40px] p-[40px]">
            <p class="text-[36px]">Number of Members</p>
            <DonutRingChart title="2999" :regions="['Tashkent', 'Regions']" :data="[2202, 2344]" :keys="[1, 2]"
                :colors="['#7DBA28', '#F16E16', '#FF9800', '#03A9F4', '#9C27B0']" height="290" link="/" />
            <h2 class="text-[36px]">Member Companies Activities</h2>
            <Linechart :data="[
                { name: 'IT Services', value: 1341 },
                { name: 'BPO and services', value: 580 },
                { name: 'Education', value: 502 },
                { name: 'SaaS Service', value: 496 },
                { name: 'GameDev & Design', value: 145 },
            ]" />
        </div>
        <div class="max-w-[33%] w-full bg-[#151F07] rounded-[40px] p-[40px]">
            <p class="text-[36px]">Number of Foreign Companies</p>
            <DonutRingChart title="2999" :regions="['Tashkent', 'Regions']" :data="[2202, 2344]" :keys="[1, 2]"
                :colors="['#7DBA28', '#F16E16', '#FF9800', '#03A9F4', '#9C27B0']" height="290" link="/" />
            <h2 class="text-[36px]">Foreign Companies Activities</h2>
            <Linechart :data="[
                { name: 'IT Services', value: 1341 },
                { name: 'BPO and services', value: 580 },
                { name: 'Education', value: 502 },
                { name: 'SaaS Service', value: 496 },
                { name: 'GameDev & Design', value: 145 },
            ]" />
        </div>
        <div class="flex flex-col gap-6  max-w-[33%] w-full">
            <FlagsCard :total="64" :flags="[
                '/vite.svg',
                '/vite.svg',
                '/vite.svg',
                '/vite.svg',
                '/vite.svg',
                '/vite.svg',
                '/vite.svg',
                '/vite.svg',
                '/vite.svg',
                '/vite.svg',
                '/vite.svg',
                '/vite.svg',
            ]" />
            <Regioncard />
        </div>
    </div>
    <div>

    </div>
</template>

<script setup>
import DonutRingChart from './components/DonutRingChart.vue';
import FlagsCard from './components/FlagsCard.vue';
import Flags from './components/FlagsCard.vue';
import Linechart from './components/linechart.vue';
import Regioncard from './components/regioncard.vue';

</script>