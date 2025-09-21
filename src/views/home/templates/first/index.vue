<template>
    <div class="flex w-full gap-5">
        <div class=" max-w-[33%] w-full bg-[#151F07] rounded-[40px] p-[40px]">
            <p class="text-[36px]">Number of Members</p>
            <DonutRingChart title="2999" :regions="['Tashkent', 'Regions']" :data="[1870, 1129]" :keys="[1, 2]"
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
            <DonutRingChart title="800" :regions="['Tashkent', 'Regions']" :data="[586, 214]" :keys="[1, 2]"
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
            <FlagsCard :total="64" :flags="flags" />
            <Regioncard />
        </div>
    </div>
</template>

<script setup>
import DonutRingChart from './components/DonutRingChart.vue';
import FlagsCard from './components/FlagsCard.vue';
import Linechart from './components/linechart.vue';
import Regioncard from './components/Regioncard.vue';

const flags = [];
for (let i = 1; i<=24; i++) {
    flags.push(`/first/flag/${i}.svg`)
}
</script>