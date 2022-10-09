import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeContent: "0",

    testStatus: false,

    customizeModalIsShow: false,

    theme: {
      background: "#1c1c1c",
      textColor: "#1c1c1c",
      borderColor: {
        hex: "#1c1c1c",
      },
      borderStyle: "solid",
      weight: {
        borderWeight: 0.1,
        fontWeight: 100,
      },
    },

    styleHeader: {},
    styleContent: {},
  },

  getters: {
    style(state) {
      let style = {
        background:
          state.theme.background.hex !== undefined
            ? state.theme.background.hex
            : "#f7f7f7",
        color: state.theme.textColor.hex,
        fontWeight: state.theme.weight.fontWeight,
        border: `${state.theme.weight.borderWeight + "px"}
             ${state.theme.borderStyle}
             ${state.theme.borderColor.hex}`,
      };
      return style;
    },

    contentHeader(state) {
      let style = {
        background:
          state.styleHeader.background?.hex === undefined
            ? "#282c35"
            : state.styleHeader.background?.hex,
        color:
          state.styleHeader.textColor?.hex === undefined
            ? "#fff"
            : state.styleHeader.textColor?.hex,
        fontWeight: state.styleHeader.weight?.fontWeight,
        border: `${state.styleHeader.weight?.borderWeight + "px"}
             ${state.styleHeader.borderStyle}
             ${state.styleHeader.borderColor?.hex}`,
      };
      return style;
    },

    contentStyle(state) {
      let style = {
        background:
          state.styleContent.background?.hex !== undefined
            ? state.styleContent.background?.hex
            : "#f7f7f7",
        color:
          state.styleContent.textColor?.hex === undefined
            ? "#1c1c1c"
            : state.styleContent.textColor?.hex,
        fontWeight: state.styleContent.weight?.fontWeight,
        border: `${state.styleContent.weight?.borderWeight + "px"}
             ${state.styleContent.borderStyle}
             ${state.styleContent.borderColor?.hex}`,
      };
      return style;
    },
  },

  mutations: {
    SHOW_CUSTOMIZE_MODAL(state) {
      state.customizeModalIsShow = true;
    },
    HIDE_CUSTOMIZE_MODAL(state) {
      state.customizeModalIsShow = false;
    },
    OBJECT_CLONE(state, val) {
      state.styleHeader = { ...val };
      state.styleContent = { ...val };
    },
    CHECK_ACTIVE_CONTENT(state, message) {
      console.log(message);
      switch (state.activeContent) {
        case 0:
          state.styleHeader.background = message;
          break;
        case 1:
          state.styleContent.background = message;
          break;
        default:
          break;
      }
    },
    CHECK_ACTIVE_TEXT(state, message) {
      switch (state.activeContent) {
        case 0:
          state.styleHeader.textColor = message;
          break;
        case 1:
          state.styleContent.textColor = message;
          break;
        default:
          break;
      }
    },
  },

  actions: {
    clone({ commit }, data) {
      commit("OBJECT_CLONE", data);
    },
  },
});
