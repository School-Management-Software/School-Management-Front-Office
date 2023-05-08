import { createStore } from 'vuex'
const store = createStore({
  state: {
    token: localStorage.getItem('token') || null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    clearToken(state) {
      state.token = null;
    },
  },
  actions: {
    logout({ commit }, router) {
      commit('clearToken');
      localStorage.removeItem('token');
      router.push('/auth/login');
    },
  }
})

export default store
