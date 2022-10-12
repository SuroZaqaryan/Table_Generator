<template>
  <div class="border-wrapper">
    <div
        v-for="chunk in Math.round(borderList.length / 2)"
        :key="chunk"
        class="border-list"
    >
      <div
          v-for="(item, index) in borderList.slice((chunk - 1) * 5,
          chunk * 5
        )"
          @click="selectItem(item.id, item.name)"
          :key="index"
          :class="[item.name, {active: item.id === activeItem}]">
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectItem(i, borderStyle) {
      this.activeItem = i;

      this.$store.commit(
          "TABLE_BORDER_STYLE",
          borderStyle
      );
    },
  },

  data() {
    return {
      activeItem: null,
      borderList: [
        {id: 1, name: "dotted"},
        {id: 2, name: "dashed"},
        {id: 3, name: "solid"},
        {id: 4, name: "double"},
        {id: 5, name: "groove"},
        {id: 6, name: "ridge"},
        {id: 7, name: "inset"},
        {id: 8, name: "outset"},
        {id: 9, name: "mixed"},
        {id: 10, name: "none"},
        {id: 11, name: "hidden"},
      ]
    }
  }
}
</script>

<style scoped>
.active {
  font-weight: 600;
  background: #ffffff6b;
}

.border-list > div {
  padding: 0.6rem;
}

.border-list {
  display: flex;
  align-content: center;
  margin-bottom: 1rem;
}

.border-list:nth-last-child(-n+3) {
  display: none;
}

.border-list:nth-child(3n+3) {
  margin-bottom: 0;
}

.border-list > div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 52px;
  width: 80px;
  text-transform: capitalize;
  transition: 0.2s;
}

.border-list > div:hover p {
  font-weight: 600;
}

div.dotted {
  border: 1px dotted;
}

div.dashed {
  border: 1px dashed;
}

div.solid {
  border: 1px solid;
}

div.double {
  border: 1px double;
}

div.groove {
  border: 1px groove;
}

div.ridge {
  border: 1px ridge;
}

div.inset {
  border: 1px inset;
}

div.outset {
  border: 1px outset;
}

div.none {
  border: 1px none;
}

div.hidden {
  border-style: hidden;
}

div.mix {
  border-style: dotted dashed solid double;
}
</style>