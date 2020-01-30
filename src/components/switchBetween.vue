<template>
  <form class="switchBetween" @change="onSwitch">
    <input
      type="radio"
      id="fotos"
      class="switchBetween_radio"
      name="switchBetween-input"
      value="fotos"
      checked
    />
    <label for="fotos" class="switchBetween_label">
     Foto's
    </label>
    <input
      type="radio"
      id="negatieven"
      class="switchBetween_radio"
      name="switchBetween-input"
      value="negatieven"
    />
    <label for="negatieven" class="switchBetween_label">
      Negatieven
    </label>

    <input
      type="radio"
      id="dias"
      class="switchBetween_radio"
      name="switchBetween-input"
      value="dias"
    />
    <label for="dias" class="switchBetween_label">
      Dia's
    </label>

    <input
      type="radio"
      id="lichtbeelden"
      class="switchBetween_radio"
      name="switchBetween-input"
      value="lichtbeelden"
    />
    <label for="lichtbeelden" class="switchBetween_label">
      Lichtbeelden
    </label>
  </form>
</template>

<script>
export default {
  methods: {
    onSwitch(event) {
      if (event.target.value === "fotos") {
        return this.$emit("fotos-click")
      }
      else if (event.target.value === "negatieven") {
        return this.$emit("negatieven-click")
      }
      else if (event.target.value === "dias") {
        return this.$emit("dias-click")
      }

      return this.$emit("lichtbeelden-click")
    }
  }
}
</script>

<style>
.switchBetween {
  display: flex;
  padding: 2px;
  border-radius: 10px;
  /* max-width: 50vw; */
  justify-content: center;
  margin: 2rem;
  /* margin-left: 25vw;
  margin-right: 25vw; */
  /* background-color: blue; */
}

.switchBetween_label {
  padding: 1.2rem;
  border-radius: 5px;
  background: white;
  text-align: center;
  align-self: center;
  /* max-width: 12.5vw; */
  font-weight: 600;
  margin-left: 2rem;
}

.switchBetween_radio:checked + .switchBetween_label {
  background: #174e49;
  color: white;
}

input[type="radio"] {
  visibility: hidden;
}
</style>
