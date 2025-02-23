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
    <!-- 弹出框 -->
    <el-drawer v-model="isvisibl" :title="title">
      <k-form
        :formModel="formModel"
        :formcloumns="formcloumns"
        :rules="rules"
        ref="formReffff"
      />
      <template #footer>
        <el-button>取消</el-button>
        <el-button type="primary" @click="confirmClick">确认</el-button>
      </template>
    </el-drawer>
    <el-drawer v-model="isvisibl2" :title="'分配角色'">
      <k-form
        :formModel="formcloumns2"
        :formcloumns="formcloumns"
        :rules="rules"
        ref="formReffff"
      />
      <template #footer>
        <el-button>取消</el-button>
        <el-button type="primary" @click="confirmClick">确认</el-button>
      </template>
    </el-drawer>
  </div>
</template>
<script setup lang="ts">
interface User {
  date: string;
  name: string;
  address: string;
}
import { reguser, reqUserInfo, updatareguser } from "@/api/user";
import { ref, onMounted, reactive, computed } from "vue";
const username = ref("");
const title = ref("");
const isvisibl2 = ref(false);
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
const addUser = async () => {
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
const isflag6 = computed(() => {
  console.log("计算属性");
  return !formModel.value.id;
});
const formModel = ref<addFormData>({
  username: "",
  password: "",
  name: "",
});
const formcloumns2 = ref([
  {
    label: "用户姓名",
    key: "username",
    placeholder: "请输入姓名",
    isvisibl: true,
  },
]);
const formcloumns = ref([
  {
    label: "用户姓名",
    key: "username",
    placeholder: "请输入姓名",
    isvisibl: true,
  },
  {
    label: "用户昵称",
    key: "name",
    placeholder: "请输入昵称",
    isvisibl: true,
  },
  {
    label: "用户密码",
    key: "password",
    placeholder: "请输入密码",
    isvisibl: isflag6,
  },
]);
const formReffff = ref();
const confirmClick = async () => {
  await formReffff.value.validate();
  console.log(formModel.value);
  if (formModel.value.id) {
    const { name, password, id, username } = formModel.value;
    await updatareguser({ id, name, username, password });
    return;
  }

  const res = await reguser(formModel.value);
  console.log(res);
};
const isvisibl = ref(false);
const rules = reactive({
  name: [{ required: true, message: "请输入昵称", trigger: "blur" }],
  username: [{ required: true, message: "请输入用户名称", trigger: "blur" }],
  password: [{ required: true, message: "请输入用户密码", trigger: "blur" }],
});
const handle = (row: any) => {
  console.log(row);
  isvisibl2.value = true;
};
const update = (row: any) => {
  title.value = "编辑用户";
  formModel.value = row;
  isvisibl.value = true;
};
</script>
