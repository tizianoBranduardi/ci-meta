import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    token: '',
    username: '',
    address: 'localhost',
    logged: false,
    documentType: [{value: 'research notes', text: 'Research notes'},
                    {value: 'letter', text: 'Letter'}],
    language: [{value: 'latin', text: 'Latin'}, {value: 'italian', text: 'Italian'}],
  },
  mutations: {
    login(state, payload) {
      state.token = 'Bearer ' + payload.token;
      state.username = payload.username;
      state.logged = true;
      state.address= payload.address;
    },
    storeDocumentType(state, newType) {
      state.documentType.push({value: newType.toLowerCase(), text: newType.charAt(0).toUpperCase() + newType.slice(1)});
    },
    storeLanguage(state, newLanguage) {
      state.language.push({value: newLanguage.toLowerCase(), text: newLanguage.charAt(0).toUpperCase() + newLanguage.slice(1)});
    }
  },
});