<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
main = #54558C
mint = #4FEAC3
red = #E85D75
warm = #FFC857

html, body {
  overflow: hidden;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width 100%
}

.leaflet-popup-close-button {
  font-size 22px !important
  color #424242 !important
  margin-right .5rem
  margin-top .4rem
}

.leaflet-popup-content-wrapper {
    background-color #fbfbfb
    padding .4rem
}

.leaflet-popup-content {
  margin 0rem !important
}

.marker {
  &__title {
    margin .5rem 0 !important

    &__link {
      cursor pointer
      font-size 1rem
      font-size calc(.74rem + 1vmin)
      text-decoration none !important
      color #424242 !important
    }
  }
  &__company {
    color #5c5d8d !important
    font-weight bold
    margin .5rem 0 !important
    font-size .85rem
    font-size calc(.5rem + 1.2vmin)
    text-decoration underline
    cursor pointer
  }
  &__description {
    color #424242
    font-size .85rem
    font-size calc(.6rem + .6vmin)
  }
}
</style>
