<template>
  <div class="container">
    <h2> {{ category }}</h2>

    <a v-for="(result, index) in results" :key="index" :href="result.url">
      <section class="item">
        <h3>{{ result.title.value }}</h3>
        <p>&#x25bc; {{ result.location.value }}</p>
        <br />

        <img
          class="images"
          v-bind:src="result.img.value"
          alt="result.title.value"
        />
      </section>
    </a>
  </div>
</template>

<script>
/*eslint 'no-console':0*/
export default {
  name: "negatieven",
  data() {
    return {
      results: []
    }
  },
  props: {
    category: {
      type: Object,
      required: true
    }
  },

  mounted() {
    const endpoint =
      "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-19/sparql"
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
       	    VALUES ?type {"Negatief" "negatief" "Glasnegatief" "glasnegatief"}
          	?cho dct:spatial ?place ;
            dc:type ?type ;
            dc:title ?title .
            ?cho edm:isShownBy ?img .
          	FILTER langMatches(lang(?title), "ned")
          }
            LIMIT 20
            `
    this.loadData(endpoint, query)
  },
  methods: {
    loadData(endpoint, query) {
      const querySource_ID =
        endpoint + "?query=" + encodeURIComponent(query) + "&format=json"
      fetch(querySource_ID)
        .then(res => res.json())
        .then(json => {
          this.results = json.results.bindings
          const rawData = this.results
          const results = prettifyArray(rawData)
          console.log(results)
        })

      function prettifyArray(array) {
        return array.map(results => {
          return {
            title: results.title.value,
            location: results.location.value,
            type: results.type.value,
            img: results.img.value
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
h3 {
  background-color: #a31a1a;
  color: #ffffff;
  font-size: 1em;
  font-weight: 450;
  padding: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  letter-spacing: 0.1px;
}
p {
  color: #ffffff;
}
section {
  background-color: #b63232;
  max-width: 20vw;
  border-radius: 5px;
  box-shadow: 10px 10px 3px -4px rgba(0, 0, 0, 0.21);
  padding: 0rem 1rem 1rem 1rem;
  margin: 0.5rem;
}

.images {
  max-width: inherit;
  max-height: inherit;
  object-fit: cover;
  margin-top: -1rem;
}
</style>
