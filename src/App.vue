<template>
  <div id="view">
    <router-view />
    <navigation-bar />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  components: { NavigationBar },
  data() {
    return {
      showIntro: false
    }
  }
}
</script>

<style lang="scss">
body {
  background: var(--background-color);
  color: var(--text);
}

.title {
  width: auto;
  color: rgb(248, 249, 250);
  background-color: rgb(5, 164, 226);
  padding: 0.5em;
}

.container {
  width: auto;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 2.5rem;
  margin-right: auto;
  margin-left: auto;
}

@supports (font: -apple-system-body) {
  html {
    font: -apple-system-body;
  }

  /* default size of -apple-system-body here is 17px
   using that as a default, scale text down to equivalent of 14px (14/17).
  */
  body {
    font-size: 0.94em;
  }

  @media only screen and (min-width: 28.78em) {
    html {
      font: -apple-system-body;
    }

    /* default size of -apple-system-body here is 17px
     using that as a default, scale text down to equivalent of 16px (16/17).
    */
    body {
        font-size: 0.82em;
      }
    }
  }

  @media only screen and (min-width: 33.4em) {
    html {
      font: -apple-system-body;
    }

    /* default size of -apple-system-body here is 17px
     using that as a default, scale text down to equivalent of 18px (18/17)
    */
    body {
      font-size: 1.06em;
    }
  }
</style>
