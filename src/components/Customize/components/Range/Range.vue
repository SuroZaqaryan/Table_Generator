<template>
  <div class="custom-border-wrapper">

    <div class="border-title">
      <h3>{{ title }}</h3>
    </div>

    <div class="border-range">
      <div class="input-range">
        <input
            v-if="$store.state.tableContentValue.tableNavbarValue === 'BorderColor'"
            type="number"
            step="0"
            @input="getBorderWeightCount"
            v-model="borderWeightValue"
        />
        <input
            v-if="$store.state.tableContentValue.tableNavbarValue === 'TextColor'"
            type="number"
            step="100"
            @input="getFontWeightCount"
            v-model="fontWeightValue"
        />
      </div>

      <div class="input-select-range">
        <input
            v-if="$store.state.tableContentValue.tableNavbarValue === 'BorderColor'"
            type="range"
            min="0"
            max="15"
            step="1"
            @input="getBorderWeightCount"
            v-model="borderWeightValue"
        />
        <input
            v-if="$store.state.tableContentValue.tableNavbarValue === 'TextColor'"
            type="range"
            min="100"
            max="900"
            step="100"
            @input="getFontWeightCount"
            v-model="fontWeightValue"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },

  data() {
    return {
      borderWeightValue: 1,
      fontWeightValue: 100,
    };
  },

  watch: {
    borderWeightValue() {
      this.validateBorderCount();
    },

    fontWeightValue() {
      this.validateFontCount();
    },
  },

  methods: {
    getBorderWeightCount(e) {
      this.borderWeightValue = e.target.value;
      this.$store.commit(
          "TABLE_BORDER_WEIGHT",
          parseInt(this.borderWeightValue)
      );
    },

    getFontWeightCount(e) {
      this.fontWeightValue = e.target.value;
      this.$store.commit(
          "TABLE_FONT_WEIGHT",
          parseInt(this.fontWeightValue)
      );
    },

    validateBorderCount() {
      if (this.borderWeightValue > 15) {
        this.borderWeightValue = 15;
      } else if (this.borderWeightValue < 0 || this.borderWeightValue === "") {
        this.borderWeightValue = 1;
      }
    },

    validateFontCount() {
      if (this.fontWeightValue > 900) {
        this.fontWeightValue = 900;
      } else if (this.fontWeightValue < 0) {
        this.fontWeightValue = 100;
      }
    },
  },
};
</script>

<style scoped>
.border-title > h3 {
  font-size: 17px;
}

.border-range {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.7rem;
}

.input-select-range {
  width: 68%;
}

.input-select-range > input {
  display: flex;
  width: 100%;
}

.input-range {
  width: 24%;
}

.input-range > input {
  width: 100%;
  border: 1px solid #0000004f;
  padding: 4px 10px;
  padding-right: 3px;
  outline-width: 0.1px;
  outline-color: rgba(149, 149, 149, 0.65);
}
</style>
