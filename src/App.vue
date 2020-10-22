<template>
  <div>
    <router-view/>
    <nav>
        <router-link to="/">🚦</router-link> |
        <router-link to="/imprint">Impressum</router-link> |
        <router-link to="/privacy">Datenschutz</router-link> |
        <router-link to="/about">Über</router-link> |
        <router-link to="/config">⚙</router-link>
    </nav>
  </div>
</template>

<script>
</script>

<style>
body {
  margin: 0;
}
nav {
  color: rgb(248, 249, 250);
  background-color: rgb(5, 164, 226);
  padding: 0.5em;
}
nav > a {
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
