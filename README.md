# Covid-19 Ampel-Widget

This is HTML based widget to show the incidences of German Landkreise for SARS-CoV-2 (COVID-19) infections.
Cases of the last 7 days per 100,000 inhabitants are shown. These is used in Germany to
define levels for secure each other.

![Covid-19 Ampel-Widget](https://raw.githubusercontent.com/stritti/covid-ampel-widget/main/public/help/IMG_6911.jpg)

## Development: Project setup

For development you have to install node.js initially.

This project is based on vue.js V3.

Install initially all dependencies:

``` sh
npm install
```

### Start development server with hot code replacement

``` sh
npm run serve
```

### Compiles and minifies for production

``` sh
npm run build
```

### Lints and fixes files

``` sh
npm run lint
```

## Development Requirements

* node.js

## Used Libraries and Tools

* vue.js 3: <https://v3.vuejs.org/>
* vue-meta: <https://vue-meta.nuxtjs.org/>
* ArcGis REST-Service of RKI data: <https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0>
* striped css background: <https://stripesgenerator.com/>
* danymic font size on iOS respecting sysem settings: <https://ind.ie/labs/blog/dynamic-type-support/>
