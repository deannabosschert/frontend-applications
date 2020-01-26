PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT * WHERE {
 ?cho dc:title ?desc .
 OPTIONAL { ?cho dc:description ?desc .}
 FILTER (CONTAINS (?desc, "Aboriginal") OR
         CONTAINS (?desc, "Afkomst") OR
         CONTAINS (?desc, "Allochtoon") OR
         CONTAINS (?desc, "Barbaar") OR
   		 CONTAINS (?desc, "Bediende") OR
         CONTAINS (?desc, "Berber") OR
   		 CONTAINS (?desc, "Blank") OR
         CONTAINS (?desc, "Bombay") OR
   		 CONTAINS (?desc, "Bosneger") OR
         CONTAINS (?desc, "Derde Wereld") OR
   		 CONTAINS (?desc, "Dwerg") OR
         CONTAINS (?desc, "Eskimo") OR
   		 CONTAINS (?desc, "Etniciteit") OR
         CONTAINS (?desc, "Exotisch") OR
   		 CONTAINS (?desc, "Gay") OR
         CONTAINS (?desc, "Gekleurd") OR
   		 CONTAINS (?desc, "Halfbloed") OR
         CONTAINS (?desc, "Handicap") OR
   		 CONTAINS (?desc, "Hermafrodiet") OR
         CONTAINS (?desc, "Homo") OR
   		 CONTAINS (?desc, "Hottentot") OR
         CONTAINS (?desc, "Inboorling") OR
   		 CONTAINS (?desc, "Indiaan") OR
         CONTAINS (?desc, "Indisch") OR
   		 CONTAINS (?desc, "Indo") OR
         CONTAINS (?desc, "Inheems") OR
   		 CONTAINS (?desc, "Inlander") OR
         CONTAINS (?desc, "Islamiet") OR
   		 CONTAINS (?desc, "Jappenkampen") OR
         CONTAINS (?desc, "Kaffer") OR
   		 CONTAINS (?desc, "Kaukasisch") OR
         CONTAINS (?desc, "Koelie") OR
   		 CONTAINS (?desc, "Koppensneller") OR
         CONTAINS (?desc, "Marron") OR
   		 CONTAINS (?desc, "Medicijnman") OR
         CONTAINS (?desc, "Mohammedaan") OR
   		 CONTAINS (?desc, "Mongool") OR
         CONTAINS (?desc, "Moor") OR
   		 CONTAINS (?desc, "Mulat") OR
         CONTAINS (?desc, "Neger") OR
   		 CONTAINS (?desc, "Ontdekken") OR
         CONTAINS (?desc, "Oriëntaals") OR
         CONTAINS (?desc, "Oriëntaal") OR
   		 CONTAINS (?desc, "Politionele actie") OR
         CONTAINS (?desc, "Primitief") OR
   		 CONTAINS (?desc, "Pygmee") OR
         CONTAINS (?desc, "Queer") OR
   		 CONTAINS (?desc, "Ras") OR
         CONTAINS (?desc, "Roots") OR
   		 CONTAINS (?desc, "Slaaf") OR
         CONTAINS (?desc, "Stam") OR
   		 CONTAINS (?desc, "Traditioneel") OR
       	 CONTAINS (?desc, "Trans") OR
         CONTAINS (?desc, "Westers") OR
         CONTAINS (?desc, "Zigeuner")
 )
}
