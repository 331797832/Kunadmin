import { createPinia } from "pinia";
import persist from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(persist);
export default pinia;
export * from "./modules/user"; // 接收user 模块的所有的按需导出
export * from "./modules/layoutsetting"; // 接收user 模块的所有的按需导出
