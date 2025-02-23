<template>
  <el-card header="测试表单">
    <KFormPlus
      ref="formRef"
      :form-data="formData"
      :form-columns="formColumns"
      :formColumnsNum="12"
      :form-rules="formRules"
    />
    <el-button type="primary" @click="submitForm">提交</el-button>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  age: 18,
  gender: "",
  gender2: "",
  checkedCities: [] as string[],
  gender3: "",
  cascader: [],
  allselect: false,
  gender4: "",
  tree: [], // Tree 组件绑定的数据
});
const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
const formRef = ref();
const submitForm = () => {
  console.log("submit", formRef.value.formRef.validate());
  console.log("formData", formData.value);
};
const handleCheckedCitiesChange = (value: any[]) => {
  const checkedCount = value.length;
  formData.value.allselect = checkedCount === cities.length;
  console.log(checkedCount);

  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};
const handleAllSelectChange = (val: boolean) => {
  formData.value.checkedCities = val ? cities : [];
};
const isIndeterminate = ref(false);
// 树形数据
const treeData = [
  {
    label: "一级 1",
    children: [
      {
        label: "二级 1-1",
        children: [
          {
            label: "三级 1-1-1",
          },
        ],
      },
    ],
  },
  {
    label: "一级 2",
    children: [
      {
        label: "二级 2-1",
      },
      {
        label: "二级 2-2",
      },
    ],
  },
];
const options = [
  {
    value: "guide",
    label: "Guide",
    children: [
      {
        value: "disciplines",
        label: "Disciplines",
        children: [
          {
            value: "consistency",
            label: "Consistency",
          },
          {
            value: "feedback",
            label: "Feedback",
          },
          {
            value: "efficiency",
            label: "Efficiency",
          },
          {
            value: "controllability",
            label: "Controllability",
          },
        ],
      },
      {
        value: "navigation",
        label: "Navigation",
        children: [
          {
            value: "side nav",
            label: "Side Navigation",
          },
          {
            value: "top nav",
            label: "Top Navigation",
          },
        ],
      },
    ],
  },
  {
    value: "component",
    label: "Component",
    children: [
      {
        value: "basic",
        label: "Basic",
        children: [
          {
            value: "layout",
            label: "Layout",
          },
          {
            value: "color",
            label: "Color",
          },
          {
            value: "typography",
            label: "Typography",
          },
          {
            value: "icon",
            label: "Icon",
          },
          {
            value: "button",
            label: "Button",
          },
        ],
      },
      {
        value: "form",
        label: "Form",
        children: [
          {
            value: "radio",
            label: "Radio",
          },
          {
            value: "checkbox",
            label: "Checkbox",
          },
          {
            value: "input",
            label: "Input",
          },
          {
            value: "input-number",
            label: "InputNumber",
          },
          {
            value: "select",
            label: "Select",
          },
          {
            value: "cascader",
            label: "Cascader",
          },
          {
            value: "switch",
            label: "Switch",
          },
          {
            value: "slider",
            label: "Slider",
          },
          {
            value: "time-picker",
            label: "TimePicker",
          },
          {
            value: "date-picker",
            label: "DatePicker",
          },
          {
            value: "datetime-picker",
            label: "DateTimePicker",
          },
          {
            value: "upload",
            label: "Upload",
          },
          {
            value: "rate",
            label: "Rate",
          },
          {
            value: "form",
            label: "Form",
          },
        ],
      },
      {
        value: "data",
        label: "Data",
        children: [
          {
            value: "table",
            label: "Table",
          },
          {
            value: "tag",
            label: "Tag",
          },
          {
            value: "progress",
            label: "Progress",
          },
          {
            value: "tree",
            label: "Tree",
          },
          {
            value: "pagination",
            label: "Pagination",
          },
          {
            value: "badge",
            label: "Badge",
          },
        ],
      },
      {
        value: "notice",
        label: "Notice",
        children: [
          {
            value: "alert",
            label: "Alert",
          },
          {
            value: "loading",
            label: "Loading",
          },
          {
            value: "message",
            label: "Message",
          },
          {
            value: "message-box",
            label: "MessageBox",
          },
          {
            value: "notification",
            label: "Notification",
          },
        ],
      },
      {
        value: "navigation",
        label: "Navigation",
        children: [
          {
            value: "menu",
            label: "Menu",
          },
          {
            value: "tabs",
            label: "Tabs",
          },
          {
            value: "breadcrumb",
            label: "Breadcrumb",
          },
          {
            value: "dropdown",
            label: "Dropdown",
          },
          {
            value: "steps",
            label: "Steps",
          },
        ],
      },
      {
        value: "others",
        label: "Others",
        children: [
          {
            value: "dialog",
            label: "Dialog",
          },
          {
            value: "tooltip",
            label: "Tooltip",
          },
          {
            value: "popover",
            label: "Popover",
          },
          {
            value: "card",
            label: "Card",
          },
          {
            value: "carousel",
            label: "Carousel",
          },
          {
            value: "collapse",
            label: "Collapse",
          },
        ],
      },
    ],
  },
  {
    value: "resource",
    label: "Resource",
    children: [
      {
        value: "axure",
        label: "Axure Components",
      },
      {
        value: "sketch",
        label: "Sketch Templates",
      },
      {
        value: "docs",
        label: "Design Documentation",
      },
    ],
  },
];
const formColumns = ref([
  {
    label: "姓名", // 表单项的标签
    prop: "name", // 绑定到 formData.name
    xType: "Input",
    span: 12, //自行配置行宽
    componentProps: {
      placeholder: "请输入姓名666", // el-input 的属性
      clearable: true, // el-input 的属性
      "prefix-icon": "Search",
      "suffix-icon": "Search",
    },
  },
  {
    label: "年龄", // 表单项的标签
    prop: "age", // 绑定到 formData.age
    xType: "InputNumber",
    span: 24,
    componentProps: {
      min: 0, // el-input-number 的属性
      max: 100, // el-input-number 的属性
    },
  },
  {
    label: "性别", // 表单项的标签
    prop: "gender", // 绑定到 formData.gender
    xType: "Select",
    options: [
      { label: "男", value: "male" },
      { label: "女", value: "female" },
    ],
    componentProps: {
      clearable: true, // el-select 的属性
    },
  },
  {
    label: "性别", // 表单项的标签
    prop: "gender", // 绑定到 formData.gender
    xType: "Select",
    options: [
      { label: "男", value: "male" },
      { label: "女", value: "female" },
    ],
    componentProps: {
      clearable: true, // el-select 的属性
      onChange: (val: any) => {
        console.log(val);
      },
    },
  },
  {
    label: "性别", // 表单项的标签
    prop: "gender", // 绑定到 formData.gender
    xType: "Select",
    options: [
      { label: "男", value: "male" },
      { label: "女", value: "female" },
    ],
    componentProps: {
      clearable: true, // el-select 的属性
    },
  },
  {
    label: "性别", // 表单项的标签
    prop: "gender", // 绑定到 formData.gender
    xType: "Select",
    options: [
      { label: "男", value: "male" },
      { label: "女", value: "female" },
    ],
    componentProps: {
      clearable: true, // el-select 的属性
    },
  },
  {
    label: "全选", // 表单项的标签
    prop: "allselect", // 绑定到 formData.gender
    xType: "Checkbox",
    span: 24,
    componentProps: {
      indeterminate: isIndeterminate.value,
      onChange: handleAllSelectChange,
    },
  },
  {
    label: "城市:", // 表单项的标签
    prop: "checkedCities", // 绑定到 formData.checkedCities
    xType: "CheckboxGroup",
    span: 24,
    componentProps: {
      options: cities.map((city) => ({ label: city, value: city })), // 绑定城市选项
      onChange: handleCheckedCitiesChange, // 绑定 change 事件
    },
  },
  {
    label: "级联选择器",
    prop: "cascader",
    xType: "Cascader",
    componentProps: {
      options: options, // 级联数据
      props: {
        expandTrigger: "hover", // 配置项
      },
    },
  },
  {
    label: "树形控件", // 表单项的标签
    prop: "tree", // 绑定到 formData.tree
    xType: "Tree",
    componentProps: {
      data: treeData, // el-tree 的属性
      props: {
        label: "label", // 指定节点标签的属性名
        children: "children", // 指定子节点的属性名
      },
    },
  },
]);

const formRules = ref({
  name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
});
// 处理全选框的变化
</script>
