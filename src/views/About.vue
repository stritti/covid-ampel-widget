<template>
  <div>
    <doc-head :meta-info="metaInfo" />

    <van-sticky>
      <van-nav-bar
        title="Über"
        left-text="Zurück"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>

    <div class="container">
      <h3>Das Covid-19 Ampel-Widget</h3>
      <p>
        Behalte den Inzidenzwert deines Landkreises im Blick, indem du diesen
        als Widget zu deinem Screen hinzufügst.
      </p>

      <h3>Datenquelle</h3>
      <p>
        Das Covid-19 Ampel-Widget basiert auf den Zahlen, welche das
        <a href="https://www.rki.de/">Robert Koch-Institut (RKI)</a> aus den
        Landkreisen in Deutschland erfasst und unter der
        <a
          target="_blank"
          href="https://www.govdata.de/dl-de/by-2-0"
        >Open Data Datenlizenz Deutschland – Namensnennung – Version 2.0</a>
        zur Verfügung stellt.
      </p>
      <p>
        Für die Daten wird keine Haftung übernommen.
      </p>
      <p>
        In den <router-link to="/config">
          Einstellungen
        </router-link> kann ein
        Landkreis ausgewählt werden, um die Corona-Ampel für diesen anzuzeigen.
      </p>

      <h3>Das Projekt</h3>
      <p>
        Das Covid Ampel Widget ist quelloffen unter der
        <a
          href="https://raw.githubusercontent.com/stritti/covid-ampel-widget/main/LICENSE"
        >MIT-Lizenz</a>
        auf
        <a href="https://github.com/stritti/covid-ampel-widget">GitHub</a>
        verfügbar.
      </p>
      <p>
        <a
          href="https://ko-fi.com/J3J33A8DT"
          target="_blank"
        ><img
          height="36"
          style="border:0px;height:36px;"
          src="https://cdn.ko-fi.com/cdn/kofi1.png?v=2"
          border="0"
          alt="Buy Me a Coffee at ko-fi.com"
        ></a>
      </p>
    </div>
  </div>
</template>

<script>
import DocHead from '@/components/DocHead.vue'

export default {
  name: 'About',
  components: { DocHead },
  data() {
    return {
      metaInfo: {
        title: 'Über | Covid-19 Ampel-Widget',
      }
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/more')
    }
  }
}
</script>


<style scoped>
.container {
  margin-bottom: 1.5rem;
}
</style>
