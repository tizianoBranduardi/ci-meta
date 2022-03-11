<template>
    <div>
      <h2 class="text-center">Document {{id}}</h2>
      <b-container>
        <hr>
        <b-row>
          <b-col b-col>
            <p v-show="!editType">
              <strong>Document type &emsp;</strong>{{documentType}}
              <b-button variant="link" size="sm" @click="editType = true">
                  edit
              </b-button>
            </p>
            <div>
            <b-input-group class="mt-3" v-show="editType">
              <b-form-input v-model="documentType" maxlength="255" placeholder=documentType />
              <b-input-group-append>
                <b-button variant="info" @click="editType=false">Update</b-button>
              </b-input-group-append>
            </b-input-group>
            </div>
          </b-col>

          <b-col b-col >
            <p v-show="!editDate">
              <strong>Date &emsp;</strong>{{date}}
              <b-button variant="link" size="sm" @click="editDate = true">
                  edit
              </b-button>
            </p>
            <div>
              <b-input-group class="mt-3" v-show="editDate">
                <b-form-input v-model="date" maxlength="255" placeholder=date />
                <b-input-group-append>
                  <b-button variant="info" @click="editDate=false">Update</b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col b-col >
            <p v-show="!editCollection">
              <strong>Collection &emsp;</strong>{{collection}}
              <b-button variant="link" size="sm" @click="editCollection = true">
                  edit
              </b-button>
            </p>
            <div>
            <b-input-group class="mt-3" v-show="editCollection">
              <b-form-input v-model="collection" maxlength="255" placeholder=collection />
              <b-input-group-append>
                <b-button variant="info" @click="editCollection=false">Update</b-button>
              </b-input-group-append>
            </b-input-group>
            </div>
          </b-col>
          <b-col b-col >
            <p v-show="!editFolder">
              <strong>Folder &emsp;</strong>{{folder}}
              <b-button variant="link" @click="editFolder = true">
                  edit
              </b-button>
            </p>
            <div>
            <b-input-group class="mt-3" v-show="editFolder">
              <b-form-input v-model="folder" maxlength="255" placeholder=folder />
              <b-input-group-append>
                <b-button variant="info" @click="editFolder=false">Update</b-button>
              </b-input-group-append>
            </b-input-group>
            </div>
          </b-col>
          <b-col b-col >
            <p v-show="!editFolderNumber">
              <strong>Folder Number &emsp;</strong>{{folderNumber}}
              <b-button variant="link" @click="editFolderNumber = true">
                  edit
              </b-button>
            </p>
            <div>
            <b-input-group class="mt-3" v-show="editFolderNumber">
              <b-form-input v-model="folderNumber" maxlength="255" placeholder=folderNumber />
              <b-input-group-append>
                <b-button variant="info" @click="editFolderNumber=false">Update</b-button>
              </b-input-group-append>
            </b-input-group>
            </div>
          </b-col>
          <b-col b-col >
            <p v-show="!editShelfmark">
              <strong>Shelfmark &emsp;</strong>{{shelfmark}}
              <b-button variant="link" @click="editShelfmark = true">
                  edit
              </b-button>
            </p>
            <div>
            <b-input-group class="mt-3" v-show="editShelfmark">
              <b-form-input v-model="shelfmark" maxlength="255" placeholder=shelfmark />
              <b-input-group-append>
                <b-button variant="info" @click="editShelfmark=false">Update</b-button>
              </b-input-group-append>
            </b-input-group>
            </div>
          </b-col>
        </b-row>

        <hr>

        <b-row>
          <b-col b-col>
            <p v-show="!editIncipit">
              <strong>Incipit &emsp;</strong>{{incipit}}
              &emsp;&emsp;
              <b-button variant="link" @click="editIncipit = true">
                  edit
              </b-button>
            </p>
            <div>
            <b-input-group class="mt-3" v-show="editIncipit">
              <b-form-input v-model="incipit" maxlength="255" placeholder=incipit />
              <b-input-group-append>
                <b-button variant="info" @click="editIncipit=false">Update</b-button>
              </b-input-group-append>
            </b-input-group>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col b-col>
            <p v-show="!editTranscription">
              <strong>Transcription &emsp;</strong>{{transcription}}
              &emsp;&emsp;
              <b-button variant="link" @click="editTranscription = true">
                  edit
              </b-button>
            </p>
            <div>
            <b-input-group class="mt-3" v-show="editTranscription">
              <b-form-textarea rows="6" v-model="transcription" maxlength="255" placeholder=transcription />
              <b-input-group-append>
                <b-button variant="info" @click="editTranscription=false">Update</b-button>
              </b-input-group-append>
            </b-input-group>
            </div>
          </b-col>
          <b-col b-col>
            <b-card
              border-variant="danger"
              header="Danger"
              header-border-variant="danger"
              header-text-variant="danger"
              align="center"
              >
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Horizontal Card">
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>

        <b-row>
          <b-col b-col>
            <p v-show="!editLanguage">
              <strong>Language &emsp;</strong>{{language}}
              &emsp;&emsp;
              <b-button variant="link" @click="editLanguage = true">
                  edit
              </b-button>
            </p>
            <div>
            <b-input-group class="mt-3" v-show="editLanguage">
              <b-form-input v-model="language" maxlength="255" placeholder=language />
              <b-input-group-append>
                <b-button variant="info" @click="editLanguage=false">Update</b-button>
              </b-input-group-append>
            </b-input-group>
            </div>
          </b-col>
        </b-row>

        <b-row>
          
        </b-row>

        <b-row>
          
        </b-row>

        <b-row>
          
        </b-row>

        <b-row>
          
        </b-row>

        <b-row>
          
        </b-row>

        <b-row>
          <b-col b-col >
            <p>
              <strong>Note &emsp;</strong>
            </p>
            <div>
            <b-input-group class="mt-3">
              <b-form-input prepend="Note" v-model="note" maxlength="255" placeholder=note />
            </b-input-group>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div v-show="deleteConfirm">
        <br>
        <b-container>
          <b-card border-variant="danger"
            header="Delete Confirm"
            header-border-variant="danger"
            header-text-variant="danger"
          align="center">
            <b-card-text class="text-center">
              Are you sure you want to delete this document?&emsp;
              <b-button variant="danger" @click="deleteDocument(id)">Yes</b-button>&emsp;
              <b-button variant="success" @click="deleteConfirm = false">No</b-button>
            </b-card-text>
          </b-card>
        </b-container>
      </div>
        <br>
      <div class="text-center" v-show="!deleteConfirm">
        <b-button variant="danger" @click="deleteConfirm=true">Delete</b-button>&emsp;
        <b-button variant="success" @click="submit()">Update</b-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ShowDocuments',
  props : ['id'],
  data () {
    return {
      documentType: '',
      incipit: '',
      transcription: '',
      language: '',
      date: '',
      isDateDeduced: false,
      collection: '',
      folder: '',
      folderNumber: '',
      shelfmark: '',
      note: '',
      error: false,
      editShelfmark: false,
      loading: false,
      success: false,
      editType: false,
      editIncipit: false,
      editTranscription: false,
      editLanguage: false,
      editDate: false,
      editDateDeduced: false,
      editCollection: false,
      editFolder: false,
      editFolderNumber: false,
      deleteConfirm : false,
    }
  },
  async mounted() {
    try {
      this.error = false;
      const header = { 'Content-Type': 'application/json' };
      const response = await this.$http.get('http://'+this.$store.state.address+'/api/v1/document/'+this.id, header);
      if (response.status==200){
        this.show=true;
        this.show=true;
        this.documentType=response.data.result.type;
        this.incipit=response.data.result.incipit;
        this.transcription=response.data.result.transcription;
        this.language=response.data.result.language;
        this.date=response.data.result.gregorian_date;
        this.isDateDeduced=response.data.result.is_date_deduced;
        this.collection=response.data.result.collection;
        this.folder=response.data.result.folder;
        this.folderNumber=response.data.result.folder_number;
        this.shelfmark=response.data.result.shelfmark;
        this.note=response.data.result.note;
      }
    }
    catch (e) {
      this.loading = false;
      console.log(e);
      this.error = true;
    } 
  },
  methods: {
    async deleteDocument(id) {
      try {
        const header = { 'Content-Type': 'application/json' };
        const data = {'is_deleted': 'true'}
        const response = await this.$http.put('http://'+this.$store.state.address+'/api/v1/document/'+this.id, data, header);
        if (response.status==200)
          this.$router.push({name: 'Home'});
      }
      catch (e) {
        console.log(e);
      }
    },
    async submit() {
      try {
        this.error = false;
        const data = { type: this.documentType, 
                      incipit: this.incipit,
                      transcription: this.transcription,
                      note: this.note,
                      language: this.language,
                      gregorian_date : this.date,
                      collection : this.collection,
                      shelfmark: this.shelfmark,
                      folder_number: this.folder_number,
                      is_date_deduced: this.isDateDeduced};
        const header = { 'Content-Type': 'application/json' };
        console.log(header);
        this.loading=true;
        const response = await this.$http.put('http://'+this.$store.state.address+'/api/v1/document/'+this.id, data, header);
        if (response.status==200)
          this.$router.push({name: 'Home'});
      }
      catch (e) {
        console.log(e);
      }
    }
  }
};
</script>


