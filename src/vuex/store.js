import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    data: null,
    isAnError: false,
    token: localStorage.getItem('token') || null,
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
    isAnError(state, data){
      state.isAnError = data;

    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    clearToken(state) {
      state.token = null;
    },
  },
  actions: {
    async fetchData({ commit, state }, URL) {
      try {
          await axios.get(URL, {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + state.token,
              },
          })
          .then(response => {
              console.log("store data !!!!",response.data);
              commit('SET_DATA', response.data)
              commit('isAnError', false)
          })
          .catch(function (error) {
              console.error(error);
              commit('isAnError', true)

          });

      } catch (error) {
          console.error(error);
              commit('isAnError', true)

      }
    },
    logout({ commit }, router) {
      commit('clearToken');
      localStorage.removeItem('token');
      router.push('/auth/login');
    },
  },
  getters: {
    getData: state => state.data,
    isAnError: state => state.isAnError,
  },
})

export default store
