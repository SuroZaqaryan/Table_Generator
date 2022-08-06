<template>
  <div class="matrix-wrapper">
    <div class="matrix-wrapper-of-child">
      <!-- @mouseleave="matrixEnable" -->
      <div
        v-for="chunk in Math.ceil(matrix.length / 2)"
        :key="'chunk-' + chunk"
        class="hero-image"
      >
        <div
          v-for="(i, index) in matrix.slice((chunk - 1) * 10, chunk * 10)"
          :key="'A' + index"
          :class="{ active: i.activeCoordinate }"
          class="matrix-container"
        >
          <div
            @click="getMatrix(i.x, i.y), getActiveCoordinate(i.x, i.y, index)"
            class="matrix-row"
          >
            <!-- <p style="color: #fff; font-size: 12px">
            {{ i.activeCoordinate }}
          </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    matrix: {
      type: Array,
      default: () => () => {},
    },
    getCoordinatesResult: {
      type: Array,
    },
  },
  data() {
    return {
      secondClick: 0,
    };
  },
  methods: {
    matrixEnable() {
      for (let r = 0; r < this.matrix.length; r++) {
        if (this.matrix[r].activeCoordinate) {
          this.matrix[r].activeCoordinate = "";
        }
      }
    },
    getMatrix(x, y) {
      this.$emit("getMatrix", x, y);
    },
    getActiveCoordinate(x, y) {
      let res = x / y;
      let count = 10;
      this.secondClick++;
      let arr = [];
      for (let r = 0; r < res; r++) {
        arr.push(r);
      }
      this.matrix.forEach((val, index) => {
        for (let index = 0; index < y; index++) {
          let cr = count * index;
          arr.map(() => {
            Vue.set(this.matrix[cr++], "activeCoordinate", true);
          });
        }
        if (val.activeCoordinate && this.secondClick > 1) {
          if (index > 0 && this.matrix[index].activeCoordinate != undefined) {
            delete this.matrix[index].activeCoordinate;
          }
        }
      });
    },
  },
};
</script>

<style scoped src="../../styles/Matrix.css"></style>