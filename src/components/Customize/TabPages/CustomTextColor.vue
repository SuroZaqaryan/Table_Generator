<template>
  <div>
    <div class="picker-wrapper">
      <div class="sketch">
        <sketch-picker v-model="$store.state.theme.textColor" />
      </div>
      <div>
        <slider-picker v-model="$store.state.theme.textColor" />
        <div class="grayscale-twitter">
          <div class="border-grayscale">
            <grayscale-picker v-model="$store.state.theme.textColor" />
          </div>
          <div class="border-twitter">
            <twitter-picker v-model="$store.state.theme.textColor" />
          </div>
        </div>
        <hr class="line" />
        <Range
          title="Font Weight"
          :fontWeight="this.$store.state.theme.weight.fontWeight"
        />
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
};
</script>

<style src="./css/style.css"></style>




