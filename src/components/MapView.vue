<template>
  <div id="mapid" :style="{ height: `${mapHeight}px`}">
    <v-map :zoom="zoom" :center="center" @load="console.log($event)" @l-moveend="moveend($event.target)">
      <v-tilelayer url="https://api.mapbox.com/styles/v1/snippyboons/cj9z60tsd89lw2sphcbqnd0x4/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic25pcHB5Ym9vbnMiLCJhIjoiY2o4YXBpOThmMDRqMjMycDZhOGt6dTVibCJ9.dTxAsWgm-MNT-wBTVCBODg"></v-tilelayer>
      <v-marker v-for="job in jobs" :lat-lng="reverse(job.location.coordinates)" :icon="makeIcon(job)">
        <v-popup :content="makeContentText(job)"></v-popup>
        <v-tooltip :content="job.title"></v-tooltip>
      </v-marker>
    </v-map>
  </div>
</template>

<script>
import {Map, TileLayer, Marker, Popup, Tooltip} from 'vue2-leaflet'
import reverse from 'lodash/reverse'
import {host} from './../config'
import L from 'leaflet'

export default {
  props: ['jobs', 'moveend', 'center', 'zoom'],
  components: {
    'v-map': Map,
    'v-tilelayer': TileLayer,
    'v-marker': Marker,
    'v-popup': Popup,
    'v-tooltip': Tooltip
  },
  methods: {
    reverse,
    makeContentText: job => (`
      <h4>${job.title}</h4>
      <h5>${job.company}</h5>
      <p>${job.description}</p>
    `),
    makeIcon: () => L.icon({
      iconUrl: `http://${host}/static/markers/good_match_circle.svg`,
      shadowUrl: '',
      popupAnchor: [12, 10]
    })
  },
  data () {
    return {
      mapHeight: `${document.innerHeight - 50}`,
      host
    }
  },
  created () {
    this.mapHeight = `${window.innerHeight - 50}`
  },
  mounted () {
    console.log(this.$refs)
  }
}
</script>

<style lang="stylus" scoped>
#mapid {
  content ""
}
</style>


