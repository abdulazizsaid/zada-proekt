<template>
    <main class="dashboard space-y-[32px] py-[32px]">
        <section class="flex space-x-[32px]">
            <div class="box blur-green lt-blur-green">
                <img src="@/assets/icons/third/world_rate.svg" alt="">
                <p class="num_info">#2</p>
                <p class="p_info">In the world by growth rate</p>
            </div>
            <div class="box blur-green lt-blur-green">
                <img src="@/assets/icons/third/ecosystem.svg" alt="">
                <p class="num_info">$1.2B</p>
                <p class="p_info">Evaluation of startup ecosystem</p>
            </div> 
            <div class="grid4">
                <div class="box"> 
                    <p class="num_info">1200+</p>
                    <p class="p_info fs20">Startups participated in local acceleration programs</p>
                </div>
                <div class="box blur-green rt-blur-green">
                    <p class="num_info">$1M</p>
                    <p class="p_info fs20">Largest startup competition prize fund</p>
                </div>
                <div class="box">
                    <p class="num_info">7</p>
                    <p class="p_info fs20">Inbound startup expansion</p>
                </div>
                <div class="box blur-green rb-blur-green">
                    <p class="num_info">15</p>
                    <p class="p_info fs20">Startup studios</p>
                </div>
            </div>
        </section>
        <section class="flex space-x-[32px]">
            <div class="box w-[35%]">
                <h1>Startup Stages</h1>
                <ul>
                    <li v-for="i in [['idea', 100, 25], ['pdea', 50, 25], ['mdea', 50, 25], ['gdea', 50, 25]]">
                        <p>{{ i[0] }}</p>
                        <div class="flex gap-6">
                            <p :style="`width: ${i[1]}%`" class="stage_percent"></p>
                            <p>{{ i[2] }}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="grid4 w-full">
                <div class="box">
                    <p class="num_info">$260M+</p>
                    <p class="p_info fs20">Venture investmentsin 52 startups in 2025</p>
                </div>
                <div class="box blur-green rt-blur-green">
                    <p class="num_info">$160M+</p>
                    <p class="p_info fs20">Joint venture capitalof local funds</p>
                </div>
                <div class="box">
                    <p class="num_info">2 unicorns</p>
                    <p class="p_info fs20"></p>
                </div>
                <div class="box blur-green rb-blur-green">
                    <p class="num_info">600+</p>
                    <p class="p_info fs20">Startups</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script></script>

<style lang="scss" scoped>
.dashboard {
    img {
        height: 144px;
    }
}

.box {
    position: relative;
    background: #151F07;
    border-radius: 20px;
    padding: 40px;
    overflow: hidden;
}

.grid4 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    .box {
        padding: 24px !important;
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
    font-size: 24px;
    line-height: 32px;
    margin-top: 24px;
}

.fs20 {
    font-size: 20px !important;
    line-height: 26px;
    margin-top: 16px;
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

.rt-blur-green::before {
    right: -40px;
    top: -40px;
}

.rb-blur-green::before {
    right: -40px;
    bottom: -40px;
}


.stage_percent {
    height: 27px;
    background: linear-gradient(90deg, #385412 0%, #7DBA28 100%);
    opacity: 0.8;
    border-radius: 5px;
}
</style>
