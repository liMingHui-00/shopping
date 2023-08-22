// 此处用于存放所有登录相关的接口请求
import request from "@/utils/request";

// 1. 获取首页数据
export const getHomeData = () => {
  return request.get(
    "/page/detail",
    //   get方式传递参数
    {
      params: {
        pageId: 0,
      },
    }
  );
};
