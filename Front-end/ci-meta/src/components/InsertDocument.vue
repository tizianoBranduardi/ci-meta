<template>
  <div>
    
    <b-container>
      <b-row>
        <b-overlay :show="insertDocType" :opacity="1">
          <div style="display-inline">
            <b-col b-col sm="auto">
              <strong>Tipologia del documento &emsp;</strong>
              <b-form-select size="sm" v-model="documentType" :options="this.$store.state.documentType"/>
              &emsp;oppure
              <b-button variant="link" @click="insertDocType = true">
                  Crea una nuova tipologia di documento
              </b-button>
            </b-col>
          </div>
          <template #overlay>
            <b-input-group class="mt-3">
              <b-form-input v-model="newDocumentType" placeholder="Inserisci la nuova tipologia" />
              <b-input-group-append>
                <b-button variant="info" @click="insertDocType=false & addNewType()">
                  Conferma
                </b-button>
                <b-button variant="outline-secondary" @click="insertDocType=false">Indietro</b-button>
              </b-input-group-append>
            </b-input-group>
          </template>
        </b-overlay>
      </b-row>
    </b-container>
    <br>

    <b-container>
      <b-row>
        <b-input-group class="mt-3" style="display-inline">
              <strong>Incipit &emsp;</strong>
              <b-form-input v-model="incipit" maxlength="255" placeholder="" />
            </b-input-group>
      </b-row>
    </b-container>
    <br>
    
    <b-container>
      <b-row>
        <b-col style="display-inline">
          <strong>Trascrizione &emsp;</strong>
          <b-form-textarea
            id="textarea"
            v-model="transcription"
            placeholder=""
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
      </b-row>
    </b-container>
    <br>

    <b-container>
      <b-row>
        <b-overlay :show="insertLanguage" :opacity="1">
          <div style="display-inline">
            <b-col>
              <strong>Lingua del documento &emsp;</strong>
              <b-form-select size="sm" v-model="language" :options="this.$store.state.language"/>
              &emsp;oppure
              <b-button variant="link" @click="insertLanguage = true">
                  Crea una nuova lingua
              </b-button>
            </b-col>
          </div>
          <template #overlay>
            <b-input-group class="mt-3">
              <b-form-input v-model="newLanguage" placeholder="Inserisci la nuova lingua" />
              <b-input-group-append>
                <b-button variant="info" @click="insertLanguage=false & addNewLanguage()">
                  Conferma
                </b-button>
                <b-button variant="outline-secondary" @click="insertLanguage=false">Indietro</b-button>
              </b-input-group-append>
            </b-input-group>
          </template>
        </b-overlay>
      </b-row>
    </b-container>
    <br>

    <b-container style="width: 100%">
      <b-row>
        <b-col>
          <strong>Data &emsp;</strong>
          <input type="date" v-model="date" required pattern="\d{4}-\d{2}-\d{2}">
        </b-col>
        <b-col>
          <b-form-checkbox size="md" :v-model="isDateDeduced">La data è stata dedotta?</b-form-checkbox>
        </b-col>
        <b-col lg="8">
        </b-col>
      </b-row>
    </b-container>
    <br>

    <b-container style="width: 100%">
      <b-row>
        <b-col>
          <strong>Collection &emsp;</strong>
          <b-form-input type="text" v-model="collection" />
        </b-col>
        <b-col>
          <strong>Folder &emsp;</strong>
          <b-form-input type="text" v-model="folder" />
        </b-col>
        <b-col><strong>Shelfmark &emsp;</strong>
        <b-form-input type="text" v-model="shelfmark" /></b-col>
      </b-row>
    </b-container>
    <br>

    <b-container>
      <b-row>
        <b-col style="display-inline">
          <strong>Note &emsp;</strong>
          <b-form-textarea
            id="note"
            v-model="note"
            placeholder=""
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
      </b-row>
    </b-container>
    <br>
    <hr>
  
    <div class="text-center">
      <b-button v-show="!loading" @click.prevent="submit()">Submit</b-button>
      <b-spinner v-show="loading" variant="primary"></b-spinner>
      <p v-show="error">Errore nella richiesta. Riprovare</p>
    </div>

  </div>
</template>

<script>


export default ({
    name: 'insertDocument',
    data(){
      return{
        documentType: '',
        incipit: '',
        transcription: '',
        language: '',
        date: '', // Year - Month - Date
        isDateDeduced: false,
        collection: '',
        folder: '',
        shelfmark: '',
        note: '',
        insertDocType: false,
        newDocumentType: '',
        insertLanguage: false,
        newLanguage: '',
        error: false,
        loading: false,
      }
    },
    methods: {
      addNewType() {
        this.$store.commit('storeDocumentType', this.newDocumentType);
      },
      addNewLanguage() {
        this.$store.commit('storeLanguage', this.newLanguage);
      },
      /*
      id | type | incipit | transcription | note | shelfmark  | folder_number | is_date_deduced | is_deleted 
      
      route /api/v1/document/<pk> ['DELETE']
      route /api/v1/document/<int:pk> ['GET']
      route /api/v1/document/ ['GET']
      route /api/v1/document/_info ['GET']
      route /api/v1/document/ ['POST']
      route /api/v1/document/<pk> ['PUT']     

      */
      async submit() {
        try {
          this.error = false;
          const data = { type: this.documentType, 
                        incipit: this.incipit,
                        transcription: this.transcription,
                        note: this.note,
                        shelfmark: this.shelfmark,
                        folder_number: this.folder_number,
                        is_date_deduced: this.isDateDeduced};
          const header = { 'Content-Type': 'application/json' , 'Authorization': this.$store.state.token };
          console.log(header);
          this.loading=true;
          const response = await this.$http.post('http://'+this.$store.state.address+':5000/api/v1/document/', data, header);
          console.log(response.data.access_token);
        }
        catch (e) {
          this.loading = false;
          console.log(e);
          this.error = true;
        }
        
      },
    },
})
</script>
