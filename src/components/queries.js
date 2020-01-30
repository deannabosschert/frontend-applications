export default {
    categories: `
           PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
           PREFIX dc: <http://purl.org/dc/elements/1.1/>
           PREFIX dct: <http://purl.org/dc/terms/>
           PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
           PREFIX edm: <http://www.europeana.eu/schemas/edm/>
           PREFIX foaf: <http://xmlns.com/foaf/0.1/>
           SELECT ?id ?parentId
           WHERE {
                 # er wordt van boven naar beneden gewerkt in de hiërarchie
                 # geef de categorieën onder wapens en munitie; dit zijn alle parentlabels
                 <https://hdl.handle.net/20.500.11840/termmaster12435> skos:narrower* ?cat .
                 ?cat skos:prefLabel ?id .
                 # geef de term (de "broader term") die daarboven staat in de thesaurus; dit is je 'hoofdterm' nu
                 ?cat skos:broader ?catParent .
                 ?catParent skos:prefLabel ?parentId .
               }
               GROUP BY ?id ?parentId
               ORDER BY ASC(?id)     `,
    another: ``
}
