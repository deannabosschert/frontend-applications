<template>
  <form class="switchBetween" @change="onSwitch">
    <input
      type="radio"
      id="teDoen-input"
      class="switchBetween_radio"
      name="switchBetween-input"
      value="teDoen"
      checked
    />
    <label for="teDoen-input" class="switchBetween_label">
      Toggle 1
    </label>
    <input
      type="radio"
      id="incl-alGehaald-input"
      class="switchBetween_radio"
      name="switchBetween-input"
      value="incl-alGehaald"
    />
    <label for="incl-alGehaald-input" class="switchBetween_label">
      Toggle 2
    </label>
  </form>
</template>

<script>
export default {
  methods: {
    onSwitch(event) {
      if (event.target.value === "teDoen") {
        return this.$emit("teDoen-click")
      }

      return this.$emit("incl-alGehaald-click")
    }
  }
}
</script>

<style>
.switchBetween {
  display: flex;
  padding: 2px;
  border-radius: 10px;
  background: white;
  max-width: 50vw;
  /* margin-left: 25vw;
  margin-right: 25vw; */
}

.switchBetween_label {
  flex: 0 0 50%;
  padding: 20px 0;
  border-radius: 7px;
  background: white;
  text-align: center;
  align-self: center;
  /* max-width: 12.5vw; */
  font-weight: 600;
}

.switchBetween_radio:checked + .switchBetween_label {
  background: #174e49;
  color: white;
}

input[type="radio"] {
  visibility: hidden;
}
</style>
