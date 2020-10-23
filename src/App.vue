<template>
  <div>
    <router-view/>
    <nav>
        <router-link :to="home">🚦</router-link> |
        <router-link to="/imprint">Impressum</router-link> |
        <router-link to="/privacy">Datenschutz</router-link> |
        <router-link to="/about">Über</router-link> |
        <router-link to="/config">⚙</router-link>
    </nav>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style>
body {
  margin: 0;
}
nav, .nav {
  color: rgb(248, 249, 250);
  background-color: rgb(5, 164, 226);
  padding: 0.5em;
}
nav > a, .nav {
  color: rgb(248, 249, 250);
  text-decoration: none;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}
</style>
