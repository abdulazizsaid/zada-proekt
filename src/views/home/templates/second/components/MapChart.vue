<template>
  <div id="map-container">
    <highcharts v-if="!loading" :options="chartOptions" :constructor-type="'mapChart'"></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import HC_map from "highcharts/modules/map";
import mapData from "@/data/geo.json";


// Map modulini ulash
if (typeof HC_map === "function") {
  HC_map(Highcharts);
}

export default {
  name: "WorldMapChart",
  components: {
    highcharts: HighchartsVue.component,
  },
  data() {
    return {
      loading: true,
      chartOptions: null,
    };
  },
  mounted() {
    this.loadMap();
  },
  methods: {
    loadMap() {
      this.chartOptions = {
        chart: {
          map: mapData,
          backgroundColor: "#151F07",
        },
        title: { text: "" },
        legend: { enabled: false },
        tooltip: {
          pointFormat: "{point.name}",
        },
        mapView: {
          projection: {
            name: 'Miller', // tekisroq ko‘rsatadi
          }
        },

        series: [
          {
            type: "mapline",
            mapData: Highcharts.geojson(mapData, "mapline"),
            nullColor: "#707070",
            enableMouseTracking: false,
          },
          {
            mapData,
            joinBy: "hc-key",
            borderWidth: 0,
            data: [
              { "hc-key": "us", value: 1, color: "#E67E22" },
              { "hc-key": "ca", value: 1, color: "#E67E22" },
              { "hc-key": "mx", value: 1, color: "#E67E22" },
              { "hc-key": "br", value: 1, color: "#E67E22" },

              { "hc-key": "ru", value: 1, color: "#7DBA28" },
              { "hc-key": "cn", value: 1, color: "#7DBA28" },
              { "hc-key": "in", value: 1, color: "#7DBA28" },
              { "hc-key": "jp", value: 1, color: "#7DBA28" },
              { "hc-key": "au", value: 1, color: "#7DBA28" },
              { "hc-key": "sg", value: 1, color: "#7DBA28" },
              // { "hc-key": "np", value: 1, color: "#7DBA28" },
              { "hc-key": "uz", value: 1, color: "#7DBA28" },
              { "hc-key": "kz", value: 1, color: "#7DBA28" },
              { "hc-key": "tj", value: 1, color: "#7DBA28" },
              { "hc-key": "kr", value: 1, color: "#7DBA28" },
              { "hc-key": "ir", value: 1, color: "#7DBA28" },
              { "hc-key": "iq", value: 1, color: "#7DBA28" },
              { "hc-key": "tm", value: 1, color: "#7DBA28" },
              { "hc-key": "af", value: 1, color: "#7DBA28" },
              { "hc-key": "pk", value: 1, color: "#7DBA28" },
              { "hc-key": "kg", value: 1, color: "#7DBA28" },
              { "hc-key": "my", value: 1, color: "#7DBA28" },
              { "hc-key": "id", value: 1, color: "#7DBA28" },
              { "hc-key": "nz", value: 1, color: "#7DBA28" },
              { "hc-key": "az", value: 1, color: "#7DBA28" },
              { "hc-key": "ge", value: 1, color: "#7DBA28" },
              { "hc-key": "am", value: 1, color: "#7DBA28" },
              { "hc-key": "bt", value: 1, color: "#7DBA28" },
              { "hc-key": "vn", value: 1, color: "#7DBA28" },

              { "hc-key": "tr", value: 1, color: "#8979FF" },
              { "hc-key": "gb", value: 1, color: "#8979FF" },
              { "hc-key": "fr", value: 1, color: "#8979FF" },
              { "hc-key": "de", value: 1, color: "#8979FF" },
              { "hc-key": "it", value: 1, color: "#8979FF" },
              { "hc-key": "pr", value: 1, color: "#8979FF" },
              { "hc-key": "ro", value: 1, color: "#8979FF" },
              { "hc-key": "md", value: 1, color: "#8979FF" },
              { "hc-key": "ua", value: 1, color: "#8979FF" },
              { "hc-key": "by", value: 1, color: "#8979FF" },
              { "hc-key": "il", value: 1, color: "#8979FF" },
              { "hc-key": "ch", value: 1, color: "#8979FF" },
              { "hc-key": "no", value: 1, color: "#8979FF" },
              { "hc-key": "se", value: 1, color: "#8979FF" },
              { "hc-key": "ie", value: 1, color: "#8979FF" },
              { "hc-key": "is", value: 1, color: "#8979FF" },
              { "hc-key": "es", value: 1, color: "#8979FF" },
              { "hc-key": "nl", value: 1, color: "#8979FF" },
              { "hc-key": "pl", value: 1, color: "#8979FF" },
              { "hc-key": "cz", value: 1, color: "#8979FF" },
              { "hc-key": "sk", value: 1, color: "#8979FF" },
              { "hc-key": "rs", value: 1, color: "#8979FF" },
              { "hc-key": "hu", value: 1, color: "#8979FF" },

              { "hc-key": "sa", value: 1, color: "#1CA9C9" },
              { "hc-key": "eg", value: 1, color: "#1CA9C9" },
              { "hc-key": "ae", value: 1, color: "#1CA9C9" },
            ],
          },
        ],
      };
      this.loading = false;
    },
  },
};
</script>

<style scoped>
#map-container {
  width: 100%;
  height: 420px;
}
</style>
