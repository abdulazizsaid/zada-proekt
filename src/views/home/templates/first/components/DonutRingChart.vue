<template>
  <div class="chart-container flex items-center">
    <highcharts class="donut-chart" :options="chartOptions"></highcharts>
    <div>
      <p class="text-[30px]" :style="{ color: colors[index] }" v-for="(item, index) in data" :key="index">{{ item }}
      </p>
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
    default: () => ['#7DBA28', '#F16E16', '#FF9800', '#03A9F4', '#9C27B0'],
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
    text: `<p style="font-size: 36px; font-weight: bold; color: #7DBA28; padding-left: ${50}px; padding-top: -4px; text-align:center; position: relative; z-index: 10"; >${formattedTitle.value}</p>`,
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
      innerSize: "60%", // ichini bo‘sh qilib donut qiladi
      size: '110%',   
      allowPointSelect: true,
      slicedOffset: 10,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      margin:10,
      borderWidth: 0,
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
    width: '45%',
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
<style >
.chart-container {
  width: 100%;
  padding: 0;
}

.donut-chart .highcharts-title {
  left: 30px !important;
  width: 154px;
  font-weight: bold;
  transform: scale(1, 1);
  z-index: -1;

  p {
    z-index: -1 !important;
  }
}
</style>