const state = () => ({
  auth:{
    loggedIn: false,
    user: {}
  }
});

const getters = {
  isAuthenticated(state){
    return state.auth.loggedIn
  },

  getLoggedUser(state){
    return state.auth.user
  }
};

const mutations = {
  updateAuth(state, data) {
    state.auth.loggedIn = data;
  },

  updateUser(state, data) {
    state.auth.user = data;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters
};
