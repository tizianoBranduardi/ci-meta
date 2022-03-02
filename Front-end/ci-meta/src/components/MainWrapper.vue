<template>
  <div>
  <p class="text-center" v-if="!this.$store.state.logged">
    Welcome into <strong>ci-meta</strong> the historical documents analysis application
    <br>
    Login to access the services
  </p>
  <b-tabs content-class="mt-3" v-else>
  <!-- <b-tabs content-class="mt-3"> -->
    <b-tab title="Overview" active>
      <list-documents />
    </b-tab>
  </b-tabs>
</div>
</template>

<script>
import ListDocuments from './ListDocuments.vue';

  export default {
  components: {
    ListDocuments,
  },
};

</script>

