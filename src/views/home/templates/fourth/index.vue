<template>
    <div>
        <Header
            :title="currentIndex == 3 ? 'IT Park Programs and Infrastructure' : 'Uzbekistan – Central Asia’s fastest growing ecosystem'" />
        <div class="flex dashboard gap-[32px]">
            <section class="flex space-x-[32px] w-full">
                <div class="grid4 w-full">
                    <div class="box relative">
                        <h2 class="title2">Support Programs</h2>
                        <div class="grid grid-cols-3 gap-8 mt-12 whitespace-nowrap">
                            <div>
                                <!-- <img loading="lazy" src="@/assets/icons/fourth/localtoglobal.svg" alt=""> -->
                                <Localtoglobal />
                                <p class="title3 my-4 whitespace-nowrap">Local to Global</p>
                                <p class="p_info fs18">Export accelerator, <br /> international mentorship, <br />
                                    marketing
                                    support.</p>
                            </div>
                            <div>
                                <img loading="lazy" src="@/assets/icons/fourth/zerorisk.svg" alt="">
                                <!-- <Zerorizk /> -->
                                <p class="title3 my-4 whitespace-nowrap">Zero Risk</p>
                                <p class="p_info fs18">Free offices and equipment <br /> for up to 12 months, <br />
                                    reimbursement of hiring <br /> and training costs.</p>
                            </div>
                            <div>
                                <img loading="lazy" src="@/assets/icons/fourth/softlanding.svg" alt="">
                                <!-- <Softlanding /> -->
                                <p class="title3 my-4 whitespace-nowrap">Soft Landing</p>
                                <p class="p_info fs18">Assistance in launching <br /> and adapting a business <br /> in
                                    Uzbekistan.</p>
                            </div>
                        </div>
                    </div>
                    <div class="box blur-green lb-blur-green relative">
                        <div class="flex">
                            <div class="w-[425px]">
                                <h2 class="title2">One-Stop Shop</h2>
                                <p class="p_info">Turnkey service for opening <br /> a company in Uzbekistan.</p>
                                <img loading="lazy" class="sm absolute bottom-0 left-0"
                                    src="@/assets/icons/fourth/oss.svg" alt="">
                                <!-- <Oss /> -->
                            </div>
                            <ul class="space-y-[64px]">
                                <li class="flex gap-3 items-center">
                                    <!-- <img loading="lazy" src="@/assets/icons/fourth/registration.svg" alt=""> -->
                                    <Register />
                                    <p class="p_info fs18 !mt-0">Company registration, tax ID, <br /> bank accounts.</p>
                                </li>
                                <li class="flex gap-3 items-center">
                                    <!-- <img loading="lazy" src="@/assets/icons/fourth/support.svg" alt=""> -->
                                    <Support />
                                    <p class="p_info fs18 !mt-0">Legal, tax, and banking <br /> support.</p>
                                </li>
                                <li class="flex gap-3 items-center">
                                    <!-- <img loading="lazy" src="@/assets/icons/fourth/assistance.svg" alt=""> -->
                                    <Assistance />
                                    <p class="p_info fs18 !mt-0">Recruitment <br /> assistance.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="box blur-green rt-blur-green relative">
                        <h2 class="title2">IT Visa</h2>
                        <p class="p_info">Long-term visa for IT professionals, founders, and investors <br />
                            with full access to live, work, and invest in Uzbekistan.</p>
                        <img class="sm absolute top-5 right-5" src="@/assets/icons/fourth/itvisa.svg" alt="">
                        <div class="grid grid-cols-3 mt-20">
                            <div>
                                <img src="@/assets/icons/fourth/validforup.svg" alt="">
                                <!-- <Validforup /> -->
                                <p class="p_info fs18 !mt-3">Valid for up to 3 years, <br /> renewable without exit</p>
                            </div>
                            <div>
                                <img src="@/assets/icons/fourth/healthcare.svg" alt="">
                                <!-- <Healthcare /> -->
                                <p class="p_info fs18 !mt-3">Access to healthcare <br /> and education services</p>
                            </div>
                            <div>
                                <img src="@/assets/icons/fourth/purchase.svg" alt="">
                                <!-- <Purchase /> -->
                                <p class="p_info fs18 !mt-3">Opportunity to purchase <br /> real estate</p>
                            </div>
                        </div>
                    </div>
                    <div class="box blur-green lb-blur-green relative">
                        <div class="flex">
                            <div class="w-[420px]">
                                <h2 class="title2">Infrastructure</h2>
                                <img class="sm absolute bottom-0 left-0" src="@/assets/icons/fourth/infrastructure.svg"
                                    alt="">
                                <!-- <InfroStructure class="sm absolute bottom-0 left-0" /> -->
                            </div>
                            <ul class="space-y-6">
                                <li>
                                    <p class="num_info">14</p>
                                    <p class="p_info fs18 !mt-2">Branches across Uzbekistan</p>
                                </li>
                                <li>
                                    <p class="num_info">6</p>
                                    <p class="p_info fs18 !mt-2">International branches</p>
                                </li>
                                <li>
                                    <p class="num_info">Data centers</p>
                                    <p class="p_info fs18 !mt-2">DGPMC, UZINFOCOM, Data Volt</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import Header from '@/shared/components/templates/header/index.vue'
import Localtoglobal from './icons/Localtoglobal.vue';
import Zerorizk from './icons/Zerorizk.vue';
import Softlanding from './icons/Softlanding.vue';
import Oss from './icons/Oss.vue';
import Register from './icons/Register.vue';
import Support from './icons/Support.vue';
import Assistance from './icons/Assistance.vue';
import Validforup from './icons/Validforup.vue';
import Healthcare from './icons/Healthcare.vue';
import Purchase from './icons/Purchase.vue';
import InfroStructure from './icons/InfroStructure.vue';
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
        padding: 40px !important;
        border-radius: 32px;
    }
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
    font-size: 20px;
    line-height: 30px;
    margin-top: 24px;
}

.fs18 {
    font-size: 18px !important;
    line-height: 28px;
    margin-top: 16px;
}

// blur big one
.blur-green::before {
    content: "";
    position: absolute;
    width: 254px;
    height: 254px;
    background: #8BCF2D;
    border-radius: 50%;
    filter: blur(100px);
    z-index: 0;
}

.lb-blur-green::before {
    left: -40px;
    bottom: -40px;
}

.rt-blur-green::before {
    right: -40px;
    top: -40px;
}

.title2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #F3FAEA;
}

.title3 {
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    color: #7DBA28;
}
</style>
