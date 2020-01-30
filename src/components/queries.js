export default {
  negatieven: `
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
            LIMIT 30
            `
};
