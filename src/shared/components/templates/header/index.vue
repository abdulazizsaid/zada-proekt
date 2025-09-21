<template name="header">
    <header className="pb-8 w-full h-max">
        <div className="bg-[#151F07] w-full rounded-[24px] flex items-center justify-between px-[40px] py-[16px]">
            <h2 class="text-[48px]">{{ title }}</h2>
            <div>
                <img src="@/assets/icons/logo.svg" height="56" alt="">
            </div>
        </div>
    </header>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
})
</script>