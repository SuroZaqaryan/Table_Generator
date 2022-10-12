<template>
  <div>
    <div class="even-accept">
      <SwitchButton v-model="switchStatus"/>
      <p>lalalalala</p>
    </div>

    <div class="picker-wrapper" :class="{'picker-wrapper-active': switchStatus}">
      <div class="sketch">
        <sketch-picker v-model="status"/>
      </div>
      <div class="swatches">
        <swatches-picker v-model="status"/>
      </div>
    </div>
  </div>
</template>

<script>
import {Sketch, Swatches} from "vue-color";
import SwitchButton from "../components/Switch/SwitchButton.vue"

export default {
  components: {
    "sketch-picker": Sketch,
    "swatches-picker": Swatches,
    SwitchButton
  },
  computed: {
    status: {
      get() {
        return this.$store.state.theme.background;
      },
      set(colorValue) {
        this.$store.commit("TABLE_COLOR", colorValue);
      },
    },
  },
  data() {
    return {
      switchStatus: false
    }
  }
}
</script>

<style scoped>

.picker-wrapper {
  opacity: 0.4;
  pointer-events: none;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.picker-wrapper-active {
  opacity: 1;
  pointer-events: all;
  user-select: all;
}

.even-accept {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.even-accept .toggle-wrapper {
  margin-right: 10px;
}
</style>