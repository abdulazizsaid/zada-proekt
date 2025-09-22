<template>
    <div>
        <Header
            :title="currentIndex == 3 ? 'IT Park Programs and Infrastructure' : 'Uzbekistan – Central Asia’s fastest growing ecosystem'" />
        <div class="flex w-full gap-8">
            <div class="max-w-[681px] w-full bg-[#151F07] rounded-[40px] p-[40px]">
                <p class="title2 mb-8">Number of Members</p>
                <DonutRingChart title="3064" :regions="['Tashkent', 'Regions']" :data="[1909, 1155]" :keys="[1, 2]"
                    :colors="['#7DBA28', '#F16E16', '#FF9800', '#03A9F4', '#9C27B0']" height="264" link="/" />
                <h2 class="title2 mt-9 mb-8">Member Companies Activities</h2>
                <Linechart :data="[
                    { name: 'IT Services', value: 1341 },
                    { name: 'BPO and services', value: 580 },
                    { name: 'Education', value: 502 },
                    { name: 'SaaS Service', value: 496 },
                    { name: 'GameDev & Design', value: 145 },
                ]" />
            </div>
            <div class="max-w-[681px] w-full bg-[#151F07] rounded-[40px] p-[40px]">
                <p class="title2 mb-8">Number of Foreign Companies</p>
                <DonutRingChart title="815" :regions="['Tashkent', 'Regions']" :data="[595, 220]" :keys="[1, 2]"
                    :colors="['#7DBA28', '#F16E16', '#FF9800', '#03A9F4', '#9C27B0']" height="264" link="/" />
                <h2 class="title2 mt-9 mb-8">Foreign Companies Activities</h2>
                <Linechart :data="[
                    { name: 'IT Services', value: 1341 },
                    { name: 'BPO and services', value: 580 },
                    { name: 'Education', value: 502 },
                    { name: 'SaaS Service', value: 496 },
                    { name: 'GameDev & Design', value: 145 },
                ]" />
            </div>
            <div class="flex flex-col gap-8  max-w-[476px] w-full">
                <FlagsCard :total="63" :flags="flags" />
                <Regioncard />
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '@/shared/components/templates/header/index.vue'
import DonutRingChart from './components/DonutRingChart.vue';
import FlagsCard from './components/FlagsCard.vue';
import Linechart from './components/linechart.vue';
import Regioncard from './components/Regioncard.vue';

const flags = [];
for (let i = 1; i <= 21; i++) {
    flags.push(`/first/flag/${i}.svg`)
}
</script>

<style scoped>
.title2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #F3FAEA;
}
</style>