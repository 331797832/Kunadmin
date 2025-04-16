<template>
  <el-form
    ref="formRef"
    :model="props.formData"
    :rules="props.formRules"
    v-bind="$attrs"
  >
    <el-row>
      <template v-for="(column, index) in props.formColumns" :key="index">
        <el-col
          :span="column.span || formColumnsNum"
          :offset="column.offset"
          v-if="isExpand || !column.hidden"
        >
          <el-form-item
            :label="column.label"
            :prop="column.prop"
            v-if="!column.hidden"
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
                  :value="option.value"
                >
                  {{ option.label }}
                </el-checkbox>
              </template>
            </component>
          </el-form-item>
        </el-col>
      </template>
      <!-- 展开筛选 -->
      <el-col :span="8" v-if="formExpand">
        <el-form-item>
          <el-button type="primary" @click="Search"> 查询 </el-button>
          <el-button @click="formRef?.resetFields()">重置</el-button>
          <el-button @click="expandHandle" type="text"
            >展开 <el-icon v-if="!isExpand"><ArrowDown /></el-icon>
            <el-icon v-else><ArrowUp /></el-icon
          ></el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup name="kun-form">
import { ref, markRaw, watch } from "vue";
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
const emit = defineEmits(["SearchHandle"]); // 声明emit
//是否展开
const isExpand = ref(false);
const props = defineProps({
  // 表单数据
  formData: {
    type: Object,
    default: () => ({}),
  },
  //   表列宽度
  formColumnsNum: {
    type: Number,
    default: 24,
    required: true,
  },
  // 表单配置项
  // 8为一行三列
  // 12为一行两列
  // 24为一行一列
  formColumns: {
    type: Array as any,
    default: () => [],
  },
  // 表单规则验证
  formRules: {
    type: Object,
    default: () => ({}),
  },
  // 是否开启表单伸缩
  formExpand: {
    type: Boolean,
    default: false,
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

// 收缩展开
const expandHandle = async () => {
  isExpand.value = !isExpand.value;
  props.formColumns.forEach((item: any, index: any) => {
    if (index < 2) return;
    item.hidden = !isExpand.value;
  });
};

const Search = () => {
  emit("SearchHandle");
};

watch(
  () => props.formColumns,
  (newVal) => {
    if (!props.formExpand) return;
    if (newVal.length > 3) {
      props.formColumns.forEach((item: any, index: any) => {
        if (index < 2) return;
        item.hidden = !isExpand.value;
      });
      console.log("表单列发生变化", props.formColumns);
    }
  },
  { deep: true, immediate: true },
);

// 将表单绑定的ref暴露给父组件
const formRef = ref<FormInstance>();
defineExpose({ formRef });
</script>
