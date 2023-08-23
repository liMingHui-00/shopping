import request from "@/utils/request";
// 订单结算确认
//   mode: cart  =>obj    {cartIds}
//   mode: buyNow => obj  {goodsId,goodsNum,goodsSkuId}
export const checkOrder = (mode, obj) => {
  return request.get("/checkout/order", {
    params: {
      mode, // cart    buyNow
      delivery: 0, //快递配送
      couponId: 0, //优惠价id  0 不使用
      isUsePoints: 0, //积分   0  不使用
      ...obj,
    },
  });
};
// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get("/order/list", {
    params: {
      dataType,
      page,
    },
  });
};
