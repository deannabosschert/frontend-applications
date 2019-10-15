# VUE
## Research

### What is VUE?
Progressief framework om user interfaces mee te bouwen.
Kern bestaat uit de focus op de view-layer en vue is makkelijk om te combineren met andere libraries of projecten. Manier van code kunnen schrijven in aparte bestanden en vue zorgt ervoor dat ze weer correct bij elkaar komen.

Het is makkelijk te onderhouden aangezien alles in delen is 'opgeknipt' en je dus snel aanpassingen kunt maken zonder dat je direct andere onderdelen van je app beïnvloedt. Dit zijn componenten.

De HTML, CSS en JS zitten in één component samen, waardoor je code ook overzichtelijker is (aangezien je oa niet telkens terug hoeft te kijken naar een gigantisch JS-bestand)


### What does it do?
Rendert data naar de DOM.
Gebruikt single file components om je app te bouwen waardoor bepaalde componenten of functionaliteiten van een pagina onafhankelijk blijven en bij veelvuldig gebruik op een webpagina niet telkens hoeven te worden herlaad.



### When/why do we use it?
Core library is klein (20kb) en vue gebruikt de virtuele DOM voor het renderen/updaten van data, waardoor je een snelle UX kan bieden, zelfs voor complexe applicaties met een grote hoeveelheid data.
Betere performance aangezien niet alle gegevens op de pagina telkens herladen hoeven te worden. Dus; server wordt minder belast en de reactietijd wordt sneller.

Chill te combineren met atomic design; laat je app bijv bestaan uit atomen, die samen weer moleculen vormen, die samen weer organisms vormen.

### Where do we use it?

### How do we use it?
Dmv een .vue extension --> basically gebruik je vue om gewoon de losse componenten te kunnen importen.

1. Link je vue-script vlak voor </body>.
2. Voeg de vue-componenten toe aan je body
3.



### Mini example
