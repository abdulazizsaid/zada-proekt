<template>
  <div class="chart-container">
    <highcharts class="donut-chart" :options="chartOptions"></highcharts>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Number of Members",
  },
  regions: {
    type: Array,
    default: () => ["Tashkent", "Regions"],
  },
  keys: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [1870, 1129],
  },
  colors: {
    type: Array,
    default: () => ["#4CAF50", "#FF5722"],
  },
  height: {
    type: Number,
    default: 300,
  },
  link: {
    type: String,
    default: "",
  },
  titlePadding: {
    type: Number,
    default: 0,
  },
});

const formattedTitle = ref("");

function insertBreakAfterNWords(text, n = 2) {
  if (!text) return "";
  const words = text.split(" ");
  return words.map((word, i) => (i > 0 && i % n === 0 ? "" + word : word)).join(" ");
}

onMounted(() => {
  formattedTitle.value = insertBreakAfterNWords(props.title, 2);
});

const chartOptions = computed(() => ({
  chart: {
    type: "pie",
    backgroundColor: "transparent",
    height: props.height,
  },
  title: {
    text: `${formattedTitle.value}`,
    align: "center",
    verticalAlign: "middle",
    useHTML: true,
  },
  plotOptions: {
    pie: {
      innerSize: "70%", // ichini bo‘sh qilib donut qiladi
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
  tooltip: {
    pointFormat: "{point.name}: {point.y}",
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
    itemStyle: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#FFFFFF",
    },
    symbolRadius: 6,
    symbolHeight: 12,
    symbolWidth: 12,
  },
  series: [
    {
      name: "",
      data: props.data.map((value, index) => ({
        name: props.regions[index],
        y: value,
        color: props.colors[index],
        keys: props.keys[index] ?? null,
      })),
    },
  ],
}));
</script>
<style scoped>
.chart-container {
  width: 100%;
  padding: 0;
}

.donut-chart .highcharts-title {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  pointer-events: none;
  color: #FFFFFF;
}

.chart-title {
  display: inline-block;
  max-width: 120px;
  line-height: 20px;
  font-size: 16px;
  color: #FFFFFF;
}

.title-color {
  color: #FFFFFF;
}
</style>