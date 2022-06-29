import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    client_id: 'be3f615faa614e2bbbdb6b6a56f98aa4',
    redirect_uri: process.env.VUE_APP_URL
  },

  getters: {
  },
  actions: {
    /**
     * Connect Users Spotify Account
     */
    connectSpotifyAccount({ state }) {
      window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${state.client_id}&scope=user-top-read&redirect_uri=${state.redirect_uri}`
    },
    /**
     * Retrieve Access Token + Update Store
     */
    getAccessToken({ state, commit }, code) {
      let querystring = require("querystring");
      const headers = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      let data = {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: state.redirect_uri,
        client_id: state.client_id,
        client_secret: process.env.VUE_APP_SPOTIFY_CLIENT_SECRET,
      };
      axios
        .post("/api/auth/token", querystring.stringify(data), headers)
        .then((res) => {
          console.log(res);
          commit('setToken', res.data.access_token)
        });

    }
  },
  mutations: {
    setToken(state, token) {
      state.user_token = token
    }
  },
  modules: {
  }
})
