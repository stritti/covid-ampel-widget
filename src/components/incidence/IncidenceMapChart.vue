<template>
  <iframe
    class="chart"
    src="https://semohr.github.io/risikogebiete_deutschland/"
    frameborder="0"
  />
  <div>
    <small>
      Quelle:
      <a
        href="https://github.com/semohr/risikogebiete_deutschland"
        target="_blank"
      >
        github.com/semohr/risikogebiete_deutschland
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
  border-width: 0px
  height: calc(80vh - 40px)
  width: 100vw
</style>
