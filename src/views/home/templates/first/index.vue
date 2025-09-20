<template>
    <div class="w-full">
        <div class="flex w-full gap-5">
            <div class="w-full bg-[#151F07] rounded-xl p-6">
                <p>Number of Members</p>
                <DonutRingChart title="2999" :regions="['Tashkent 2202', 'Regions 2344']" :data="[4, 2]" :keys="[1, 2]"
                    :colors="['#7DBA28', '#F16E16', '#FF9800', '#03A9F4', '#9C27B0']" height="290" link="/" />
                <Linechart :data="[
                    { name: 'IT Services', value: 1341 },
                    { name: 'BPO and services', value: 580 },
                    { name: 'Education', value: 502 },
                    { name: 'SaaS Service', value: 496 },
                    { name: 'GameDev & Design', value: 145 },
                ]" />
            </div>
            <div class="w-full bg-[#151F07] rounded-xl p-6">
                <DonutRingChart title="2999" :regions="[1, 2]" :data="[1, 2]" :keys="[1, 2]"
                    :colors="['#F16E16', '#7DBA28', '#FF9800', '#03A9F4', '#9C27B0']" height="290" link="/" />
                <Linechart :data="[
                    { name: 'IT Services', value: 1341 },
                    { name: 'BPO and services', value: 580 },
                    { name: 'Education', value: 502 },
                    { name: 'SaaS Service', value: 496 },
                    { name: 'GameDev & Design', value: 145 },
                ]" />
            </div>
            <div>
                
            </div>
        </div>
        <div>

        </div>
    </div>
</template>

<script setup>
import DonutRingChart from './components/DonutRingChart.vue';
import Linechart from './components/linechart.vue';

</script>