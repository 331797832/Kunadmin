<template>
  <div class="home-container">
    <!-- 顶部数据卡片 -->
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in cardList" :key="item.title">
        <el-card shadow="hover" class="data-card">
          <div class="card-header">
            <el-icon class="card-icon" :class="item.color">
              <component :is="item.icon" />
            </el-icon>
            <div class="card-info">
              <div class="card-title">{{ item.title }}</div>
              <div class="card-value">{{ item.value }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 中部图表区域 -->
    <el-row :gutter="20" class="mt-4">
      <el-col :span="16">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header-title">
              <span>订单趋势</span>
              <el-radio-group v-model="chartTimeRange" size="small">
                <el-radio-button label="week">本周</el-radio-button>
                <el-radio-button label="month">本月</el-radio-button>
                <el-radio-button label="year">本年</el-radio-button>
              </el-radio-group>
            </div>
          </template>
          <div class="h-80 flex justify-between">
            <div class="w-[45%] h-[100%]" ref="radarRef"></div>
            <div class="w-[50%] h-[100%]" ref="radarRef2"></div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header-title">
              <span>待办事项</span>
              <el-tag size="small" type="warning">5个任务</el-tag>
            </div>
          </template>
          <el-scrollbar height="300px">
            <div v-for="i in 5" :key="i" class="todo-item">
              <el-checkbox>待办任务 {{ i }}</el-checkbox>
              <span class="todo-time">2024-01-{{ i }}</span>
            </div>
          </el-scrollbar>
        </el-card>
      </el-col>
    </el-row>

    <!-- 底部表格 -->
    <el-card shadow="hover" class="mt-4">
      <template #header>
        <div class="card-header-title">
          <span>最新订单</span>
          <el-button type="primary" link>查看更多</el-button>
        </div>
      </template>
      <el-table :data="tableData" style="width: 100%" border stripe>
        <el-table-column prop="date" label="日期" />
        <el-table-column prop="name" label="订单名称" />
        <el-table-column prop="status" label="状态">
          <template #default="{ row }">
            <el-tag :type="row.status === '已完成' ? 'success' : 'warning'">
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="amount" label="金额" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useEcharts } from "@/hooks/echarts";
import { barOptions, lineOptions } from "./data";
const { domRef: radarRef } = useEcharts(() => lineOptions as any, {
  onRender() {},
});
const { domRef: radarRef2 } = useEcharts(() => barOptions as any, {
  onRender() {},
});
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

// 图表时间范围
const chartTimeRange = ref("week");

// 表格数据
const tableData = [
  {
    date: "2024-01-01",
    name: "订单A",
    status: "已完成",
    amount: "￥1,234",
  },
  {
    date: "2024-01-02",
    name: "订单B",
    status: "处理中",
    amount: "￥2,345",
  },
  {
    date: "2024-01-03",
    name: "订单C",
    status: "已完成",
    amount: "￥3,456",
  },
];
</script>

<style scoped>
.home-container {
  padding: 20px;
}

.data-card {
  .card-header {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .card-icon {
    padding: 8px;
    font-size: 48px;
    background: var(--el-fill-color-light);
    border-radius: 8px;
  }

  .card-info {
    .card-title {
      font-size: 14px;
      color: var(--el-text-color-secondary);
    }

    .card-value {
      margin-top: 4px;
      font-size: 24px;
      font-weight: bold;
    }
  }
}

.card-header-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--el-border-color-lighter);

  &:last-child {
    border-bottom: none;
  }

  .todo-time {
    font-size: 13px;
    color: var(--el-text-color-secondary);
  }
}
</style>
