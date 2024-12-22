import request from "@/utils/request";
export const getdata=(data :any)=>{
    return request({
        url:"/api/user/login",
        method:"post",
        data
    })
}
