<template>
  <div class="results" :style="{height: `${resultsHeight}px`}">
    <div class="results__jobs">
      <div class="results__job" :key="job.id" v-for="job in jobs" @click="panToPoint">
        <h3 class="results__title">
          {{job.title}}
        </h3>
        <p class="results__company">
          {{job.company}}
        </p>

        <p class="results__description">
          {{job.description}}
        </p>

        <p class="results__more">
          <a :href="`https://www.indeed.com/${job.link}`" target="_blank">read more...</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['jobs', 'panToPoint'],

  data () {
    return {
      resultsHeight: 0
    }
  },
  created () {
    this.resultsHeight = `${window.innerHeight - 50}`
  }
}
</script>

<style lang="stylus" scoped>
@import './../stylus/colors'

.results {
  background-color white
  padding .7rem
  overflow-y scroll

  &__job {
    margin 2rem 0

    &:first-child {
      margin-top 0  
    }
  }


  &__title {
    font-size 1rem
    color red
    margin 0
  }

  &__company {
    margin-top 0rem
    font-size .9rem
  }

  &__description {
    font-size .8rem
    margin-bottom .1rem
  }

  &__more {
    margin-top .2rem  
  }
}
</style>