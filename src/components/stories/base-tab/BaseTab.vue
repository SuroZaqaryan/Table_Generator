<template>
  <div class="tab-wrapper">
    <div class="tab-custom-wrapper">
      <div class="tab">
        <div
          v-for="(item, index) in tab"
          :key="index"
          @click="selectItem(index)"
          class="tab-article"
          :class="{ active: index === activeItem }"
        >
          <p @click="tabActive(item.page, item.value)">{{ item.title }}</p>
        </div>
      </div>
      <template v-if="!activePage">
        <CustomBackground />
      </template>
      <template v-else>
        <component :is="activePage" />
      </template>
    </div>
  </div>
</template>

<script>
import CustomBackground from "../../Customize/TabPages/CustomBackground";

export default {
  props: {
    dragMouseDown: {
      type: Function,
    },
    tab: {
      type: Array,
    },
  },
  components: {
    CustomBackground,
  },
  data() {
    return {
      activeItem: 0,
      activePage: null,
    };
  },
  methods: {
    selectItem(i) {
      this.activeItem = i;
    },
    tabActive(page, value) {
      this.$store.state.tableContentValue.tableNavbarValue = value;
      this.activePage = page;
    },
  },
};
</script>

<style scoped>
.active {
  border-bottom: 0.1px solid #3687c7;
  background: #2196f3b0;
  border-radius: 15px;
  color: #fff;
}

.tab-wrapper {
  display: flex;
}

.tab-custom-wrapper {
  padding-bottom: 17px;
  padding-top: 8px;
}

.tab {
  display: flex;
  align-content: center;
  margin: 0.4rem 0;
  margin-bottom: 0.9rem;
  border-bottom: 1px solid #39383817;
  padding-bottom: 10px;
}

.tab-article {
  margin-right: 0.5rem;
  padding: 5px 12px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
