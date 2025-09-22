<template>
    <div>
        <Header
            :title="currentIndex == 3 ? 'IT Park Programs and Infrastructure' : 'Uzbekistan – Central Asia’s fastest growing ecosystem'" />
        <div class="flex dashboard gap-[32px]">
            <div class="w-full space-y-[32px]">
                <section class="grid grid-cols-8 w-full space-x-[32px] whitespace-nowrap">
                    <div class="box !pt-[26px] col-span-2 blur-green lt-blur-green">
                        <img class="h-[140px] mb-3" src="@/assets/icons/third/world_rate.svg" alt="">
                        <p class="num_info">#2</p>
                        <p class="p_info">In the world <br /> by growth rate</p>
                    </div>
                    <div class="box col-span-2 !pt-[26px] blur-green lt-blur-green">
                        <img class="h-[140px] mb-2" src="@/assets/icons/third/ecosystem.svg" alt="">
                        <p class="num_info">$1.2B</p>
                        <p class="p_info">Evaluation of startup <br /> ecosystem</p>
                    </div>
                    <div class="grid4 col-span-4">
                        <div class="box">
                            <p class="num_info">1200+</p>
                            <p class="p_info fs20 mr-8">Startups participated in local <br /> acceleration programs</p>
                        </div>
                        <div class="box blur-sm-green rt-sm-blur-green relative">
                            <img class="sm absolute top-5 right-5" src="@/assets/icons/third/competition.svg" alt="">
                            <p class="num_info">$1M</p>
                            <p class="p_info fs20">Largest startup <br /> competition prize fund</p>
                        </div>
                        <div class="box">
                            <p class="num_info">7</p>
                            <p class="p_info fs20">Inbound startup expansion</p>
                        </div>
                        <div class="box blur-sm-green rb-sm-blur-green relative">
                            <img class="absolute bottom-5 right-5" src="@/assets/icons/third/studios.svg" alt="">
                            <p class="num_info">15</p>
                            <p class="p_info fs20">Startup studios</p>
                        </div>
                    </div>
                </section>
                <section class="flex space-x-[32px]">
                    <div class="box w-[35%]">
                        <h2 class="title2">Startup Stages</h2>
                        <Linechart class="mt-[38.2px]" :data="[
                            { name: 'Idea', value: 132 },
                            { name: 'Pre-seed', value: 25 },
                            { name: 'Seed', value: 115 },
                            { name: 'Growth Stage', value: 55 },
                        ]" />
                    </div>
                    <div class="box box_group grid4 w-full">
                        <div class="inside_box blur-sm-green rb-sm-blur-green relative">
                            <img class="absolute bottom-3 right-5" src="@/assets/icons/third/investments.svg" alt="">
                            <p class="num_info">$260M+</p>
                            <p class="p_info fs20">Venture investmentsin in <br /> <span class="primarygreen">52
                                    startups</span> in 2025</p>
                        </div>
                        <div class="inside_box blur-sm-green rb-sm-blur-green relative">
                            <img class="absolute bottom-3 right-5" src="@/assets/icons/third/localfund.svg" alt="">
                            <p class="num_info">$160M+</p>
                            <p class="p_info fs20">Joint venture capital <br /> of local funds</p>
                        </div>
                        <div class="inside_box blur-sm-green rb-sm-blur-green relative">
                            <img class="absolute bottom-3 right-5" src="@/assets/icons/third/unicorns.svg" alt="">
                            <p class="num_info">2 unicorns</p>
                            <p class="p_info flex gap-4">
                                <img src="@/assets/icons/third/uzum.svg" alt="">
                                <img src="@/assets/icons/third/tbc.svg" alt="">
                            </p>
                        </div>
                        <div class="inside_box blur-sm-green rb-sm-blur-green relative">
                            <img class="absolute bottom-3 right-5" src="@/assets/icons/third/startups.svg" alt="">
                            <p class="num_info">600+</p>
                            <p class="p_info fs20">Startups</p>
                        </div>
                    </div>
                </section>
            </div>
            <DonutRingChart title="Startups by <br/> Directions"
                :categories="['EdTech', 'HealthTech', 'E-commerce & Retail', 'AI', 'FinTech', 'Logistics', 'GameDev', 'HRTech', 'Green Economy', 'AdTech',]"
                :values="[26.72, 14.19, 13.21, 13.21, 9.24, 6.77, 6.27, 5.28, 3.3, 1.82]"
                :colors="['#8979FF', '#FF928A', '#3CC3DF', '#FFAE4C', '#537FF1', '#F15353', '#D463DA', '#E2DBFF', '#4DC77B', '#F4CF3B']"
                height="370" link="/" />
        </div>
    </div>
</template>

<script setup>
import Header from '@/shared/components/templates/header/index.vue'
import Linechart from './components/linechart.vue';
import DonutRingChart from "./components/DonutRingChart.vue"
</script>

<style lang="scss" scoped>
// .dashboard {}

.box {
    position: relative;
    background: #151F07;
    border-radius: 40px;
    padding: 40px;
    overflow: hidden;
}

.inside_box {
    position: relative;
    background: #1F2F0A;
    border-radius: 32px;
    padding: 24px;
    overflow: hidden;
}

.grid4 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    .box {
        padding: 24px !important;
        border-radius: 32px;
    }
}

.box_group {
    gap: 24px;
}

.num_info {
    color: #7DBA28;
    font-weight: 900;
    font-size: 48px;
    line-height: 60px;
}

.p_info {
    color: #D1EDAA;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin-top: 24px;
}

.fs20 {
    font-size: 20px !important;
    line-height: 26px;
    margin-top: 16px;
}

// blur big one
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

.rt-blur-green::before {
    right: -40px;
    top: -40px;
}

.rb-blur-green::before {
    right: -40px;
    bottom: -40px;
}

// blur small one
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



.title2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #F3FAEA;
}
</style>
