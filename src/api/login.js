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
