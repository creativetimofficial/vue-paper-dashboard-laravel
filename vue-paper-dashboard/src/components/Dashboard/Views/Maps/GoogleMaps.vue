<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Regular Map</h4>
        </div>
        <div class="card-body">
          <div id="regularMap" class="map"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { API_KEY } from "./API_KEY";
import { Loader, LoaderOptions } from "google-maps";

const loader = new Loader(API_KEY);

  export default {
    mounted () {
      loader.load().then(function(google) {
        // Regular Map
        const myLatlng2 = new window.google.maps.LatLng(40.748817, -73.985428)
        const mapOptions2 = {
          zoom: 8,
          center: myLatlng2,
          scrollwheel: false // we disable de scroll over the map, it is a really annoing when you scroll through page
        }

        const map2 = new window.google.maps.Map(document.getElementById('regularMap'), mapOptions2)

        const marker2 = new window.google.maps.Marker({
          position: myLatlng2,
          title: 'Regular Map!'
        })

        marker2.setMap(map2)
      });
    }
  }

</script>

