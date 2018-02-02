<template>
  <div class="toolbar">
      <div class="titlebar">
        <router-link :to="'/'" class="titlebar__router-link">
          <img src="/static/map.svg" class="titlebar__icon" />
        </router-link>
        <h1 class="titlebar__title">Pathwaay</h1>
        <p class="titlebar__search-label">Search:</p>
      </div>

      <div class="search">
        <form class="search__form" v-on:submit.prevent="onSubmit">
          <input type="text" class="search__textbox" @input="updateSearch($event.target.value)" :value="search" />
        </form>
      </div>
    </div>
</template>

<script>
export default {
  props: ['search', 'changeSearch'],
  methods: {
    onSubmit () {
      this.changeSearch(this.searchText)
    },
    updateSearch (search) {
      this.searchText = search
    }
  },
  data () {
    return {
      searchText: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './../stylus/colors';

.toolbar {
  display flex
  flex 2
  background-color #fff
  max-height 50px
}

.titlebar {
  display flex
  align-items center
  flex 2.5
  content ""
  background-color main
  
  &__router-link {
    display flex
    flex 0 1 auto
  }

  &__icon {
    height calc(15px + 2.5vw)
    padding-left .5rem
    flex 0 1 auto
    
  }

  &__search-label {
    padding-right 1rem
    text-align right
    flex 0 1 auto
    color #FFF
    font-size 1rem
    font-size calc(.5rem + 1vmin)
    font-weight bold
    font-family 'Spectral SC', serif
  }

  &__link {
    color dark
    text-decoration none
    padding 0 1rem
    font-weight 300
    font-size 1.1rem
    flex 0 1 auto
  }

  &__title {
    flex 1
    margin 0
    font-family 'Spectral SC', serif
    font-weight 300
    color #FFF
    padding-left calc(.2rem + 1vmin)
    font-size 1.2rem
    font-size calc(.5rem + 2.2vmin)
  }
}

.search {
  display flex
  flex-direction column
  flex 1
  background-color #fdfdfd
  color #fff
  border 4px solid main

  &__form {
    display flex
    flex 1
    align-self stretch
  }

  &__textbox {
    flex 1
    align-self stretch
    font-size 1rem
    font-size calc(.6rem + 1.1vmin)
    background transparent
    border 0
    padding 0 .6rem
    color darken(main, 10%)
    width 100%
    font-weight bold

    &:focus, &:active {
      outline 0
    }
  }
}
</style>


