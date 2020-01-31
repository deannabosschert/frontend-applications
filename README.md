# Frontend-Applications

## Assignment
Create a client-side application in JavaScript which dynamically renders data to views using either a front-end framework or system created by you. Reflect on the merits and costs of frameworks together.

# Concept
[Deze website](https://frontend-applications-deannab…) biedt overzicht voor wie zich graag bezighoudt met fotografie en geïnspireerd kan/wil worden door de toentertijdse fotografiestijl in Indonesië. Hierbij kan gefilterd worden op soort fotografie;
* Foto
* Negatief
* Dia
* Lichtbeeld

![screenshot of website](https://github.com/deannabosschert/frontend-applications/blob/master/docs/images/screenshot_app.png)

Aangezien ik zelf ook affiniteit heb met analoge fotografie (okay, misschien een redelijke collectie aan camera's, film en afdrukken inmiddels..) leek dit mij wel een tof iets om het leren van mijn framework mee te doen.

## Schets
Normaal maak ik uiteraard eerst mijn schetsen maar in dit uitzonderlijke geval wilde ik mij allereerst richten op het gebruik van het framework ipv concept.

# Installatie
` npm install -g @vue/cli ` ==> install vue cli globally
` npm install` ==> install my added packages

### Compiles and hot-reloads for development
` npm run dev ` ==> tijdens development de app compilen en reloaden

### Compiles and minifies for production

`npm run build` ==> gooit alles in /dist, geoptimaliseerd voor productie


# Data
## Data loading + cleaning
De data wordt ingeladen middels de loadData-function (credits: https://github.com/cmda-tt/course-19-20/tree/master/examples) waarin het vervolgens wordt omgezet naar json.

```js
loadData(endpoint, query) {
      const querySource_ID =
        endpoint + "?query=" + encodeURIComponent(query) + "&format=json";
      // source: fetch in code of Laurens Aarnoudse
      fetch(querySource_ID)
        .then(res => res.json())
        .then(json => {
          this.results = json.results.bindings;
          const rawData = this.results;
          const results = prettifyArray(rawData);
        });
 ```

Hierna gooi ik de opgehaalde json-array door m'n prettifyArray heen om de data te cleanen (= alleen benodigde values extracten).

```js
      function prettifyArray(array) {
        return array.map(results => {
          return {
            title: results.title.value,
            location: results.location.value,
            type: results.type.value,
            img: results.img.value
          };
        });
      }
```

## TO DO
- [ ] Queries in aparte file
- [ ] Header in aparte file
- [ ] Eén functional categorie-component waaraan 'category' als prop wordt meegegeven. (nu niet gelukt ivm mislukte koppeling 'queries.js')
- [ ] loadData in aparte file
- [ ] SASS gebruiken

## Progress
Zie mijn [Wiki](https://github.com/deannabosschert/frontend-applications/wiki) voor documentatie.

## Bronnen
* Installatie vue: https://medium.com/js-dojo/getting-started-with-vuejs-for-web-and-native-285dc64f0f0d 
* Vue-routing: via https://router.vuejs.org/guide/ 
* Losse eindjes: https://github.com/cmda-tt/course-19-20/tree/master/examples 
