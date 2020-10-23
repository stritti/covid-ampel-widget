<template>
  <div id="view">
    <router-view/>
    <transition name="fade">
      <nav v-if="showNavigation">
          <router-link :to="home">🚦</router-link> |
          <router-link to="/imprint">Impressum</router-link> |
          <router-link to="/privacy">Datenschutz</router-link> |
          <router-link to="/about">Über</router-link> |
          <router-link to="/config">Einstellungen</router-link>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavigation: false
    }
  },
  computed: {
    home () {
      let route = '/'
      let selected = localStorage.getItem('landkreis')
      if (selected === null) {
        route = '/config'
      } else {
        route = '/lkr/' + selected
      }
      return route
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    document.addEventListener('touchmove', this.onScroll)
    document.addEventListener('mousemove', this.onScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
    document.removeEventListener('touchmove', this.onScroll)
    document.removeEventListener('mousemove', this.onScroll)
  },
  methods: {
    onScroll () {
      this.showNavigation = true
      setTimeout(() => this.showNavigation = false, 5000)
    }
  }
}
</script>

<style>
html,
body {
  font-size: 14px;
  line-height: 2rem;
  padding: 0;
  margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}

h1 {
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 3.2rem;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

h4 {
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
}

small {
  font-size: 0.9rem;
}
nav {
  position: fixed;
    width: 100%;
  color: rgb(248, 249, 250);
  background-color: rgb(5, 164, 226);
  padding: 0.5em;
  bottom: 0;
}
nav > a {
  color: rgb(248, 249, 250);
  text-decoration: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.button {
  min-width: 120px;
  height: 1.8rem;
  color: rgb(248, 249, 250);
  background-color: rgb(5, 164, 226);
  margin: 1rem 0.5rem 1rem 0.5rem;
  padding: 0.8rem;
  border: 1px solid;
  border-radius: 5%;
  text-decoration: none;
}
.button:hover, .button:active {
  background-color: rgb(62, 200, 255);
}

h3 > .button {
  margin-left: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}
#view {
  min-height:240px;
}
</style>
