# Covid-19 Ampel-Widget

[![github pages deploy](https://github.com/stritti/covid-ampel-widget/workflows/Github%20Pages%20Deploy/badge.svg)](https://github.com/stritti/covid-ampel-widget/actions?query=workflow%3A%22Github+Pages+Deploy%22)
[![CodeQL](https://github.com/stritti/covid-ampel-widget/workflows/CodeQL/badge.svg)](https://github.com/stritti/covid-ampel-widget/actions?query=workflow%3ACodeQL)
[![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://v3.vuejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/J3J33A8DT)

This is HTML based widget to show the incidences of German Landkreise for SARS-CoV-2 (COVID-19) infections.
Cases of the last 7 days per 100,000 inhabitants are shown. These is used in Germany to
define levels for secure each other.

## Live App

▶ [https://covid-ampel.vercel.app/](https://covid-ampel.vercel.app/)

Using additional Apps the Covid-19 Ampel-Widget could be integrated into
[iOS](https://github.com/stritti/covid-ampel-widget/wiki/Anleitung-iOS)) and
[Android](https://github.com/stritti/covid-ampel-widget/wiki/Anleitung-Android):

<img src="https://raw.githubusercontent.com/stritti/covid-ampel-widget/main/public/help/IMG_6911.jpg" width="240" alt="Covid-19 Ampel-Widget" />

<img src="https://raw.githubusercontent.com/stritti/covid-ampel-widget/main/public/help/android-covid-19-ampel-widget.png" width=240/>


---

## Development

### Project setup

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
* Vant - Mobile UI Components built on Vue: <https://youzan.github.io/vant/next>
* ArcGis REST-Service of RKI data: <https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0>
* striped css background: <https://stripesgenerator.com/>
* danaymic font size on iOS respecting system settings: <https://ind.ie/labs/blog/dynamic-type-support/>
* some SVG icons of <https://github.com/tabler/tabler-icons>
* vue-crono: <https://github.com/BrianRosamilia/vue-crono>

## Author

Stephan Strittmatter

[![stritti's Github Stats](https://github-readme-stats.vercel.app/api?username=stritti)](https://github.com/anuraghazra/github-readme-stats)
