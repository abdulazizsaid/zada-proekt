<template>
    <div>
        <Header
            :title="currentIndex == 3 ? 'IT Park Programs and Infrastructure' : 'Uzbekistan – Central Asia’s fastest growing ecosystem'" />
        <div class="flex w-full gap-8">
            <div class="max-w-[681px] w-full bg-[#151F07] rounded-[40px] p-[40px]">
                <p class="title2 mb-8">Number of Members</p>
                <DonutRingChart title="3286" :regions="['Tashkent', 'Regions']" :data="[2021, 1265]" :keys="[1, 2]"
                    :colors="['#7DBA28', '#F16E16', '#FF9800', '#03A9F4', '#9C27B0']" height="264" link="/" />
                <h2 class="title2 mt-9 mb-8">Member Companies Activities</h2>
                <Linechart :data="[
                    { name: 'IT Services', value: 1257 },
                    { name: 'BPO and services', value: 634 },
                    { name: 'Education', value: 509 },
                    { name: 'SaaS Service', value: 733 },
                    { name: 'GameDev & Design', value: 153 },
                ]" />
            </div>
            <div class="max-w-[681px] w-full bg-[#151F07] rounded-[40px] p-[40px]">
                <p class="title2 mb-8">Number of Foreign Companies</p>
                <DonutRingChart title="898" :regions="['Tashkent', 'Regions']" :data="[629, 269]" :keys="[1, 2]"
                    :colors="['#7DBA28', '#F16E16', '#FF9800', '#03A9F4', '#9C27B0']" height="264" link="/" />
                <h2 class="title2 mt-9 mb-8">Foreign Companies Activities</h2>
                <Linechart :data="[
                    { name: 'IT Services', value: 385 },
                    { name: 'BPO and services', value: 168 },
                    { name: 'Education', value: 41 },
                    { name: 'SaaS Service', value: 250 },
                    { name: 'GameDev & Design', value: 54 },
                ]" />
            </div>
            <div class="flex flex-col gap-8  max-w-[476px] w-full">
                <FlagsCard :total="67" :flags="flags" />
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