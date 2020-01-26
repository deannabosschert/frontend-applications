# Concept- deliverables
Vanuit het 'Words Matter'-document; bezoekers het belang van alternatieven-voor en historie-van achterhaalde terminologie tonen en hen hierbij een inclusiever beeld laten vormen.

## Idee 1
De werken tonen waarbij deze achterhaalde termen/ongepaste terminologie werden gebruikt, hierbij dus de context tonen [bij deze beladen woorden] en hiermee de relevantie van de shift naar een geschiktere huidige terminologie aantonen.

tl;dr waarom sommige woorden not done zijn om nog te gebruiken, aantonen dmv werken waarin de stereotypen hierbij behorende, naar voren zullen komen

![sketch of works displayed per category](https://paper-attachments.dropbox.com/s_472359722E5C7350B8E1B012C1DB68C252C93062F052D8D1201B12828D0557DC_1571221350659_photo5852794411941999196.jpg)

EN/OF

## Idee 2
Gebruik van deze achterhaalde terminologie door de jaren heen; hoe staat dit in verhouding tot het gebruik van geschiktere/alternatieve terminologie [in de daadwerkelijke titels van werken]?

tl;dr vanaf wanneer hadden mensen door dat sommige woorden not done zijn om te gebruiken en steeg het besef van het bestaan van alternatieve woorden?

![example graph of comparison between usage of 'blank' and 'wit'](https://paper-attachments.dropbox.com/s_472359722E5C7350B8E1B012C1DB68C252C93062F052D8D1201B12828D0557DC_1571221364394_photo5852794411941999195.jpg)

## Additional info

### Doelgroep
#### Wie zijn dat?
Adolescenten die zich bezighouden met de huidige discussie omtrent het gebruik van (mogelijk) gevoelige woorden.

#### Wat willen ze?
Meer kennis vergaren over de de geschiedenis achter de terminologie en zo een beeld kunnen vormen bij de context met het gebruik ervan. Kennis krijgen van het bestaan van alternatieven en inzicht krijgen in het gebruik van beide termen door de jaren heen.

### Welke data heeft mijn app nodig om mijn concept te laten werken?
#### Welke selectie moet je toepassen?
* Filteren op werken waarin het woord [foo] gebruikt wordt en deze per categorie tonen
* Hoeveel gebruikte woorden [filteren] per terminologie --> [sorteren] per jaar

#### Welke variabelen bij die data?
* [word] IN 'title'
* year

##### lijst van benoemde woorden in het 'words matter'-document
* Aboriginal
* Afkomst
* Allochtoon
* Barbaar
* Bediende
* Berber
* Blank
* Bombay
-etc

#####  COUNT total hits van ['word' IN 'title'] + ['word' IN description]
##### SORT BY ASC 'year'
##### iets met de tekstbordjes bij tentoongestelde werken, mits deze ook in de database staan (bijv, in welk jaar ze veranderd zijn, wat er veranderd is, over welke terminologie het gaat etc)



PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT * WHERE {
 ?cho dc:title ?title .
 OPTIONAL { ?cho dc:description ?desc .}
 FILTER (CONTAINS (?title, "Aboriginal") OR
         CONTAINS (?title, "Afkomst") OR
         CONTAINS (?desc, "Barbaar")
 )
}


PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT * WHERE {
 ?cho dc:title ?title .
 OPTIONAL { ?cho dc:description ?desc .}
 FILTER (CONTAINS (?title, "Aboriginal") OR
         CONTAINS (?title, "Afkomst") OR
         CONTAINS (?desc, "Allochtoon") OR
         CONTAINS (?title, "Barbaar") OR
   		 CONTAINS (?title, "Bediende") OR
         CONTAINS (?title, "Berber") OR
   		 CONTAINS (?title, "Blank") OR
         CONTAINS (?title, "Bombay") OR
   		 CONTAINS (?title, "Bosneger") OR
         CONTAINS (?title, "Derde Wereld") OR
   		 CONTAINS (?title, "Dwerg") OR
         CONTAINS (?title, "Eskimo") OR
   		 CONTAINS (?title, "Etniciteit") OR
         CONTAINS (?title, "Exotisch") OR
   		 CONTAINS (?title, "Gay") OR
         CONTAINS (?title, "Gekleurd") OR
   		 CONTAINS (?title, "Halfbloed") OR
         CONTAINS (?title, "Handicap") OR
   		 CONTAINS (?title, "Hermafrodiet") OR
         CONTAINS (?title, "Homo") OR
   		 CONTAINS (?title, "Hottentot") OR
         CONTAINS (?title, "Inboorling") OR
   		 CONTAINS (?title, "Indiaan") OR
         CONTAINS (?title, "Indisch") OR
   		 CONTAINS (?title, "Indo") OR
         CONTAINS (?title, "Inheems") OR
   		 CONTAINS (?title, "Inlander") OR
         CONTAINS (?title, "Islamiet") OR
   		 CONTAINS (?title, "Jappenkampen") OR
         CONTAINS (?title, "Kaffer") OR
   		 CONTAINS (?title, "Kaukasisch") OR
         CONTAINS (?title, "Koelie") OR
   		 CONTAINS (?title, "Koppensneller") OR
         CONTAINS (?title, "Marron") OR
   		 CONTAINS (?title, "Medicijnman") OR
         CONTAINS (?title, "Mohammedaan") OR
   		 CONTAINS (?title, "Mongool") OR
         CONTAINS (?title, "Moor") OR
   		 CONTAINS (?title, "Mulat") OR
         CONTAINS (?title, "Neger") OR
   		 CONTAINS (?title, "Ontdekken") OR
         CONTAINS (?title, "Oriëntaals") OR
         CONTAINS (?title, "Oriëntaal") OR
   		 CONTAINS (?title, "Politionele actie") OR
         CONTAINS (?title, "Primitief") OR
   		 CONTAINS (?title, "Pygmee") OR
         CONTAINS (?title, "Queer") OR
   		 CONTAINS (?title, "Ras") OR
         CONTAINS (?title, "Roots") OR
   		 CONTAINS (?title, "Slaaf") OR
         CONTAINS (?title, "Stam") OR
   		 CONTAINS (?title, "Traditioneel") OR
       	 CONTAINS (?title, "Trans") OR
         CONTAINS (?title, "Westers") OR
   		 CONTAINS (?title, "Wit") OR
         CONTAINS (?title, "Zigeuner") OR
   		 CONTAINS (?title, "Zwart")
 )
}
