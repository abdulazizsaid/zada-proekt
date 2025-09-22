<template>
    <div>
        <Header
            :title="currentIndex == 3 ? 'IT Park Programs and Infrastructure' : 'Uzbekistan – Central Asia’s fastest growing ecosystem'" />
        <div>
            <div class="flex w-full gap-8 mb-8">
                <div class="max-w-[40%] min-w-[45%] w-full bg-[#151F07] rounded-[40px] p-[40px]">
                    <p class="text-[36px] mb-6 font-bold">Export Geography</p>
                    <MapChart />
                    <div class="flex gap-8 bg-[#151F07] px-4 rounded-xl mt-1.5">
                        <div v-for="(item, i) in regions" :key="i" class="flex items-center gap-1">
                            <!-- rangli doira -->
                            <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: item.color }"></span>
                            <!-- nom va foiz -->
                            <span class="text-[#D1EDAA] text-[20px]">
                                {{ item.name }}
                                <span :style="{ color: item.color }" class="font-bold">
                                    {{ item.value }}%
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    class="max-w-[27.5%] min-w-[25%] w-full bg-[#151F07] rounded-[40px] p-[40px] box blur-green rt-blur-green">
                    <div class="flex justify-between mb-[64px]">
                        <div>
                            <h2 class="title3 whitespace-nowrap">Number <br> of Exporters</h2>
                            <p class="text-[48px] mt-6 leading-[60px] text-[#7DBA28] font-bold">750</p>
                        </div>
                        <img class="w-[139.35943603515625px] h-[167.9999542236328]"
                            src="@/assets/icons/second/globe.svg" alt="">

                    </div>
                    <Linechart :data="[
                        { name: 'Asia-Pacific & CIS', value: 294 },
                        { name: 'America', value: 189 },
                        { name: 'EU & UK', value: 189 },
                        { name: 'MENA', value: 78 },
                    ]" />
                </div>

                <div class="max-w-[27.5%] min-w-[25%] w-full flex flex-col gap-6">
                    <div class="w-full bg-[#151F07] rounded-[40px] p-[40px] box blur-green rt-blur-green">
                        <div class="flex justify-between">
                            <div>
                                <h2 class="title3 mb-11">Export Сoverage</h2>
                                <p class="text-[48px] leading-[48px] text-[#7DBA28] font-bold">90</p>
                                <p class="text-[48px] leading-[48px] text-[#7DBA28] font-bold">countries</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full bg-[#151F07] rounded-[40px] p-8 !pt-[34px] box blur-green lt-blur-green">
                        <div class="flex justify-between">
                            <div>
                                <img class="w-[112px] h-[126px] mb-6" src="@/assets/icons/second/lines.svg" alt="">
                                <h2 class="title3">Export Directions</h2>
                                <p class="text-[48px] text-[#7DBA28] leading-[60px] font-bold">75</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full bg-[#151F07] rounded-[40px] p-[40px] flex box blur-green lb-blur-green justify-end">
                <div class="w-[600px]">
                    <h2 class="text-[36px] font-bold">
                        Top Member <br> Companies
                    </h2>
                </div>
                <div class="flex flex-wrap w-full gap-18 justify-between pr-20">
                    <img v-for="(item, index) in imgs" :key="index" :src="item" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import Header from '@/shared/components/templates/header/index.vue'
import Linechart from './components/linechart.vue';
import MapChart from './components/MapChart.vue';
import { ref } from 'vue'

const regions = [
    { name: "America", value: 45, color: "#E67E22" },       // orange
    { name: "Asia-Pacific & CIS", value: 26, color: "#6EB52D" }, // green
    { name: "EU & UK", value: 24, color: "#7D5DFB" },       // purple
    { name: "MENA", value: 24, color: "#1CA9C9" },          // blue
];

const imgs = ref([
    new URL('@/assets/icons/second/itransition.svg', import.meta.url).href,
    new URL('@/assets/icons/second/dyninno.svg', import.meta.url).href,
    new URL('@/assets/icons/second/datavolt.svg', import.meta.url).href,
    new URL('@/assets/icons/second/exadel.svg', import.meta.url).href,
    new URL('@/assets/icons/second/epam.svg', import.meta.url).href,
    new URL('@/assets/icons/second/vention.svg', import.meta.url).href,
    new URL('@/assets/icons/second/eastgames.svg', import.meta.url).href,
    new URL('@/assets/icons/second/wizard.svg', import.meta.url).href,
])

</script>


<style lang="scss">
.box {
    position: relative;
    background: #151F07;
    border-radius: 40px;
    padding: 40px;
    overflow: hidden;
}

.blur-green::before {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    background: #8BCF2D;
    border-radius: 50%;
    filter: blur(60px);
    z-index: 0;
    opacity: 0.5;
}

.lt-blur-green::before {
    left: -40px;
    top: -40px;
}

.lb-blur-green::before {
    left: -40px;
    bottom: -40px;
}

.rt-blur-green::before {
    right: -40px;
    top: -40px;
}

.rb-blur-green::before {
    right: -40px;
    bottom: -40px;
}

.blur-sm-green::before {
    content: "";
    position: absolute;
    width: 120px;
    height: 120px;
    background: #8BCF2D;
    border-radius: 50%;
    filter: blur(60px);
    z-index: 0;
    opacity: 0.5;
}

.lt-sm-blur-green::before {
    left: -16px;
    top: -16px;
}

.rt-sm-blur-green::before {
    right: -16px;
    top: -16px;
}

.rb-sm-blur-green::before {
    right: -16px;
    bottom: -16px;
}

.title3 {
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    color: #D1EDAA;
}
</style>