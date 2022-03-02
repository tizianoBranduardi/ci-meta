<template>
  <div>
    <div v-if="!this.$store.state.logged">
      <Login />
    </div>
    <div v-if="this.$store.state.logged">
      <Search />
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import Search from '../components/Search.vue';

export default {
  components: {
    Login,
    Search,
  },
};
</script>
