<template>
  <div>
    <p>
      Mit dieser Anleitung lässt sich das Covid-19 Ampel-Widget ab iOS 14 auf
      dem Homescreen installieren:
    </p>
    <ul>
      <li>
        Die kostenlose iOS-App
        <a
          target="_blank"
          href="https://apps.apple.com/de/app/glimpse-2/id1524217845"
        >Glimpse 2</a>
        installieren.<br>
        <van-image
          alt="Glimpse 2"
          width="240"
          height="200"
          fit="contain"
          :src="require('@/assets/help/ios-app-glimpse.jpg')"
        />
      </li>
      <li>
        Das
        <a
          target="_blank"
          href="https://stritti.github.io/covid-ampel-widget/"
        >
          Covid-19 Ampel-Widget
        </a>
        öffnen.
      </li>
      <li>
        Den gewünschten Landkreis auswählen
      </li>
      <li>
        Nun im Teilen-Menü die Option "Add page to Glimpse" suchen und auswählen
        <br>
        <van-image
          alt="Share"
          width="240"
          height="420"
          fit="contain"
          :src="require('@/assets/help/ios-share.jpg')"
        />

        <van-image
          alt="Add to Glimpse"
          width="240"
          height="420"
          fit="contain"
          :src="require('@/assets/help/ios-add-to-glimpse.jpg')"
        />
      </li>
      <li>
        Wird das Widget richtig angezeigt, mit "Add" hinzufügen
        <br>
        <van-image
          alt="Glimpse add Widget"
          width="240"
          height="420"
          fit="contain"
          :src="require('@/assets/help/ios-glimpse-add-widget.jpg')"
        />
      </li>
      <li>
        Nun kann auf dem Homescreen ein Widget von Glimpse hinzugefügt werden.
        <br>
        <van-image
          alt="Covid-19 Ampel-Widget"
          width="240"
          height="420"
          fit="contain"
          :src="require('@/assets/help/ios-covid-19-ampel-widget.jpg')"
        />
      </li>
    </ul>

    <h3>Tipps</h3>
    <p>
      Wird das Widget nicht richtig angezeigt (weiße Seite), dann am besten in den Widget-Optionen den "Render Delay" auf 5 sec. stellen.
    </p>
    <p>
      Die grüne Fußleiste kann über die Widget-Optionen deaktiviert werden.
      <br>
      <van-image
        alt="Covid-19 Ampel-Widget"
        width="240"
        height="240"
        fit="contain"
        :src="require('@/assets/help/ios-glimpse-settings.jpg')"
      />
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
