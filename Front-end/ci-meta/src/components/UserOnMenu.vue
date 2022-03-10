<template>
  <b-nav style="margin : 0px 10px 0px 10px" v-if="this.$store.state.logged">
    Welcome {{this.$store.state.username}} - <a @click="logout()" href="">Logout</a>
  </b-nav>
  <b-nav style="margin : 0px 10px 0px 10px" v-else>
    <router-link to="/login">Login</router-link>
  </b-nav>
</template>

<script>
export default {
  name: 'UserOnMenu',
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push({ name: 'Home'});
    }
  }
};
</script>
