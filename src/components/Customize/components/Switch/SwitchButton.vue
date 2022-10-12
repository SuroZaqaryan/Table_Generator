<template>
  <div :class="['toggle-wrapper', classes]">
    <slot name="before"></slot>
    <label :class="['action', {active: status === true}]">
      <input type="checkbox" class="radio" v-model="status"
             @change="$emit('input', status)">
    </label>
    <slot name="after"></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      status: this.value
    };
  }
};
</script>

<style scoped>
.toggle-wrapper .action {
  appearance: none;
  background: #a6a6a6;
  position: relative;
  display: block;
  width: 37px;
  height: 20px;
  border: 0;
  border-radius: 1rem;
  overflow: hidden;
  transition: background-color 0.1s ease;
  cursor: pointer;
}

.toggle-wrapper .action > input {
  opacity: 0;
  visibility: hidden;
}

.toggle-wrapper .action * {
  cursor: pointer;
}

.toggle-wrapper .action:before {
  background: #eaeaea;
  border-radius: 100%;
  border: 0;
  position: absolute;
  content: " ";
  width: 15px;
  height: 15px;
  top: 3px;
  left: 4px;
  transition: left 0.1s ease-out, background-color 0.1s ease-in;
}

.toggle-wrapper .action.active {
  background: #55a6e7;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);
}

.toggle-wrapper .action.active:before {
  background: #fff;
  left: 18px;
}
</style>