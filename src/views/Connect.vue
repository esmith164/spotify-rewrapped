<template>
  <div>
    <button @click="connectSpotifyAccount">Login</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Connect",
  methods: {
    ...mapActions(["connectSpotifyAccount", "getAccessToken"]),
    getHistory() {
      this.axios
        .get("/api/me/top/tracks", {
          headers: {
            Authorization: "Bearer " + this.userToken,
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
  mounted() {
    if (this.$route.query.code) {
      this.getAccessToken(this.$route.query.code);
    }
  },
};
</script>