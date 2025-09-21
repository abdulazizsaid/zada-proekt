<template>
  <div id="map-container">
    <div v-if="loading" class="loading-indicator">Loading map...</div>
    <highcharts v-if="!loading" :options="chartOptions" :constructor-type="'mapChart'"></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import HC_map from "highcharts/modules/map";
import mapData from "@/data/geo.json";


// Highcharts global sozlamalari
Highcharts.setOptions({
  lang: {
    decimalPoint: ".",
    thousandsSep: ",",
  },
});

// Map modulini ulash
if (typeof HC_map === "function") {
  HC_map(Highcharts);
}

// const vm = this

export default {
  name: "WorldMapChart",
  components: {
    highcharts: HighchartsVue.component,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      chartOptions: null,
      loading: true,
      localTitle: this.title, // propsni data ga tarjima qilib olish
      locaData: null
    }
  },
  methods: {
    async fetchMapData() {
      try {
        this.chartOptions = {
          chart: {
            map: mapData,
            backgroundColor: "transparent",
          },
          title: {
            text: this.localTitle,
            style: { color: "#fff" },
          },
          mapNavigation: {
            enabled: true,
            buttonOptions: {
              verticalAlign: "bottom",
            },
          },
          colorAxis: {
            min: 0,
            minColor: "#5cbd5e",
            maxColor: "#014501",
          },
          series: [
          // America (orange)
          {
            name: "America",
            mapData,
            data: [
              ["us", 1],
              ["ca", 1],
              ["mx", 1],
              ["br", 1],
              // kerakli boshqa kodlar
            ],
            joinBy: "hc-key",
            color: "#E67E22",
          },
          // Asia-Pacific & CIS (green)
          {
            name: "Asia-Pacific & CIS",
            mapData,
            data: [
              ["cn", 1],
              ["ru", 1],
              ["jp", 1],
              ["in", 1],
              // kerakli boshqa kodlar
            ],
            joinBy: "hc-key",
            color: "#6EB52D",
          },
          // EU & UK (purple)
          {
            name: "EU & UK",
            mapData,
            data: [
              ["fr", 1],
              ["de", 1],
              ["gb", 1],
              ["it", 1],
              // kerakli boshqa kodlar
            ],
            joinBy: "hc-key",
            color: "#F16E16",
          },
          // MENA (blue)
          {
            name: "MENA",
            mapData,
            data: [
              ["ae", 1],
              ["sa", 1],
              ["eg", 1],
              ["dz", 1],
              // kerakli boshqa kodlar
            ],
            joinBy: "hc-key",
            color: "#1CA9C9",
          },
        ],
        };
        this.loading = false;
      } catch (error) {
        console.error("Failed to load map data:", error);
      }
    },
  },
  mounted() {
    this.fetchMapData();
  },
  watch: {
    data(newValue) {
      this.locaData = newValue;
      console.log(newValue);

      if (this.chartOptions && this.chartOptions.series && this.chartOptions.series[0]) {
        this.chartOptions.series[0].data = newValue;
      }
    },
  },
}
</script>


<style scoped>
#map-container {
  width: 100%;
  color: #fff;
  text-align: center;
}

.loading-indicator {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}
</style>