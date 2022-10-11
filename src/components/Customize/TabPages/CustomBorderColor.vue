<template>
  <div>
    <div class="picker-wrapper">
      <div class="sketch">
        <sketch-picker v-model="status" />
      </div>
      <div>
        <slider-picker v-model="status" />
        <div class="grayscale-twitter">
          <div class="border-grayscale">
            <grayscale-picker v-model="status" />
          </div>
          <div class="border-twitter">
            <twitter-picker v-model="status" />
          </div>
        </div>
        <hr class="line" />
        <Range title="Border Weight" />
      </div>
    </div>
  </div>
</template>

<script>
import Range from "../components/Range/Range";
import { Sketch, Grayscale, Slider, Twitter } from "vue-color";

export default {
  components: {
    Range,
    "sketch-picker": Sketch,
    "slider-picker": Slider,
    "grayscale-picker": Grayscale,
    "twitter-picker": Twitter,
  },

  computed: {
    status: {
      get() {
        return this.$store.state.theme.borderColor;
      },
      set(colorValue) {
        this.$store.commit("TABLE_COLOR", colorValue);
      },
    },
  },
};
</script>

<style src="./css/style.css"></style>
