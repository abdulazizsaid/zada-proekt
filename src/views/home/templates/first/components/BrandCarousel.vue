<template>
    <div class="brands">

        <div class="brand-carousel" :class="`direction-${direction}`">

            <div class="brands1">
                <div class="brand" v-for="brands in brands">
                    <img :src="brands" height="60" alt="flag" />
                </div>
            </div>

            <div class="brands2">
                <div class="brand" v-for="brands in brands">
                    <img :src="brands" height="60" alt="flag" />
                </div>
            </div>

            <div class="brands3">
                <div class="brand" v-for="brands in brands">
                    <img :src="brands" height="60" alt="flag" />
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
  props: {
    brands: { type: Array, default: () => [] },
    direction: { type: String, default: 'left' } // 'left' yoki 'right'
  }
};
</script>

<style lang="scss" scoped>
.brands {
    position: relative;
    height: 60px;
    overflow: hidden;
}

.brand-carousel {
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: nowrap;
}

.brand {
    min-width: 90px;
    width: 110px;
    height: 60px;
}

.brand img {
    width: 90px;
    height: 60px;
    width: auto;
}
/* --- LEFT direction --- */
.direction-left .brands1 {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  animation: moveLeft 60s linear infinite;
  will-change: transform;
}
.direction-left .brands2 {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  animation: moveLeft2 60s linear infinite;
  will-change: transform;
}
.direction-left .brands3 {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  animation: moveLeft3 60s linear infinite;
  will-change: transform;
}

/* --- RIGHT direction --- */
.direction-right .brands1 {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  animation: moveRight 60s linear infinite;
  will-change: transform;
}
.direction-right .brands2 {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  animation: moveRight2 60s linear infinite;
  will-change: transform;
}
.direction-right .brands3 {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  animation: moveRight3 60s linear infinite;
  will-change: transform;
}

/* Left keyframes (move to left) */
@keyframes moveLeft {
  from { transform: translateX(0%); }
  to { transform: translateX(-100%); }
}
@keyframes moveLeft2 {
  from { transform: translateX(100%); }
  to { transform: translateX(0%); }
}
@keyframes moveLeft3 {
  from { transform: translateX(200%); }
  to { transform: translateX(100%); }
}

/* Right keyframes (mirror: move to right) */
@keyframes moveRight {
  from { transform: translateX(0%); }
  to { transform: translateX(100%); }
}
@keyframes moveRight2 {
  from { transform: translateX(-100%); }
  to { transform: translateX(0%); }
}
@keyframes moveRight3 {
  from { transform: translateX(-200%); }
  to { transform: translateX(-100%); }
}
</style>