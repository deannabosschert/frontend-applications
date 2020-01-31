# Breakdown
## Wat wordt waarvoor gebruikt?

### Node.js
Softwareplatform waarmee je een server kunt laten draaien.
Hierdoor kun je JavaScript (wat oorspronkelijk voor de clientside was) aan de serverkant gebruiken.

### npm
Gebruik van packages; grote verzamelplaats voor packages en met npm kun je met ze interacten.

### express
Routing regelen, http helpers gebruiken (redirecting, caching)

#### EJS/'views'-map [je kan ook ez kiezen voor een andere tho]
Templating engine voor NodeJS; handler. Maakt een HTML-template met minimale code en kan data client-side toevoegen aan de HTML. Zorgt ervoor dat JS omgezet wordt naar HTML.

#### body-parser
Middleware; zit tussen je handler en incoming request bodies en zorgt ervoor dat de requests geparsed worden voor ze naar je [EJS] gaan.

#### multer
Middleware zodat je incoming requests bij in de vorm van een form die een fileupload bevat (multipart/form-data kunt handlen); deze package voegt een body-object en een file-object aan de request toe. Body-object bevat de waarden van de text fields van het formulier, de file bevat de uploaded file.

#### Vue.js
Hierdoor kun je code opdelen in componenten/losse files waardoor de verschillende onderdelen van je webpagina onafhankelijk van elkaar kunnen opereren.

#### Nodemon
Hiermee kun je je server automatisch laten reloaden wanneer je wijzigingen in je code aanbrengt.


### Tl;dr
NodeJS is je server
npm is zodat je packages kunt gebruiken
Express is je routingregelaar
EJS is je paginatemplate waardoor je serversidedingen naar HTML wordt omgezet
Vue is hoe je pagina's op de client worden geladen --> bepaalt de HTML-syntax
