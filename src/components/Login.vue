<template>
  <div class="login">
    <h2>Se connecter</h2>
    <div class="login-box align-middle">
      <input type="text" placeholder="username" v-model="login" />
      <input type="password" placeholder="password" v-model="password" />
      <button class="cta" @click.prevent="checkLogin">Se connecter</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
const adminLogin = "admin";
const adminPassword = "admin";
export default {
  data() {
    return {
      login: "",
      password: ""
    };
  },

  methods: {
    ...mapMutations(["isUserConnected"]),
    /* Check logins of the user and set his session to connected, return a alert if wrong */
    checkLogin() {
      if (adminLogin == this.login && adminPassword == this.password) {
        localStorage.isLogged = "true";
        console.log(localStorage)
        this.$router.push({ name: "homepage" });
        this.isUserConnected()
      } else {
        alert('Login ou Mot de passe éronné')
      }
    },
  }
};
</script>

<style>
.login {
  text-align: center;
  margin-top: 150px;
}
.login-box {
  border: 1px solid #232323;
  padding: 20px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
}
.login-box input {
  margin-bottom: 10px;
  border: 0;
  border-bottom: 1px solid #dedede;
  padding: 10px;
}
.login-box input,
button {
  width: 100%;
  display: block;
}
</style>
