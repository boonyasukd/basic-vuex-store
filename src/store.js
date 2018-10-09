import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    accounts: [],
    selectedAccount: null,
  },
  getters: {
    isLoggedIn: ({ user }) => user !== null,
    isSelectedAccountAvailable: ({ selectedAccount }) => selectedAccount !== null,
    hasMoreThanOneAccount: ({ accounts }) => accounts.length > 0,
  },
  mutations: {
    setUser: (state, payload) => { state.user = payload; },
    setAccounts: (state, payload) => { state.accounts = payload; },
    setSelectedAccount: (state, payload) => { state.selectedAccount = payload; },
  },
  actions: {
    login({ commit, dispatch }, { username, password }) {
      console.log('performing login');
      if (username === 'johnsmith' && password === 'password') {
        console.log('committing user object to store');
        commit('setUser', {
          name: 'John Smith',
          username: 'johnsmith',
          email: 'john.smith@somewhere.com',
        });
        dispatch('loadAccounts', username);
      }
    },
    loadAccounts({ commit }, username) {
      console.log('load associated accounts from backend');
      if (username === 'johnsmith') {
        // perform check the size of array here
        // if size = 1, you can commit selectedAccount here
        // commit('selectedAccount', array[0]);

        console.log('committing accounts to store');
        commit('setAccounts', [
          {
            id: '001234',
            domain: 'domain001234',
          },
          {
            id: '001235',
            domain: 'domain001235',
          },
        ]);
      }
    },
  },
});
