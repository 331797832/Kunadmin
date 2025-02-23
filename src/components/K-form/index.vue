<template>
  <div>
    <el-form :model="formModel" :rules="rules" ref="formrefdom">
      <template v-for="item in formcloumns" :key="item.label">
        <el-form-item
          :label="item.label"
          :prop="item.key"
          v-if="item.isvisibl || true"
        >
          <el-input
            v-model="formModel[item.key as keyof Column]"
            :placeholder="item.placeholder"
          />
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { ElInput } from "element-plus";
const formrefdom = ref();
interface Column {
  label: string;
  key: string;
  isvisibl: boolean;
  placeholder: string;
}
defineProps({
  formModel: {
    type: Object,
    default: () => ({}),
    required: true,
  },
  formcloumns: {
    type: Array as PropType<Column[]>,
    default: () => [],
    required: true,
  },
  rules: {
    type: Array,
    default: () => [],
    required: true,
  },
});

defineExpose({
  //   校验表单
  validate: () => {
    return formrefdom.value?.validate();
  },
});
</script>
