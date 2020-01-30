<template>
  <main id="info">
    <h1>Info fotografiesoorten</h1>
    <h2>foto's</h2>
    <p>
      Een foto is een afbeelding op een plat vlak vervaardigd door middel van
      fotografie. Een foto geeft relaties weer van objecten, voorwerpen, mensen
      of dieren uit de werkelijke wereld zoals gezien door de lens van een
      camera gedurende een (meestal korte) tijdperiode
    </p>
    <h2>negatieven</h2>
    <p>
      Een negatief is een tussenstadium in het fotografisch procedé dat bij
      gebruik van de meest gangbare lichtgevoelige materialen noodzakelijk is om
      een beeld te kunnen maken. Het is een transparante drager - vroeger
      glasplaat, celluloid en later polyester - met een lichtgevoelige laag.
    </p>
    <h2>dia's</h2>
    <p>
      en dia (of diapositief) is een (met een zogenaamd omkeerprocedé) positief
      ontwikkelde kleuren- of zwart-witfoto op transparant materiaal. Voordat de
      digitale camera gemeengoed werd werden kleurenfoto's voor
      publicatiedoeleinden meestal als dia gemaakt.
    </p>
    <p class="source">Bron: Wikipedia</p>
  </main>
</template>

<script>
export default {
  name: "info"
};
</script>

<style>
#info p {
  max-width: 40vw;
  color: #2c3e50;
  margin-top: -1rem;
}
#info {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  align-content: center;
}

.source {
  font-style: italic;
}
</style>
