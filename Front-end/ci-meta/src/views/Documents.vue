<template>
  <div>
    <div v-if="!this.$store.state.logged">
      <Login />
    </div>
    <div v-if="this.$store.state.logged">
      <ListElements />
    </div>
  </div>
</template>

<script>
import ListElements from '@/components/List_elements.vue';
import Login from '@/components/Login.vue';

export default {
  components: {
    ListElements,
    Login,
  },
};
</script>
