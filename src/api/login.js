import request from "@/utils/request";
export const getPicCode = () => {
  // 获取图形验证码
  return request.get("/captcha/image");
};
// 获取短信验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.post("/captcha/sendSmsCaptcha", {
    form: {
      captchaCode,
      captchaKey,
      mobile,
    },
  });
};
// 登录接口
export const loginCode = (smsCode, mobile) => {
  return request.post("/passport/login", {
    form: { isParty: false, partyData: {}, smsCode, mobile },
  });
};
