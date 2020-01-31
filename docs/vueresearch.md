# VUE

## Research

### What is VUE?

Progressief framework om user interfaces mee te bouwen.
Kern bestaat uit de focus op de view-layer en vue is makkelijk om te combineren met andere libraries of projecten. Manier van code kunnen schrijven in aparte bestanden (componenten) en vue zorgt ervoor dat ze weer correct bij elkaar komen.

Het is makkelijk te onderhouden aangezien alles in delen is 'opgeknipt' en je dus snel aanpassingen kunt maken zonder dat je direct andere onderdelen van je app beïnvloedt. Dit zijn dus die componenten. Hierdoor heb je ook minder kans op bugs.

De HTML, CSS en JS zitten in één component samen, waardoor je code ook overzichtelijker is (aangezien je oa niet telkens terug hoeft te kijken naar een gigantisch JS-bestand).

### When/why do we use it?

Core library is klein (20kb) en vue gebruikt de virtuele DOM voor het renderen/updaten van data, waardoor je een snelle UX kan bieden, zelfs voor complexe applicaties met een grote hoeveelheid data.
Betere performance aangezien niet alle gegevens op de pagina telkens herladen hoeven te worden. Dus; server wordt minder belast en de reactietijd wordt sneller.

Bij gebruikersinput hoeft ook niet de hele pagina herladen te worden maar alleen het relevante deel (bijv; grote website, kleine enquete (3 pagina's om door te klikken oid). Dan ga je niet de hele pagina herladen, maar alleen het deel met de enquete).

Chill te combineren met atomic design; laat je app bijv bestaan uit atomen, die samen weer moleculen vormen, die samen weer organisms vormen.

### What does it do?

Rendert data naar de DOM.
Gebruikt single file components om je app te bouwen waardoor bepaalde componenten of functionaliteiten van een pagina onafhankelijk blijven en bij veelvuldig gebruik op een webpagina niet telkens hoeven te worden herlaad.

### Where do we use it?

In een NodeJS-omgeving.

### How do we use it?

Dmv een .vue extension --> basically gebruik je vue om gewoon de losse componenten te kunnen importen.
https://medium.com/js-dojo/getting-started-with-vuejs-for-web-and-native-285dc64f0f0d
