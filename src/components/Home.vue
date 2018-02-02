<template>
  <div class="home">
    <h1 class="home__title">
      Pathwaay
    </h1>
    <h2 class="home__subtitle">
      Find your next career move the right way
    </h2>

    <div class="search">
      <div class="search__fields">
          <div class="sm-flex">
            <label class="search__keyword">
              <p class="search__label-text">
                Keyword:
                <small class="search__error" v-if="submitted && missingKeyword">(required)</small>
              </p>
              <input type="text" placeholder="Plumber" :class="{ search__input: true, 'search__input--error': submitted && missingKeyword}" v-model="search" />
            </label>

            <label class="search__location">
              <p class="search__label-text">City, State:
                <small class="search__error" v-if="submitted && missingLocation">(required)</small>
              </p>
              <input type="text" placeholder="New York, NY" :class="{ search__input: true, 'search__input--error': submitted && missingLocation}" v-model="location" list="suggestions" />
              <div class="suggestions" v-if="isOpen && suggestions.length > 0 && !(suggestions.length === 1 && suggestions[0]._id === location)">
                <div 
                  class="suggestions__suggestion" 
                  v-for="suggestion in suggestions" 
                  @click="pickLocation(suggestion)">
                  {{suggestion._id}}
                </div>
              </div>
            </label>
        </div>
      </div>
      <div class="search__actions">
        <button class="search__submit" @click="onSearch">
          Find my next career
        </button>
      </div>
    </div>

    <img class="home__hero" src="/static/home_map.svg" />
  </div>

</template>

<script>
import debounce from 'lodash/debounce'
const host = process.env.NODE_ENV === 'development' ? 'localhost:3001' : '104.236.76.175'

export default {
  name: 'Home',
  data () {
    return {
      search: '',
      location: '',
      suggestions: [],
      submitted: false,
      missingKeyword: false,
      missingLocation: false,
      isOpen: false
    }
  },
  methods: {
    pickLocation (suggestion) {
      window.ga('send', 'event', 'pickLocation', suggestion._id)
      this.location = suggestion._id
      this.isOpen = false
    },
    onSearch () {
      this.submitted = true

      if (!this.search) {
        this.missingKeyword = true
      } else {
        this.missingKeyword = false
      }

      if (!this.location) {
        this.missingLocation = true
      } else {
        this.missingLocation = false
      }

      this.getSuggestions()
      .then(suggestions => {
        if (suggestions.length > 0) {
          const {location: {coordinates}} = suggestions[0]
          const search = this.search

          window.ga('send', 'event', 'search', `${search} | ${coordinates[0]}, ${coordinates[1]}`)

          this.$router.push({
            path: '/map',
            query: { lat: coordinates[1], lng: coordinates[0], search, zoom: 10 }
          })
        }
      })
    },
    debounceSuggestions: debounce(function () {
      this.getSuggestions()
      .then(suggestions => {
        if (suggestions.length > 0) {
          this.isOpen = true
        }

        this.suggestions = suggestions
      })
    }, 500),
    getSuggestions () {
      return fetch(`http://${host}/suggestion?location=${this.location}`)
      .then(resp => resp.json())
    }
  },
  watch: {
    location: function () {
      if (this.location.length > 1) {
        this.debounceSuggestions()
      }
    }
  },
  mounted () {
    window.ga('send', 'pageview', '/')
  }
}
</script>

<style lang="stylus">
main = #54558C
mint = #4FEAC3
red = #E85D75
warm = #FFC857

  body, html {
    background-color #fff
    display flex
    flex-direction column
  }

  .home {
    display flex
    flex 1
    flex-direction column
    align-items stretch
    margin 0 auto
    max-width 650px
    padding 0 1rem

    &__title {
      text-align center
      font-family 'Spectral SC', serif
      color #654F6F
    }

    &__subtitle {
      font-family 'Spectral SC', serif
      flex 1
      color #654F6F
      text-align center
      padding-bottom 1rem
      font-size 1.1rem
      font-size calc(.5rem + 1vmin)
    }

    &__hero {
      flex 1
      padding-top 2rem
    }
  }

  .search {
    display flex
    flex-direction column
    align-items stretch
    flex 1

    &__error {
      color red
    }

    &__actions {
      display flex
      margin-top 1.2rem
      justify-content center
    }

    &__submit {
      background-color main
      color #fff
      border 0
      padding .6rem
      font-size .78rem
      font-family 'Spectral SC', serif
      font-weight bold
      border-radius .3rem
      cursor pointer

      &:focus, &:active {
        outline 0
      }
    }

    &__input {
      height 40px
      width 100%
      font-size 1rem
      padding .4rem

      border none
      border-bottom 3px solid main
      color #654F6F
      font-weight bold

      &--error {
        border-bottom 3px solid red
      }

      &:focus, &:active {
        outline 0
      }
    }

    &__label-text {
      font-family: 'Spectral SC', serif;
      font-size .75rem
      font-weight bold
      margin 0
      color #424242
    }

    &__keyword {
      flex 1.5

      &__label {
        font-size .8rem
        font-weight bold
        margin 0
      }
    }

    &__location {
      flex 1
      margin-left .7rem
      position relative

      &__label {
        font-size .8rem
        font-weight bold
        margin 0
      }
    }

    .suggestions {
      width 100%
      min-width 130px
      position absolute
      right 0px

      margin-top 10px

      padding .7rem .5rem
      background-color #fefefe
      border 2px solid lighten(main, 20%)
      border-radius .2rem

      &__suggestion {
        cursor pointer
        font-weight bold
        color darken(main, 10%)

        &:hover {
          text-decoration underline
        }
      }
    }
  }
</style>