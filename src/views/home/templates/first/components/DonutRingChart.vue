<template>
  <div class="chart-container flex items-center">
    <highcharts class="donut-chart" :options="chartOptions"></highcharts>
    <div>
      <p class="text-[30px]" :class="`text-[${colors[index]}]`" v-for="(item, index) in data" :key="index">{{ item }}</p>
    </div>
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
    text: `<p style="font-size: 36px; font-weight: bold; color: #7DBA28; padding-left: ${35}px; padding-top: 0px; text-align:center; position: relative; z-index: 10"; >${formattedTitle.value}</p>`,
    align: 'left',
    verticalAlign: 'middle',
    className: "my-custom-title",
    style: {
      color: '#4CAF50',
      fontWeight: 'bold',
    },
    x: 31,
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
      fontSize: "30px",
      fontWeight: "500",
      color: "#D1EDAA",
    },
    symbolRadius: 16,
    symbolHeight: 22,
    symbolWidth: 22,
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