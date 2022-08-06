import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        activeContent: [
            { active: false },
            { active: false },
            { active: false },
        ],

        testStatus: false,

        customizeModalIsShow: false,

        theme: {
            background: '#1c1c1c',
            textColor: '#1c1c1c',
            borderColor: {
                hex: "#1c1c1c"
            },
            borderStyle: "solid",
            weight: {
                borderWeight: 0.1,
                fontWeight: 100,
            }
        },

        customizeTr: "",
    },

    getters: {
        style(state) {
            let style = {
                background: state.theme.background.hex !== undefined ? state.theme.background.hex : '#f7f7f7',
                color: state.theme.textColor.hex,
                fontWeight: state.theme.weight.fontWeight,
                border: `${state.theme.weight.borderWeight + "px"}
             ${state.theme.borderStyle}
             ${state.theme.borderColor.hex}`,
            }
            return style
        }
    },

    mutations: {
        SHOW_CUSTOMIZE_MODAL(state) {
            state.customizeModalIsShow = true
        },
        HIDE_CUSTOMIZE_MODAL(state) {
            state.customizeModalIsShow = false
        },
        OBJECT_CLONE(state, val) {
            state.customizeTr = { ...val }
        },
        CHECK_ACTIVE_CONTENT(state, message) {
            if (state.testStatus) {
                state.theme.background = message
            } else {
                state.customizeTr.background = message
            }
        }
    },

    actions: {
        clone({ commit }, data) {
            commit("OBJECT_CLONE", data);
        }
    },
})