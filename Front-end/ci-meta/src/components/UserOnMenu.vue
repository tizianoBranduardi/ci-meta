<template>
  <b-nav style="margin : 0px 10px 0px 10px" v-if="this.$store.state.logged">
    Welcome {{this.$store.state.username}}
  </b-nav>
  <b-nav style="margin : 0px 10px 0px 10px" v-else>
    <router-link to="/login">Login</router-link>
  </b-nav>
</template>

<script>
export default {
  name: 'UserOnMenu',
};
</script>
