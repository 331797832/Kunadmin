<template>
  <div>
    <!-- 顶部数据卡片 -->
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in cardList" :key="item.title">
        <el-card shadow="hover" class="data-card">
          <div class="card-header">
            <el-icon class="card-icon">
              <component :is="item.icon"></component>
            </el-icon>
            <div class="card-info">
              <div class="card-title">{{ item.title }}</div>
              <div class="card-value">{{ item.value }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card shadow="hover" class="mt-4">
          <template #header>
            <div class="flex items-center justify-between">
              <span>订单趋势</span>
              <el-radio-group v-model="chartTimeRange" size="small">
                <el-radio-button label="week">本周</el-radio-button>
                <el-radio-button label="month">本月</el-radio-button>
                <el-radio-button label="year">本年</el-radio-button>
              </el-radio-group>
            </div>
          </template>
          <div class="h-[100%] w-[100%]">
            <div style="width: 100%; height: 340px" ref="radarRef"></div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="mt-4">
          <template #header>
            <div class="flex items-center justify-between">
              <span>代办事项</span>
              <el-tag size="small" type="warning"
                >{{ testdata.length }}个事项</el-tag
              >
            </div>
          </template>
          <div class="h-[100%] w-[100%]">
            <div
              v-for="(item, index) in testdata"
              :key="item.id || index"
              class="flex items-center justify-between"
            >
              <!-- <el-checkbox :label="item.name" v-model="item.ischecked" /> -->
              <input type="checkbox" :name="item.name" :id="item.id" />
              <span class="text-gray-500 text-sm">{{ item.date }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useEcharts } from "@/hooks/echarts";
import { lineOptions } from "./data";
// import { ElCheckbox } from "element-plus";
// 第一个图表
const { domRef: radarRef } = useEcharts(() => lineOptions as any, {
  onRender() {},
});
// 图表时间范围
const chartTimeRange = ref("week");
// const checked1 = ref(false);
// 顶部卡片数据
const cardList = [
  {
    title: "总订单",
    value: "1,234",
    icon: "ShoppingCart",
    color: "text-blue-500",
  },
  {
    title: "待处理",
    value: "12",
    icon: "Timer",
    color: "text-orange-500",
  },
  {
    title: "已完成",
    value: "1,180",
    icon: "CircleCheck",
    color: "text-green-500",
  },
  {
    title: "总金额",
    value: "￥123,456",
    icon: "Money",
    color: "text-purple-500",
  },
];
const testdata = ref<any[]>([
  {
    id: 1,
    date: "2025-01-01",
    name: "订单1",
    status: "已完成",
    amount: "￥100",
    ischecked: false,
  },
  {
    id: 2,
    date: "2025-01-02",
    name: "订单2",
    status: "进行中",
    amount: "￥200",
    ischecked: false,
  },
  {
    id: 3,
    date: "2025-01-03",
    name: "订单2",
    status: "进行中",
    amount: "￥200",
    ischecked: false,
  },
  {
    id: 4,
    date: "2025-01-04",
    name: "订单2",
    status: "进行中",
    amount: "￥200",
    ischecked: true,
  },
  {
    id: 5,
    date: "2025-01-05",
    name: "订单2",
    status: "进行中",
    amount: "￥200",
    ischecked: false,
  },
  {
    id: 6,
    date: "2025-01-06",
    name: "订单2",
    status: "进行中",
    amount: "￥200",
    ischecked: false,
  },
]);
</script>
<style lang="scss" scoped>
.card-header {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
