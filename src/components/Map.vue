<template>
  <div class="clearfix layout">
    <toolbar :changeSearch="changeSearch" v-model="search" :search="search"></toolbar>

    <div v-if="cacheMessage && !cacheMessage.inCache" class="cache">
      <i class="fa fa-spin fa-circle-o-notch"></i>
      {{cacheMessage.message}}
    </div>

    <div class="layout__content">
      <div class="layout__map">
        <zoom-match-meter :zoom="zoom"></zoom-match-meter>
        <map-view :jobs="jobs" :moveend="updateBounds" :center="[lat, lng]" :zoom="zoom"></map-view>
      </div>
      <div class="layout__results">
        <search-results :jobs="jobs" :panToPoint="panToPoint"></search-results>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import ZoomMatchMeter from './ZoomMatchMeter'
import SearchResults from './SearchResults'
import Toolbar from './Toolbar'
import MapView from './MapView'
import {buildJobs} from './../jobs'
import {host} from './../config'

export default {
  name: 'map',
  data () {
    return {
      within: [[], [], [], [], []],
      center: [0, 0],
      zoom: Number(decodeURIComponent(this.getQueryString('zoom'))),
      search: decodeURIComponent(this.getQueryString('search')),
      lat: decodeURIComponent(this.getQueryString('lat')),
      lng: decodeURIComponent(this.getQueryString('lng')),
      jobs: {},
      socket: {},
      host,
      cacheMessage: null
    }
  },
  methods: {
    panToPoint () {
      console.log(arguments)
    },
    updateBounds (map) {
      const bounds = map.getBounds()
      this.within = [
        [bounds._southWest.lng, bounds._northEast.lat],
        [bounds._northEast.lng, bounds._northEast.lat],
        [bounds._northEast.lng, bounds._southWest.lat],
        [bounds._southWest.lng, bounds._southWest.lat],
        [bounds._southWest.lng, bounds._northEast.lat]
      ]

      this.center = [ map.getCenter().lng, map.getCenter().lat ]
      this.zoom = map.getZoom()

      this.sendCoords()
    },
    getMessage () {
      return {
        type: 'mapMove',
        data: {
          keyword: this.search,
          within: this.within,
          center: this.center
        }
      }
    },
    debouncedSendCoords: debounce(function () {
      const message = this.getMessage()
      window.ga('send', 'event', 'mapSearch', message.data.keyword, `${message.data.center[0]}, ${message.data.center[1]}`)
      this.socket.send(JSON.stringify(message))
    }, 500),
    changeSearch (newKeywords) {
      this.search = newKeywords
      this.sendCoords()
    },
    sendCoords () {
      if (this.search.length > 2) {
        this.debouncedSendCoords()
      }
      this.updateQueryString()
    },
    updateQueryString () {
      this.$router.replace({
        path: '/map',
        query: { lat: this.center[1], lng: this.center[0], search: this.search, zoom: this.zoom }
      })
    },
    getQueryString (field) {
      var href = window.location.href
      var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i')
      var string = reg.exec(href)
      return string ? string[1] : null
    },
    populateJobs (jobs) {
      this.jobs = buildJobs(jobs)
    }
  },
  created () {
    this.socket = new WebSocket(`ws://${host}/ws`)
    this.socket.onmessage = ({data}) => {
      const resp = JSON.parse(data)

      switch (resp.type) {
        case 'jobs':
          if (resp.from === 'indeed') {
            this.cacheMessage = null
          }
          this.populateJobs(resp.message)
          break
        case 'cache':
          this.cacheMessage = resp
          break
      }
    }
  },
  components: {
    ZoomMatchMeter,
    Toolbar,
    MapView,
    SearchResults
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import './../stylus/colors'

.cache {
  position absolute
  bottom 10px
  right 10px
  z-index 999
  background-color #fafafa
  padding .6rem
  border 1px solid #333
  border-radius .25rem
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.layout {
  display flex
  margin 0 auto
  flex-direction column

  &__content {
    display flex
  }

  &__results {
    flex 1
  }

  &__map {
    flex 2.3
    box-shadow inset 0 0 4px #333
  }

  &__donate-text {
    font-weight 500
    margin 0
    font-size .9rem
    padding 0 1rem
    color orange
  }
}
</style>