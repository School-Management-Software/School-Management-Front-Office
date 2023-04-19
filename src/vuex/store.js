import { createStore } from 'vuex'
import { router } from '@/router/index'
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
    logout({ commit }) {
      commit('clearToken'); // clear the token in state
      localStorage.removeItem('token'); // remove the token from local storage
      router.push('/auth/login');
    },
  }
})

export default store
