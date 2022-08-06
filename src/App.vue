<template>
  <div id="app">
    <Customize />
    <MultiSplitPane
      split="horizontal"
      width="100%"
      height="100%"
      resizerWidth="15px"
      classes="v-pane-custom"
      @onPaneCollapsed="onPaneCollapsed"
      @onPaneExpanded="onPaneExpanded"
    >
      <Pane>
        <template v-slot:content>
          <div class="matrix-table-generator">
            <Matrix
              @getMatrix="getMatrix"
              :getCoordinatesResult="getCoordinatesResult"
              :matrix="matrix"
            />
            <div>
              <div class="line" />
            </div>
            <TableGenerator
              :watchRef="watchRef"
              :getMatrix="getMatrix"
              :tableRender="tableRender"
            />
          </div>
        </template>
      </Pane>
      <Pane>
        <template v-slot:content>
          <TableDemo
            :tableRender="tableRender"
            :watchRef="watchRef"
            :getMatrix="getMatrix"
          />
        </template>
      </Pane>
    </MultiSplitPane>
  </div>
</template>

<script>
import { MultiSplitPane, Pane } from "vue-multi-split-pane";
import TableDemo from "./components/TableGenerator/Demo/TableDemo.vue";
import Customize from "./components/Customize/Customize.vue";
import Matrix from "./components/Matrix/Matrix.vue";
import TableGenerator from "./components/TableGenerator/TableGenerator.vue";

export default {
  created() {
    this.getArray();
  },

  components: {
    MultiSplitPane,
    Pane,

    TableDemo,
    Customize,
    Matrix,
    TableGenerator,
  },

  mounted() {
    this.$store.dispatch("clone", this.$store.state.theme);
  },

  methods: {
    onPaneCollapsed(paneIndex, paneClass, containerClass) {
      console.log(
        `${paneIndex}. pane collapsed. Pane class: '${paneClass}' MultiSplitPane class: '${containerClass}'`
      );
    },
    onPaneExpanded(paneIndex, paneClass, containerClass) {
      console.log(
        `${paneIndex}. pane expanded. Pane class: '${paneClass}' MultiSplitPane class: '${containerClass}'`
      );
    },

    // Matrix creation
    getArray() {
      for (let a = 1; a < 11; a++) {
        for (let b = 1; b < 11; b++) {
          this.matrix.push({
            x: a * b,
            y: a,
          });
        }
      }
    },

    // Getting coordinates
    getMatrix(x, y) {
      let result = this.getCoordinatesResult;

      this.tableRender.x = [];
      this.tableRender.y = [];

      this.coordinates.matrixY = y;
      this.coordinates.matrixX = x / y;
      result.push(this.coordinates);

      for (let val in result) {
        for (let i = 1; i <= result[val].matrixX; i++) {
          this.tableRender.x.push(i);
        }
        for (let i = 1; i <= result[val].matrixY; i++) {
          this.tableRender.y.push(i);
        }
        // Clearing the array
        result[val].matrixX = [];
        result[val].matrixY = [];
      }
      this.watchRef = !this.watchRef;
    },
  },

  data() {
    return {
      matrix: [],
      getCoordinatesResult: [],
      coordinates: {
        matrixX: "",
        matrixY: "",
      },
      tableRender: {
        x: [],
        y: [],
      },
      watchRef: false,
    };
  },
};
</script>

<style src="./components/style.css"></style>

