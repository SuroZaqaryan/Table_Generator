<template>
  <div>
    <div class="picker-wrapper">
      <div class="sketch">
        <sketch-picker v-model="status" />
      </div>
      <div class="swatches">
        <swatches-picker v-model="status" />
      </div>
    </div>
  </div>
</template>

<script>
import { Sketch, Swatches } from "vue-color";

export default {
  components: {
    "sketch-picker": Sketch,
    "swatches-picker": Swatches,
  },
  computed: {
    status: {
      get() {
        return this.$store.state.theme.background;
      },
      set(colorValue) {
        this.$store.commit(
          "TABLE_BACKGROUND",
          colorValue
        );
      },
    },
  },
};
</script>

<style scoped>
/* Track */
::-webkit-scrollbar-track {
  background: #f5f5f5;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #e2e2e2;
}

::-webkit-scrollbar-thumb {
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #d4d4d4;
}

.picker-wrapper {
  display: flex;
  padding-bottom: 0.2rem;
}

.sketch {
  margin-right: 16px;
}
</style>

<style>
.swatches,
.vc-swatches {
  height: 280.24px !important;
}

.swatches > .vc-swatches {
  height: 307.24px !important;
}

.swatches > .vc-swatches > .vc-swatches-box {
  padding: 10px 0px 0px 10px !important;
}
</style>
