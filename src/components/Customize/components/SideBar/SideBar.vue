<template>
  <div @mousedown="dragMouseDown" class="tab-header-wrapper">
    <div class="tab-header">
      <div
        v-for="(tab, index) in tabSideBar"
        :key="index"
        @click="selectItem(index)"
        :class="{ active: index === activeItem }"
      >
        <span class="dot" />

        <p>{{ tab.title }}</p>
      </div>
      <p>{{ $store.state.activeContent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dragMouseDown: {
      type: Function,
    },
  },

  data() {
    return {
      activeItem: 0,
      tabSideBar: [
        {
          title: "Header",
        },
        {
          title: "Content",
        },
        {
          title: "All",
        },
      ],
    };
  },

  methods: {
    selectItem(i) {
      this.activeItem = i;
      this.$store.state.activeContent.forEach((item, index) => {
        if (index === i) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    },
  },
};
</script>

<style scoped>
.tab-header-wrapper {
  width: 140px;
  background: #7b7b7b0f;
  margin-right: 32px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-right: 1px solid #0000000f;
}

.active {
  background: #e4e4e4;
}

.tab-header {
  margin-top: 12px;
}

.tab-header > div:hover {
  background: #62626214;
}

.tab-header > div {
  padding: 11px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-bottom: 0.1px solid #0000000f;
  transition: 0.1s;
}

.tab-header > div > p {
  font-size: 15px;
  font-family: revert;
  padding-left: 10px;
  color: #414141;
}
</style>