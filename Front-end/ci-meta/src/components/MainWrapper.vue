<template>
  <div>
  <p class="text-center" v-if="!this.$store.state.logged">
    Welcome into <strong>ci-meta</strong> the historical documents analysis application
    <br>
    Login to access the services
  </p>
  <b-tabs content-class="mt-3" v-else>
    <b-tab title="Documents" active>
      <b-container>
        <b-row>
          <b-col b-col>
            <p class="h4 mb-2"><b-icon icon="search" variant="primary" size="lg"></b-icon> Search</p>
          </b-col>
          <b-col b-col>
            <!-- <p class="h4 mb-2">Page 1</p> -->
          </b-col>
          <b-col b-col>
            <p class="h4 mb-2"><b-icon icon="plus-circle" variant="primary" size="lg"></b-icon> New</p>
          </b-col>
          
        </b-row>
      </b-container>
      <list-documents />
    </b-tab>
    <b-tab title="Places" >
    </b-tab>
    <b-tab title="Images" >
    </b-tab>
    <b-tab title="Person" >
    </b-tab>
    <b-tab title="Actor" >
    </b-tab>
    <b-tab title="Position" >
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