<!--
<template>
    <div>
    <p>Document</p>
    <p>Incipit : {{incipit}}</p>
    <p>Transcription : {{transcription}}</p>
  </div>
</template>

<script>

export default {
    name: 'showDocuments',
    data(){
      return{
        documentType: '---',
        incipit: '',
        transcription: '',
        language: '',
        date: '',
        isDateDeduced: false,
        collection: '',
        folder: '',
        folderNumber: '',
        shelfmark: '',
        note: '',
        error: false,
        loading: false,
        success: false,
      }
    },
    methods: {
      async created() {
        try {
        this.error = false;
        const header = { 'Content-Type': 'application/json' };
        console.log("Start show");
        const response = await this.$http.get('http://'+this.$store.state.address+'/api/v1/document/1', header);
        console.log(response);
        if (response){
            this.show=true;
            this.documentType=response.result.type;
            this.incipit=response.result.incipit;
            this.transcription=response.result.transcription;
            this.language=response.result.language;
            this.date=response.result.gregorian_date;
            this.isDateDeduced=response.result.is_date_deduced;
            this.collection=response.result.collection;
            this.folder=response.result.folder;
            this.folderNumber=response.result.folder_number;
            this.shelfmark=response.result.shelfmark;
            }
        }
        catch (e) {
        this.loading = false;
        console.log(e);
        this.error = true;
        }
      },
    },
};
</script>
-->