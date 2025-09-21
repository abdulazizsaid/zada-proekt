<template>
    <div class="chart-container flex flex-col items-center">
        <!-- {{ icons[0] }} -->
        <highcharts ref="chartRef" class="donut-chart" :options="chartOptions" @rendered="onChartRendered"></highcharts>
        <!-- Legend with icons -->
        <div class="legend flex flex-col gap-4 mt-2">
            <div v-for="(item, index) in legendItems" :key="index" class="flex items-center gap-3"
                @mouseover="highlightSlice(index)" @mouseleave="resetHighlight(index)">
                <img :src="`/third/chart/${index + 1}.svg`" />
                <p class="flex-1 text-[#D1EDAA] text-[20px] font-medium cursor-pointer">{{ item.name }}</p>
                <p class="font-bold text-[20px]" :style="{ color: item.color }">{{ item.value }}%</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";

const chartRef = ref(null);

function highlightSlice(index) {
    const chart = chartRef.value.chart;
    if (!chart) return;
    const point = chart.series[0]?.points?.[index];
    if (!point) return;

    point.onMouseOver();
    chart.tooltip?.refresh(point)
}

function resetHighlight(index) {
    const chart = chartRef.value.chart;
    if (!chart) return;

    chart.tooltip?.hide();
    chart.pointer?.reset();
}

function onChartRendered(chart) {
    chartRef.value = chart; // Highcharts instance saqlanadi
}

const props = defineProps({
    title: {
        type: String,
        default: "Startups by Directions",
    },
    categories: {
        type: Array,
        default: () => [
            "EdTech",
            "HealthTech",
            "E-commerce & Retail",
            "AI",
            "FinTech",
            "Logistics",
            "GameDev",
            "HRTech",
            "Green Economy",
            "AdTech",
        ],
    },
    values: {
        type: Array,
        default: () => [26.72, 14.19, 13.21, 13.21, 9.24, 6.77, 6.27, 5.28, 3.3, 1.82],
    },
    colors: {
        type: Array,
        default: () => ['#8979FF', '#FF928A', '#3CC3DF', '#FFAE4C', '#537FF1', '#F15353', '#D463DA', '#E2DBFF', '#4DC77B', '#F4CF3B']
    },
    icons: {
        type: Array,
        default: () => [],
    },
});

const chartOptions = computed(() => ({
    chart: {
        type: "pie",
        backgroundColor: "#0C1605",
        height: 350,
        width: 350,
    },
    title: {
        text: props.title,
        align: "center",
        verticalAlign: "middle",
        style: {
            fontSize: "24px",
            fontWeight: "bold",
            color: "#F3FAEA",
            textAlign: "center",
        },
    },
    plotOptions: {
        pie: {
            innerSize: "65%",
            dataLabels: { enabled: false },
            borderWidth: 0,
        },
    },
    tooltip: {
        pointFormat: "<b>{point.y:.2f}%</b>",
    },
    series: [
        {
            name: "",
            data: props.categories.map((name, index) => ({
                name,
                y: props.values[index],
                color: props.colors[index],
            })),
        },
    ],
}));

const legendItems = computed(() =>
    props.categories.map((name, index) => ({
        name,
        value: props.values[index],
        color: props.colors[index],
        icon: props.icons[index],
    }))
);
</script>

<style scoped>
.chart-container {
    max-width: 450px;
    background: #0c1605;
    border-radius: 24px;
    padding: 32px;
}

.legend {
    width: 100%;
}

.donut-chart .highcharts-title {
    /* left: 30px !important; */
    /* width: 144px; */
    left: 0;
    right: 0;
    padding: 0 !important;
    /* padding-right: 20px !important; */
    margin: auto !important;
    background: red !important;
    color: red !important;
    font-weight: bold;
    /* transform: scale(1, 1); */
    z-index: 1;

    p {
        z-index: -1 !important;
    }
}
</style>
