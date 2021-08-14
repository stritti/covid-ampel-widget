<template>
  <iframe
    class="chart"
    src="https://semohr.github.io/risikogebiete_deutschland/"
  />
  <div>
    <small>
      Quelle:
      <a
        href="https://github.com/semohr/risikogebiete_deutschland"
        target="_blank"
      >
        https://github.com/semohr/risikogebiete_deutschland
      </a>
    </small>
  </div>
</template>

<script>
export default {
  name: 'IncidenceMapChart'
}
</script>

<style lang="sass" scoped>
.chart
  height: calc(100vh - 141px)
  width: calc(100vw - 6px)
</style>
