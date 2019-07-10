<template>
  <v-app id="login" class="green darken-4">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center >
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="../../assets/trex-logo.jpg" alt="Vue Material Admin" >
                  <h1 class="flex my-4 ">Welcome To T-Rex  </h1>
                </div>
                <v-form>
                  <v-text-field
                    append-icon="person"
                    name="login"
                    label="Login"
                    type="text"
                    v-model="userEmail"
                    :error="error"
                    :rules="[rules.required]"/>
                  <v-text-field
                    :type="hidePassword ? 'password' : 'text'"
                    :append-icon="hidePassword ? 'visibility_off' : 'visibility'"
                    name="password"
                    label="Password"
                    id="password"
                    :rules="[rules.required]"
                    v-model="password"
                    :error="error"
                    @click:append="hidePassword = !hidePassword"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar
        v-model="showResult"
        :timeout="2000"
        top>
        {{ result }}
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
// import { store } from '../../store/store';

export default {
  data() {
    return {
      loading: false,
      userEmail: 'ashish1.sarode12@infobeans.com',
      password: 'ashish123',
      hidePassword: true,
      error: false,
      showResult: false,
      result: '',
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },

  methods: {

    login() {
      const vm = this;

      if (!vm.userEmail || !vm.password) {

        vm.result = "Email and Password can't be null.";
        vm.showResult = true;

        return;
      }

      var params = {
        email: vm.userEmail,
        password: vm.password,
      }

      var email = vm.userEmail
      var password = vm.password

      // this.$store.dispatch('login', { email, password })
      //  .then((response) =>
      //  this.$router.push('/'))
      //  .catch(err => console.log(err))

      this.$store.dispatch('login',{ email, password}).then((response) =>{
        console.log('Everything is awesome.');
        vm.$router.push({ name: 'Dashboard' });
      }).catch((error) => {
        console.warn('Not good man :(');
        vm.error = true;
        vm.result = "Email or Password is incorrect.";
        vm.showResult = true;

      })



      //  vm.axios.post('http://192.168.2.33:8080/api/v1/users/login', params).then((response) => {
      //    console.log(response.data);
      //       console.log('Everything is awesome.');
      //      vm.$router.push({ name: 'Dashboard' });

      //   }).catch((error) => {
      //       console.warn('Not good man :(');
      //       vm.error = true;
      //       vm.result = "Email or Password is incorrect.";
      //       vm.showResult = true;
      //   })
    }
  }
}
</script>

<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
