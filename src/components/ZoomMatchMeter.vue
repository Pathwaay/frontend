<template>
  <div class="zmm">
    <div class="zmm__bar">
      <div class="zmm__ok"></div>
      <div class="zmm__good"></div>
    </div>
      <div class="zmm__indicator" :style="{ bottom: (Math.round(meterHeight / 12)) * zoom + 'px' }"></div>
  </div>
</template>

<script>
export default {
  props: ['zoom'],
  data () {
    return {
      meterHeight: 70
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './../stylus/colors';
meter-height = 70px
borderrad = 10px

.zmm {
  position absolute
  top meter-height + 80px
  left 22px
  z-index 998

  border 1px solid #626262
  border-radius borderrad


  &__bar {
    content ""
    height 100px
    width 8px
    display flex
    flex-direction column
  }

  &__good {
    flex 3
    background-color mint
  }

  &__ok {
    flex 2
    background-color warm
  }

  &__bad {
    flex 1
    background-color red
  }

  div:first-child {
    border-top-left-radius borderrad
    border-top-right-radius borderrad
  }

  div:last-child {
    border-bottom-left-radius borderrad
    border-bottom-right-radius borderrad
  }

  &__indicator {
    indic-width = 22px

    content ""
    z-index 999
    position absolute
    width indic-width
    margin-left -(indic-width / 3)px
    height 6px
    background-color white
    border 1px solid #424242
    border-radius 10px
  }
}
</style>