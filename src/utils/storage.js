// const obj = {
//   name: "foo",
//   age: 77,
// };
// const res = JSON.stringify(obj);
// console.log(JSON.stringify(obj)); //{"name":"foo","age":77}
// console.log(JSON.parse(res)); //{name: 'foo', age: 77}

// 获取个人信息
export const getInfo = () => {
  const defaultObj = { token: "", userId: "" };
  const result = localStorage.getItem("hm_shopping_info");
  return result ? JSON.parse(result) : defaultObj;
};
// 设置个人信息
export const setUserInfo = (obj) => {
  localStorage.setItem("hm_shopping_info", JSON.stringify(obj));
};
// 移出个人信息
export const removeUserInfo = () => {
  localStorage.removeItem("hm_shopping_info");
};
