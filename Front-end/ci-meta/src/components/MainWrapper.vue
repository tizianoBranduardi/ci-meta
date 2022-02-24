<template>
  <div>
  <p class="text-center" v-if="!this.$store.state.logged">
    Benvenuto in ci-meta, l'applicazione per l'annotazione di fonti storiche.
    <br>
    Effettua il login per accedere ai servizi.
  </p>
  <b-tabs content-class="mt-3" v-else>
    <b-tab title="Nuovo Documento" active>
      <insertDocument />
    </b-tab>
    <b-tab title="Seconda tab">
      <p>Seconda tab</p>
    </b-tab>
  </b-tabs>
</div>
</template>

<script>
  import insertDocument from './InsertDocument.vue';

  export default {
  components: {
    insertDocument,
  },
};

</script>

