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
