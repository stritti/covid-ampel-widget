# Covid-19 Ampel-Widget

This is HTML based widget to show the incidences of German Landkreise for SARS-CoV-2 (COVID-19) infections.
Cases of the last 7 days per 100,000 inhabitants are shown. These is used in Germany to
define levels for secure each other.

![Covid-19 Ampel-Widget](https://raw.githubusercontent.com/stritti/covid-ampel-widget/main/public/help/IMG_6911.jpg)

## Development: Project setup

This project is based on vue.js V3.

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Used Libraries and Tools

* vue.js 3: <https://v3.vuejs.org/>
* ArcGis REST-Service of RKI data: <https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0>
* striped css background: <https://stripesgenerator.com/>
