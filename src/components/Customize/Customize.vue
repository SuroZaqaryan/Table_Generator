<template>
  <ChangeColorModalDraggable :tab="tab" />
</template>

<script>
import ChangeColorModalDraggable from "../../components/stories/base-modal-draggable/BaseModalDraggable.vue";
import CustomBackground from "./TabPages/CustomBackground.vue";
import CustomTextColor from "./TabPages/CustomTextColor.vue";
import CustomBorderColor from "./TabPages/CustomBorderColor.vue";
import CustomBorderStyle from "./TabPages/CustomBorderStyle.vue";

export default {
  components: {
    ChangeColorModalDraggable,
  },
  data() {
    return {
      proxyStatus: false,
      tab: [
        {
          title: "Background",
          page: CustomBackground,
          value: "Background",
        },
        {
          title: "Text Color",
          page: CustomTextColor,
          value: "TextColor",
        },
        {
          title: "Border Color",
          page: CustomBorderColor,
          value: "BorderColor",
        },
        {
          title: "Border Style",
          page: CustomBorderStyle,
          value: "BorderStyle",
        },
      ],
    };
  },
};
</script>
