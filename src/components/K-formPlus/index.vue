<template>
  <el-form
    ref="formRef"
    :model="props.formData"
    :rules="props.formRules"
    v-bind="$attrs"
  >
    <el-row>
      <el-col
        v-for="(column, index) in props.formColumns"
        :key="index"
        :span="column.span || formColumnsNum"
        :offset="column.offset"
      >
        <el-form-item
          :label="column.label"
          :prop="column.prop"
          label-width="100px"
        >
          <slot :name="column.prop" v-if="$slots[`${column.prop}`]"></slot>

          <!-- 动态组件 -->
          <component
            v-else
            :is="componentsTypes[column.xType]"
            v-bind="column.componentProps"
            v-model="props.formData[column.prop]"
          >
            <!-- 如果是 Select 组件，渲染 ElOption -->
            <template v-if="column.xType === 'Select' && column.options">
              <component
                :is="ElOption"
                v-for="option in column.options"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              />
            </template>
            <!-- 如果是 CheckboxGroup 组件，渲染 ElCheckbox -->
            <template
              v-if="
                column.xType === 'CheckboxGroup' &&
                column.componentProps.options
              "
            >
              <el-checkbox
                v-for="option in column.componentProps.options"
                :key="option.value"
                :label="option.value"
              >
                {{ option.label }}
              </el-checkbox>
            </template>
          </component>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, markRaw } from "vue";
import {
  ElInput,
  ElAutocomplete,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElTimePicker,
  ElTimeSelect,
  ElInputNumber,
  ElRadio,
  ElCheckbox,
  ElSwitch,
  ElSlider,
  ElRate,
  ElTransfer,
  ElCascader,
  ElColorPicker,
  ElTree,
  ElTreeSelect,
  ElCheckboxGroup,
} from "element-plus";
import type { FormInstance } from "element-plus";

const props = defineProps({
  // 表单数据
  formData: {
    type: Object,
    default: () => ({}),
  },
  //   表列配置项
  formColumnsNum: {
    type: Number,
    default: 12,
    required: true,
  },
  // 表单配置项
  formColumns: {
    type: Array as any,
    default: () => [],
  },
  // 表单规则验证
  formRules: {
    type: Object,
    default: () => ({}),
  },
});

// 定义动态组件
const componentsTypes: Record<string, any> = markRaw({
  Input: ElInput,
  Autocomplete: ElAutocomplete,
  Select: ElSelect,
  Option: ElOption,
  DatePicker: ElDatePicker,
  TimePicker: ElTimePicker,
  TimeSelect: ElTimeSelect,
  InputNumber: ElInputNumber,
  Radio: ElRadio,
  Checkbox: ElCheckbox,
  Switch: ElSwitch,
  Slider: ElSlider,
  Rate: ElRate,
  Transfer: ElTransfer,
  CheckboxGroup: ElCheckboxGroup,
  Cascader: ElCascader,
  ColorPicker: ElColorPicker,
  Tree: ElTree,
  TreeSelect: ElTreeSelect,
});

// 将表单绑定的ref暴露给父组件
const formRef = ref<FormInstance>();
defineExpose({ formRef });
</script>
