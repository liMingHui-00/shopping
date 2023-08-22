import { getInfo, setUserInfo } from "@/utils/storage";
export default {
  namespaced: true,
  state: {
    userInfo: getInfo(),
  },
  getters: {},
  mutations: {
    setUserInfo(state, obj) {
      state.userInfo = obj;
      setUserInfo(obj);
    },
  },
  actions: {},
  modules: {},
};
