
<template>
<div class="container">
 <a v-for="(result, index) in results"
    :key="index"
    :href="result.url"
 >
  <section class = "ding">

    <h3>{{ result.title.value }}</h3>
   <p> &#x25bc; {{ result.location.value }}</p> <br>

   <img class="images" v-bind:src="result.img.value" alt="result.title.value">
 </section>

 </a>
</div>
</template>


<script>
/*eslint 'no-console':0*/
export default {
  name: "lichtbeelden",
	data() {
		return {
			results: []
		}
	},
	mounted() {
		const endpoint = 'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-19/sparql'
		const query = `
           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
           PREFIX dc: <http://purl.org/dc/elements/1.1/>
           PREFIX dct: <http://purl.org/dc/terms/>
           PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
           PREFIX edm: <http://www.europeana.eu/schemas/edm/>
           PREFIX foaf: <http://xmlns.com/foaf/0.1/>
           SELECT ?cho ?title ?location ?type ?img WHERE {
        	<https://hdl.handle.net/20.500.11840/termmaster7745> skos:narrower* ?place .
        	?place skos:prefLabel ?location .

     	VALUES ?type {"Lichtbeeld" "lichtbeeld"}

        	?cho dct:spatial ?place ;
             dc:type ?type ;
             dc:title ?title .
             ?cho edm:isShownBy ?img .

        	FILTER langMatches(lang(?title), "ned")

     }


                    LIMIT 200
               `
		// SELECT ?cho ?id ?parentId
		// WHERE {
		//       # er wordt van boven naar beneden gewerkt in de hiërarchie
		//       # geef de categorieën onder wapens en munitie; dit zijn alle parentlabels
		//       <https://hdl.handle.net/20.500.11840/termmaster12435> skos:narrower* ?cat .
		//       ?cat skos:prefLabel ?id .
		//       # geef de term (de "broader term") die daarboven staat in de thesaurus; dit is je 'hoofdterm' nu
		//       ?cat skos:broader ?catParent .
		//       ?catParent skos:prefLabel ?parentId .
		//     }
		//     GROUP BY ?id ?parentId
		//     ORDER BY ASC(?id)
		//

		this.loadData(endpoint, query)
	},
	methods: {
		loadData(endpoint, query) {
			const querySource_ID = endpoint + '?query=' + encodeURIComponent(query) + '&format=json'
			fetch(querySource_ID).then(res => res.json()).then(json => {
				this.results = json.results.bindings
				const rawData = this.results
				const results = prettifyArray(rawData)
				console.log(results)

				// let mySet = new Set()
				// mySet.add(results)

				// let test5 = Array.from(mySet)
				// [ "foo", "bar", "baz" ]
				// console.log(mySet)
				// console.log(test5)

				// const set = Array.from(new Set(results.map(JSON.stringify))).map(JSON.parse)

				// const test1 = Array.from(set)
				// [ "foo", "bar", "baz" ]
				// console.log(results[1].title)
				//
				//  results.forEach(function(i){
				//   i.img = i.img.replace("http", "https")
				// })
			})

			function prettifyArray(array) {
				return array.map(results => {
					return {
						// id: item.id && item.id.value,
						// parentId: item.parentId && item.parentId.value,
						// catid: item.catid && item.catid.value,
						// size: item.size && item.size.value
						title: results.title.value,
						location: results.location.value,
						// typ: results.typ && results.typ.value,
						type: results.type.value,
						// catLabel: results.catLabel && results.catLabel.value,
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
  /* display: grid;
  grid-template-columns: 30vw 30vw 30vw;
  grid-template-rows: 30vw 30vw;
  grid-gap: 5vw; */

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* position: relative; */
}
  h3 {
    background-color: #a31a1a;
    color: #ffffff;
    /* padding: 0.2em 0.5em; */
    /* margin: 0.5em; */
    /* text-transform: lowercase; */
    /* font-variant: small-caps; */
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
  .ding {
    background-color: #b63232;
    max-width: 20vw;
    border-radius: 5px;
    box-shadow: 10px 10px 3px -4px rgba(0,0,0,0.21);
    padding: 0rem 1rem 1rem 1rem;
    margin: 0.5rem;
  }
  /* .color-primary-0 { color: #983351 }
  .color-primary-1 { color: #E498AF }
  .color-primary-2 { color: #BE5F7C }
  .color-primary-3 { color: #721330 }
  .color-primary-4 { color: #4C0017 } */


.images {
  max-width: inherit;
  max-height: inherit;
  object-fit: cover;
  background-color: grey;
  margin-top: -5%;
}

/*
.item {
  max-width: 10vw;
  max-height: 8vh;
  display: flex;
  object-fit: cover;

} */
/*
.images {
  max-width: 10vw;
  max-height: 8vh;
} */


</style>
