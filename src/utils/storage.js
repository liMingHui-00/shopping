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

// 获取搜索历史
export const getHistory = () => {
  const history = localStorage.getItem("hm_shopping_history");
  return history ? JSON.parse(history) : [];
};
// 设置搜索历史
export const setHistory = (arrHistory) => {
  localStorage.setItem("hm_shopping_history", JSON.stringify(arrHistory));
};
