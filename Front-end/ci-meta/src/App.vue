<template>
  <div id="app">
    <b-navbar toggleable="small" type="dark" variant="dark" fixed="top" sticky>
      <b-navbar-brand style="margin : 0px 10px 0px 10px">Ci-Meta</b-navbar-brand>
      <b-nav style="margin : 0px 10px 0px 10px"><router-link to="/">Home</router-link>
      </b-nav>
      <!-- <b-nav style="margin : 0px 10px 0px 10px"><router-link to="/documents">New Document
      </router-link></b-nav>
      <b-nav style="margin : 0px 10px 0px 10px">
        <router-link to="/search">Search Document
        </router-link>  
      </b-nav> -->
      <UserOnMenu />
    </b-navbar>
    <div style="margin: 10px 10px 10px 10px">
      <router-view/>
    </div>
  </div>
</template>

<script>
import UserOnMenu from './components/UserOnMenu.vue';

export default {
  components: {
    UserOnMenu,
  },
};
</script>

<style scoped>
 .navbar.navbar-dark.bg-dark{
    background-color: rgb(240, 109, 3)!important;
 }
</style>
