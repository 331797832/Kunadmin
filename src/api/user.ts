import request from "@/utils/request";
export const getdata = (data: any) => {
  return request({
    url: "/api/user/login",
    method: "post",
    data,
  });
};
export const reqUserInfo = () => {
  return request.get("admin/acl/user/1/10/");
};
export interface loginFormData {
  username: string;
  password: string;
}
export interface addFormData {
  username: string;
  name: string;
  password: string;
}
export const userlogin = (data: loginFormData) => {
  return request.get("/admin/acl/index/login", {
    data,
  });
};
export const reguser = (data: addFormData) => {
  return request.post("/admin/acl/user/save", data);
};
export const updatareguser = (data: addFormData) => {
  return request.put("/admin/acl/user/save", data);
};
