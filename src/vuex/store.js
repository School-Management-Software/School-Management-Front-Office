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
    REMOVE_ITEM(state, id) {
      state.data = state.data.filter(item => item.id !== id)
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
          await axios.get(process.env.VUE_APP_API_BASE+URL, {
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
    async deleteData({commit, state }, {URL, ID}) {
      try {
        console.log(process.env.VUE_APP_API_BASE + URL+ID);
        console.log(state);
          await axios.delete(process.env.VUE_APP_API_BASE + URL + ID , {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + state.token,
              },
          })
          .then(response => {
              console.log("delete data !!!!",response);
              commit('REMOVE_ITEM', ID)
          })
          .catch(function (error) {
              console.error(error);
          });

      } catch (error) {
          console.error(error);

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
