<template>
  <div :id="category">
    <h2>{{ title }}</h2>
    <div class="content">
      <a v-for="(result, index) in results" :key="index" :href="result.url">
        <section>
          <h3>{{ result.title.value }}</h3>
          <p>&#x25bc; {{ result.location.value }}</p>
          <img
            class="images"
            v-bind:src="result.img.value"
            alt="result.title.value"
          />
        </section>
      </a>
    </div>
  </div>
</template>

<script>
/*eslint 'no-console':0*/
export default {
  name: "category",
  data() {
    return {
      results: []
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  created() {
    const endpoint =
      "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-19/sparql";
    const query = `
           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
           PREFIX dc: <http://purl.org/dc/elements/1.1/>
           PREFIX dct: <http://purl.org/dc/terms/>
           PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
           PREFIX edm: <http://www.europeana.eu/schemas/edm/>
           PREFIX foaf: <http://xmlns.com/foaf/0.1/>

           SELECT ?cho ?title ?location ?type ?img
           WHERE {
          	<https://hdl.handle.net/20.500.11840/termmaster7745> skos:narrower* ?place .
          	?place skos:prefLabel ?location .
            VALUES ?type {"Dia" "dia" "Kleurendia" "kleurendia"}
          	?cho dct:spatial ?place ;
            dc:type ?type ;
            dc:title ?title .
            ?cho edm:isShownBy ?img .
          	FILTER langMatches(lang(?title), "ned")
           }
           ORDER BY DESC(?title)
           LIMIT 40
            `;
    this.loadData(endpoint, query);
  },
  methods: {
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
          console.log(results);
        });

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
    }
  }
};
</script>

<style></style>
