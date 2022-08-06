<template>
  <div style="background: #20212a; position: relative; height: 100%;">
    <div v-show="false" class="generated-table-of-child" 
    :class="{ 'tr-expectation': isCustomize }" ref="tableCode">
      <table>
        <tr>
          <th v-for="(i, index) in tableRender.x" :key="index">
            {{ i.matrixX }}
            Header
          </th>
        </tr>
        <tr v-for="(i, index) in tableRender.y" :key="index">
          <td v-for="(i, index) in tableRender.x" :key="index">
            {{ i.matrixY }}
            Cell
          </td>
        </tr>
      </table>
    </div>

    <div class="show-code-container">
      <!-- HTML -->
      <div class="syntax-snippet">
        <div class="syntax-snippet-title">
          <div class="syntax-snippet-title-icon">
            <img width="30" src="https://img.icons8.com/color/48/000000/html-5--v1.png" />
          </div>
          <div>
            <h3>HTML</h3>
          </div>
        </div>

        <codemirror v-model="codeValue" :options="cmOptionHtml" />
      </div>

      <!-- CSS -->
      <div class="syntax-snippet syntax-snippet-css">
        <div class="syntax-snippet-title">
          <div class="syntax-snippet-title-icon">
            <img width="30" src="https://img.icons8.com/color/48/000000/css3.png" />
          </div>
          <div>
            <h3>CSS</h3>
          </div>
        </div>
        <codemirror v-model="getCss" :options="comOptionCss" />
      </div>
    </div>
  </div>
</template>

<script>
import dedent from "dedent";
// codemirror
import { codemirror } from "vue-codemirror";
// language
import "codemirror/mode/xml/xml.js"; // HTML
import "codemirror/mode/css/css.js"; // CSS
// theme css
import "codemirror/theme/dracula.css";
// require active-line.js
import "codemirror/addon/selection/active-line.js";
// autoCloseTags
import "codemirror/addon/edit/closetag.js";
import "codemirror/lib/codemirror.css";

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
    codemirror,
  },

  computed: {
    getCss() {
      return dedent(`

      body {
        margin: ${this.$store.state.background};
        padding: 3em 6em;
      }

      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }

      td,
      th {
          text-align: left;
          padding: 8px;
          border: 0.1px solid black;
      }

      .tr-expectation {
          opacity: 0.7;
          pointer-events: none;
          
      }

      .tr-expectation > td {
          border: 0.1px solid #aeaeae;
      }

      tr:nth-child(even) {
          background-color: #dddddd;
      }

      table tr > th {
          text-align: center;
          background-color: ${this.$store.getters.style.background};
      }

      .tab-title {
          position: relative;
      }
  `);
    },
  },

  data() {
    return {
      codeValue: "",
      code: "",
      lineNumbers: true,
      isCustomize: false,

      cmOptionHtml: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        autoCloseTags: true,
        line: true,
        mode: "text/html",
        theme: "dracula",
      },

      comOptionCss: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: "text/css",
        theme: "dracula",
      },
    };
  },
  watch: {
    watchRef() {
      this.$nextTick().then(() => {
        this.code = this.$refs.tableCode.innerHTML;
        this.format();
      });
    },

    deep: true,
  },

  methods: {
    format(html = this.code) {
      var tab = "\t";
      var result = "";
      var indent = "";

      html.split(/>\s*</).forEach((element) => {
        if (element.match(/^\/\w/)) {
          indent = indent.substring(tab.length);
        }

        result += indent + "<" + element + ">\r\n";

        if (element.match(/^<?\w[^>]*[^]$/) && !element.startsWith("input")) {
          indent += tab;
        }
      });
      return (this.codeValue = result.substring(1, result.length - 3));
    },
  },
};
</script>

<style src="../../style.css">
</style>
<style src="../../../styles/TableGenerator.css">
</style>