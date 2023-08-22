// 此处用于存放所有登录相关的接口请求
import request from "@/utils/request";

// 1. 获取图形验证码
export const getProList = (obj) => {
  const { categoryId, goodsName, page } = obj;
  return request.get("/goods/list", {
    params: {
      categoryId,
      goodsName,
      page,
    },
  });
};
