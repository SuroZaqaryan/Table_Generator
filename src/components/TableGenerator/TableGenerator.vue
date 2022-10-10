<template>
  <div class="GeneratedTable">
    <div style="position: relative">
      <BaseTitle
        title="Demo"
        settings="Customize"
        img="https://i.ibb.co/c8mvVJm/icons8-screensharing-100.png"
        :tableRender="tableRender"
        @click="showCustomizeModal"
      />
      <p v-if="$store.state.styleHeader.background !== undefined">
        {{ $store.state.styleHeader.background.hex }}
      </p>
      <table>
        <div v-if="$store.state.customizeModalIsShow" 
        class="customize-wrapper">
          <div class="customize-wrapper-is-child">
            <div @click="hideCustomizeModal" class="customize-block">
              <img src="@/assets/Icons/TableGenerator/close.png" alt="" />
            </div>
          </div>
        </div>

        <h1 style="background: red">{{$store.state.styleHeader}}</h1>
        <h1 style="background: orange">{{$store.state.styleContent}}</h1>

        <tr>
          <th
            v-for="(i, index) in tableRender.x"
            :key="index"
            :style="$store.getters.contentHeader"
          >
            {{ i.matrixX }}
            Header
          </th>
        </tr>
        <tr
          :class="{ 'tr-expectation': isCustomize }"
          v-for="(i, index) in tableRender.y"
          :key="index"
        >
          <td :style="$store.getters.contentStyle"
           v-for="(i, index) in tableRender.x" :key="index">
            {{ i.matrixY }}
            Cell
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import BaseTitle from "../stories/base-title/BaseTitle";

export default {
  props: {
    tableRender: {
      tableRender: Object,
    },
    watchRef: {
      watchRef: Boolean,
    },
    getMatrix: {
      getMatrix: Function,
    },
  },

  components: {
    BaseTitle,
  },

  data() {
    return {
      isCustomize: false,
    };
  },

  methods: {
    showCustomizeModal() {
      this.isCustomize = true;
      this.$store.commit("SHOW_CUSTOMIZE_MODAL");
    },
    hideCustomizeModal() {
      this.$store.commit("HIDE_CUSTOMIZE_MODAL");
    },
  },
};
</script>

<style src="../style.css"></style>
<style src="../../styles/TableGenerator.css"></style>
