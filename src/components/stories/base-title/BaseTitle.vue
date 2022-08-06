<template>
  <div class="headline-title">
    <div class="title-container">
      <template v-if="settings && tableRender.x.length != ''">
        <div
          @click="$emit('click')"
          class="settings-wrapper"
        >
          <div class="text-title">
            <h3>{{ settings }}</h3>
          </div>
          <div class="base-title-icon">
            <img
              width="23"
              height="22"
              src="https://i.ibb.co/Jr7xcdH/icons8-ungroup-objects-100.png"
              alt=""
            />
          </div>
        </div>
        <div class="line" />
      </template>

      <div class="settings-wrapper">
        <div class="text-title">
          <h3>{{ title }}</h3>
        </div>

        <div class="base-title-icon">
          <img width="25" :src="img" alt="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableRender: {
      type: Object,
    },
    settings: {
      type: String,
    },
    title: {
      type: String,
    },
    img: {
      type: String,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300&display=swap");

.text-title,
h3 {
  font-family: "Be Vietnam Pro", sans-serif;
  letter-spacing: 0.7px;
  color: #313131;
  font-size: 15px;
}

.title-container {
  display: flex;
  align-items: center;
}

.settings-wrapper {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
}

.settings-wrapper:hover {
  background: #dcdcdc36;
  border-radius: 4px;
}

.headline-title {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid #282c355e;
  padding-bottom: 2px;
}

.title {
  margin-right: 16px;
}

.line {
  background: #282c358f;
  width: 1px;
  height: 23px;
  margin: 0 5px;
}

.base-title-icon {
  margin-left: 10px;
}
img {
  display: flex;
}
</style>