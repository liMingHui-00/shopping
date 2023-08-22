export default {
  namespaced: true,
  state: {
    userInfo: {
      token: "",
      userId: "",
    },
  },
  getters: {},
  mutations: {
    setUserInfo(state, obj) {
      state.userInfo = obj;
    },
  },
  actions: {},
  modules: {},
};
