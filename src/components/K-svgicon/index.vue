<template>
  <svg :style="{ width: w, height: h }">
    <use :xlink:href="`#icon-${name}`" :fill="color"></use>
  </svg>
</template>
<script setup lang="ts" name="SvgIcon">
import { defineProps } from "vue";
// interface SvgIconProps {
//   name: string;
//   color: string;
//   w: string;
//   h: string;
// }
defineProps({
  name: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "white",
  },
  w: {
    type: String,
    default: "16px",
  },
  h: {
    type: String,
    default: "16px",
  },
});
</script>
