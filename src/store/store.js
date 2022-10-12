import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tableContentValue: {
            tableSidebarValue: "0",
            tableNavbarValue: "Background",
        },

        customizeModalIsShow: false,

        theme: {
            background: "#1c1c1c",
            textColor: "#1c1c1c",
            borderColor: {
                hex: "#1c1c1c",
            },
            borderStyle: "solid",
            weight: {
                borderWeight: 1,
                fontWeight: 100,
            },
        },

        styleHeader: {},
        styleContent: {},
    },

    getters: {
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
            state.styleHeader = JSON.parse(JSON.stringify(val));
            state.styleContent = JSON.parse(JSON.stringify(val));
        },

        TABLE_BORDER_STYLE(state, borderStyle) {
            switch (state.tableContentValue.tableSidebarValue) {
                case 0:
                    state.styleHeader.borderStyle = borderStyle;
                    break;

                case 1:
                    state.styleContent.borderStyle = borderStyle;
                    break;
            }
        },

        TABLE_BORDER_WEIGHT(state, borderWeight) {
            switch (state.tableContentValue.tableSidebarValue) {
                case 0:
                    state.styleHeader.weight.borderWeight = borderWeight;
                    break;

                case 1:
                    state.styleContent.weight.borderWeight = borderWeight;
                    break;
            }
        },

        TABLE_FONT_WEIGHT(state, fontWeight) {
            switch (state.tableContentValue.tableSidebarValue) {
                case 0:
                    state.styleHeader.weight.fontWeight = fontWeight;
                    break;

                case 1:
                    state.styleContent.weight.fontWeight = fontWeight;
                    break;
            }
        },

        TABLE_COLOR(state, color) {
            let tableNavbarValue = state.tableContentValue.tableNavbarValue;
            switch (state.tableContentValue.tableSidebarValue) {
                case 0:
                    if (tableNavbarValue === "Background") {
                        state.styleHeader.background = color;
                    }
                    if (tableNavbarValue === "TextColor") {
                        state.styleHeader.textColor = color;
                    }
                    if (tableNavbarValue === "BorderColor") {
                        state.styleHeader.borderColor = color;
                    }
                    break;
                case 1:
                    if (tableNavbarValue === "Background") {
                        state.styleContent.background = color;
                    }
                    if (tableNavbarValue === "TextColor") {
                        state.styleContent.textColor = color;
                    }
                    if (tableNavbarValue === "BorderColor") {
                        state.styleContent.borderColor = color;
                    }
                    break;
            }
        },
    },

    actions: {
        clone({commit}, data) {
            commit("OBJECT_CLONE", data);
        },
    },
});
