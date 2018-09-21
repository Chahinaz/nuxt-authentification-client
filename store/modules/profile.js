const state = () => ({
  profile: {
    image: ''
  }
});

const getters = {
  getProfile(state){
    if(state.profile.image.isUndefined || state.profile.image===''){
      state.profile.image = "http://localhost:3000/_nuxt/img/defaultProfilePicture.319d0ad.png";
    }
    return state.profile;
  }
};

const mutations = {
  setProfile(state, newProfile){
    state.profile = newProfile;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters
};
