<script setup lang="ts">
interface User {
  date: string;
  name: string;
  address: string;
}
import { reguser, reqUserInfo } from "@/api/user";
import { ref, onMounted, reactive } from "vue";
const username = ref("");
const title = ref("");
const tableRowClassName = ({ rowIndex }: { row: User; rowIndex: number }) => {
  if (rowIndex === 1) {
    return "warning-row";
  } else if (rowIndex === 3) {
    return "success-row";
  }
  return "";
};
const data = ref([]);
const getuserinfo = async () => {
  const res = await reqUserInfo();
  data.value = res.data.data.records;
};
// 添加用户
const addUser = () => {
  console.log("新增用户");
  isvisibl.value = true;
  formModel.value = {
    username: "",
    name: "",
    password: "",
    id: 0,
  };
  title.value = "新增用户";
};
onMounted(() => {
  getuserinfo();
});

const cloumns = ref([
  {
    prop: "id",
    label: "ID",
  },
  {
    prop: "createTime",
    label: "创建时间",
  },
  {
    prop: "name",
    label: "用户名字",
  },
  {
    prop: "username",
    label: "用户名称",
  },
  {
    prop: "password",
    label: "密码",
  },
  {
    prop: "roleName",
    label: "用户角色",
  },
]);

interface addFormData {
  username: string;
  name: string;
  password: string;
  id?: number;
}
const formModel = ref<addFormData>({
  username: "",
  password: "",
  name: "",
});
const formcloumns = ref([
  {
    label: "用户姓名",
    key: "username",
    placeholder: "请输入姓名",
  },
  {
    label: "用户昵称",
    key: "name",
    placeholder: "请输入昵称",
  },
  {
    label: "用户密码",
    key: "password",
    placeholder: "请输入密码",
  },
]);
const formRef = ref();
const confirmClick = async () => {
  await formRef.value.validate();

  const res = await reguser(formModel.value);
  console.log(res);
};
const isvisibl = ref(false);
const rules = reactive({
  name: [
    { required: true, message: "请输入昵称", trigger: "blur" },
    { min: 3, max: 5, message: "长度限制 3 to 5", trigger: "blur" },
  ],
  username: [{ required: true, message: "请输入用户名称", trigger: "blur" }],
  password: [{ required: true, message: "请输入用户密码", trigger: "blur" }],
});
const handle = (row: any) => {
  console.log(row);
};
const update = (row: any) => {
  title.value = "编辑用户";
  formModel.value = row;
  console.log("编辑", row);
  isvisibl.value = true;
};
</script>

<template>
  <div>
    <el-card>
      <el-form inline class="flex justify-between">
        <el-form-item label="用户名">
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="mt-2">
      <el-button type="primary" @click="addUser">添加</el-button>
      <el-button type="info">批量删除</el-button>
      <div class="mt-5">
        <el-table
          border
          :data="data"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column
            align="center"
            v-for="column in cloumns"
            :key="column.prop"
            v-bind="column"
          />
          <el-table-column label="操作" min-width="150px">
            <template #default="{ row }">
              <el-button type="primary" @click="handle(row)"
                >分配角色</el-button
              >
              <el-button type="info" @click="update(row)">编辑</el-button>
              <el-button type="info">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-drawer v-model="isvisibl" :title="title">
      <el-form :model="formModel" :rules="rules" ref="formRef">
        <template v-for="item in formcloumns" :key="item.label">
          <el-form-item
            :label="item.label"
            :prop="item.key"
            v-if="!(formModel.id && item.key == 'password')"
          >
            <el-input
              v-model="formModel[item.key as keyof addFormData]"
              :placeholder="item.placeholder"
            />
          </el-form-item>
        </template>
      </el-form>
      <template #footer>
        <div style="flex: auto">
          <el-button>取消</el-button>
          <el-button type="primary" @click="confirmClick">确认</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<style scoped>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
