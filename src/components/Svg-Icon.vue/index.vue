<template>
  <svg>
    <use :xlink:href="`#icon-${name}`" :fill="color" :width="w" :height="h"></use>
  </svg>
</template>
<script setup lang="ts" name="SvgIcon">
import { defineProps } from 'vue'
interface SvgIconProps {
  name: string
  color: string;
  w: string;
  h: string;
}
withDefaults(defineProps<SvgIconProps>(), {
  name: '',
  color: '',
  w: '16px',
  h: '16px'
})

</script>
