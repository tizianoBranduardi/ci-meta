<template>
  <div>
    <p v-show="!show">Loading...</p>
    <b-table-simple v-show="show">
      <table class="table table-bordered" v-show="show">
        <b-thead>
          <b-tr>
            <b-th></b-th>
            <b-th>Id</b-th>
            <b-th>Type</b-th>
            <b-th>Collection</b-th>
            <b-th>Folder</b-th>
            <b-th>Folder Number</b-th>
            <b-th>Gregorian Date</b-th>
            <b-th>Shelfmark</b-th>
            <b-th>Incipit</b-th>
            <b-th>Language</b-th>
            <b-th>Transcription</b-th>
            <b-th>Note</b-th>
          </b-tr>
        </b-thead>
          <b-tr v-for="(doc, index) in docs" :key="doc">
            <b-td>
              <b-icon icon="search"></b-icon><b-icon icon="brush"></b-icon><b-icon icon="trash"></b-icon>
            </b-td>
            <b-td>{{ids[index]}}</b-td>
            <b-td>{{doc.type}}</b-td>
            <b-td>{{doc.collection}}</b-td>
            <b-td>{{doc.folder}}</b-td>
            <b-td>{{doc.folder_number}}</b-td>
            <b-td>{{doc.gregorian_date}}</b-td>
            <b-td>{{doc.shelfmark}}</b-td>
            <b-td>{{doc.incipit}}</b-td>
            <b-td>{{doc.language}}</b-td>
            <b-td>{{doc.transcription}}</b-td>
            <b-td>{{doc.note}}</b-td>
          </b-tr>
      </table>
    </b-table-simple>
  </div>
</template>

<script>
export default {
  name: 'ListDocuments',
  data () {
    return {
      ids :[],
      docs:[],
      show: false,
    }
  },
  async mounted() {
    try {
      this.error = false;
      const header = { 'Content-Type': 'application/json' };
      const response = await this.$http.get('http://'+this.$store.state.address+'/api/v1/document/', header);
      console.log(response.data.count);
      if (response.data.count>=1){
        this.show=true;
        this.ids=response.data.ids;
        this.docs=response.data.result;
      }
    }
    catch (e) {
      this.loading = false;
      console.log(e);
      this.error = true;
    }
      
  }
};
</script>
