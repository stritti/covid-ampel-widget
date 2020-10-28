import Widget from '@/components/Widget.vue';
<template>
  <div>
    <h3 class="title"><router-link class="button" to="/">&lt;</router-link> Das Covid-19 Ampel-Widget</h3>
    <div class="container">
      <p>Behalte den Inzidenzwert deines Landkreises im Blick,
        indem du diesen als Widget zu deinem Screen hinzufügst.
      </p>

      <h4>Datenquelle</h4>
      <p>
        Das Covid-19 Ampel-Widget basiert auf den Zahlen, welche das
        <a href="https://www.rki.de/">Robert-Koch-Institut (RKI)</a> aus den
        Landkreisen in Deutschland erfasst. Für die Daten wird keine Haftung übernommen.<br />
        In den <router-link to="/config">Einstellungen</router-link> kann ein Landkreis
        ausgewählt werden, um die Corona-Ampel für diesen anzuzeigen.
      </p>

      <h4>Als Widget zu iOS 14 hinzufügen</h4>
      <p><a href="https://github.com/stritti/covid-ampel-widget/wiki/Anleitung-iOS">Anleitung iOS</a></p>

      <h4>Als Widget zu Android hinzufügen</h4>
      <p><a href="https://github.com/stritti/covid-ampel-widget/wiki/Anleitung-Android">Anleitung Android</a></p>

      <h4>Das Projekt</h4>
      <p>
        Das Covid Ampel Widget ist quelloffen unter der
        <a href="https://raw.githubusercontent.com/stritti/covid-ampel-widget/main/LICENSE">MIT-Lizenz</a>
        verfügbar:
        <a href="https://github.com/stritti/covid-ampel-widget">https://github.com/stritti/covid-ampel-widget</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Über Covid-19 Ampel-Widget'
    }
  }
</script>
