<template>
  <div class="d-flex align-items-center justify-content-center">

    <b-card
    title="Login"
    style="max-width: 20rem;"
    class="text-center"
    border-variant="warning"
    >
      <b-form inline v-if="!this.$store.state.logged">
        <label class="sr-only" for="inline-form-input-username">Username</label>
        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input v-model="uname" id="inline-form-input-username" placeholder="Username"></b-form-input>
        </b-input-group>

        <label class="sr-only" for="inline-form-input-password">Password</label>
        <b-form-input
          v-model="pw"
          type="password"
          id="inline-form-input-password"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Password"
        ></b-form-input>
        <br>
        <hr>
        <label class="sr-only" for="address-selector">Indirizzo &nbsp; </label>
        <b-form-select v-model="address" class="mb-3" id="address-selector">
          <template #first>
            <b-form-select-option :value="'localhost'">Local: @localhost</b-form-select-option>
          </template>
          <b-form-select-option :value="'101.58.58.9'">Remote: @101.58.58.9</b-form-select-option>
        </b-form-select>
        <br>
        <b-button variant="link" @click="docker = !docker">
                  Or docker address
              </b-button>
        <b-form-input
          v-model="address"
          v-show="docker"
          id="docker-address"
          type="text"
          placeholder="Docked flask Address"
        ></b-form-input>
        <br>
        <b-button v-on:click.prevent="login()" variant="primary">Login</b-button>
        <br>
        <div class="text-center" style="margin-top: 20px;" v-if="loading">
          <b-spinner variant="primary"></b-spinner>
        </div>
      </b-form>
    </b-card>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        loading: false,
        logged: false,
        error: false,
        uname: '',
        pw: '',
        address: null,
        timeout: false,
        docker: false,
      };
    },
    methods: {
      async login() {
        try {
          this.error = false;
          const data = { username: this.uname, password: this.pw, provider: 'db' };
          const headers = { 'Content-Type': 'application/json' };
          this.loading=true;
          const response = await this.$http.post('http://'+this.address+':5000/api/v1/security/login', data, headers);
          this.loading=false;
          this.logged = true;
          this.$store.commit('login', {username: this.uname, token: response.data.access_token, address: this.address});
          this.$router.push({ name: 'Home'});
        }
        catch (e) {
          console.log(this.address);
          console.log(e);
          this.error = true;
          this.loading= false;
        }
        
      },
    },
  };
</script>