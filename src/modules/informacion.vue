<template>
  <div class="informacion">
    <h1>Dispositivo</h1>
    <div class="card-about-us">
      <div id="map" class="map-container"></div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet';

export default {
  data() {
    return {
      latitud: 20.66682,
      longitud: -103.39182,
      map: null,
      marker: null
    };
  },
  mounted() {
    this.initMap();
    this.simulateMovement();
  },
  methods: {
    initMap() {
      this.map = L.map('map').setView([this.latitud, this.longitud], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      }).addTo(this.map);

      this.marker = L.marker([this.latitud, this.longitud]).addTo(this.map);
    },
    simulateMovement() {
      setInterval(() => {
        this.latitud += (Math.random() - .7) * 0.001;
        this.longitud += (Math.random() - .7) * 0.001;
        this.marker.setLatLng([this.latitud, this.longitud]);
        this.map.setView([this.latitud, this.longitud]);
      }, 1000);
    }
  }
};
</script>

<style>
.informacion {
  padding: 20px;
}
.section-title {
  font-size: 1.5em;
  display: flex;
  align-items: center;
}
.section-title i {
  margin-right: 10px;
}
.card-about-us {
  margin-top: 20px;
}
.map-container {
  height: 300px;
  width: 100%;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
</style>