export const getters = {
  isAuthenticated(state){
    return state.auth.loggedIn
  },

  getLoggedUser(state){
    return state.auth.user
  }
};

export const mutations = {
  updateAuth(state, data) {
    state.auth.loggedIn = data;
  },

  updateUser(state, data) {
    state.auth.user = data;
  }
};

export const strict = false;


