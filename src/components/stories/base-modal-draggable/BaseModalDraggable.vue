<template>
  <transition name="fade">
    <div
        v-if="$store.state.customizeModalIsShow"
        ref="draggableContainer"
        id="draggable-container"
        class="container"
    >
      <div class="modal">

        <div class="navbar-settings">
          <div>
            <button>Click me</button>
          </div>
          <div @click="hideCustomizeModal" class="close-modal">
            <img
                width="25"
                style="display: flex"
                src="https://i.ibb.co/gyT5JFh/icons8-multiply-100.png"
                alt=""
            />
          </div>
        </div>
        <div class="navbar">
          <SideBar :dragMouseDown="dragMouseDown"/>
          <BaseTab :tab="tab" :dragMouseDown="dragMouseDown"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseTab from "../base-tab/BaseTab.vue";
import SideBar from "../../Customize/components/SideBar/SideBar.vue";

export default {
  components: {
    SideBar,
    BaseTab,
  },
  props: {
    tab: {
      type: Array,
    },
  },

  data() {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
      },
    };
  },
  methods: {
    hideCustomizeModal() {
      this.$store.commit("HIDE_CUSTOMIZE_MODAL");
    },
    dragMouseDown: function (event) {
      event.preventDefault();
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },
    elementDrag: function (event) {
      event.preventDefault();
      this.positions.movementX = this.positions.clientX - event.clientX;
      this.positions.movementY = this.positions.clientY - event.clientY;
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      // set the element's new position:
      this.$refs.draggableContainer.style.top =
          this.$refs.draggableContainer.offsetTop -
          this.positions.movementY +
          "px";
      this.$refs.draggableContainer.style.left =
          this.$refs.draggableContainer.offsetLeft -
          this.positions.movementX +
          "px";
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    },
  },
};
</script>

<style scoped>
.navbar,
.navbar-settings {
  display: flex;
}

.navbar-settings {
  justify-content: flex-end;
}

</style>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

#draggable-container {
  width: auto;
  height: 150px;
  position: absolute;
  top: 45%;
  z-index: 9;
}

#draggable-header {
  z-index: 10;
}

.modal {
  position: relative;
  background-color: rgba(255, 255, 255, 75%);
  box-shadow: 0 0 11px 1px rgb(88 88 88 / 21%);
  border-radius: 10px;
  color: #333;
  font-family: sans-serif;
  line-height: 1.5;
  max-width: 100%;
  cursor: pointer;
  padding-right: 18px;
}

@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .modal {
    -webkit-backdrop-filter: blur(18px);
    backdrop-filter: blur(18px);
    background-color: rgba(255, 255, 255, 75%);
  }

  .warning {
    display: none;
  }
}

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>