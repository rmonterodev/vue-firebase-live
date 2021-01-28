import { createStore } from "vuex";

import messages from "./messages";
import rooms from "./rooms";
import user from "./user";
import utils from "./utils";

export default createStore({
  state: {},
  mutations: {},
  actions: {
    checkAuth() {}
  },
  modules: {
    messages,
    rooms,
    user,
    utils
  }
});
