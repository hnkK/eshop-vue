<template>
  <div>
    <div class="account" v-if="isConnected">
      <span class="my-account" @click="showPopup = !showPopup" ref="button">My account</span>
      <div
        class="account-menu"
        v-show="showPopup"
        v-closable="{
    exclude: ['button'],
    handler: 'onClose'
  }"
      >
        <span class="name">Henri Jenkens</span>
        <span>Crédits : {{ wallet }}€</span>
        <br />
        <span style="font-size: 0.8rem; color: red;">{{ warning }}</span>
        <button class="add-credit" @click.prevent="fillWallet">Ajouter du crédit +</button>
        <button class="logout" @click.prevent="logout">Se déconnecter</button>
      </div>
    </div>
    <div class="account" v-else>
      <router-link :to="{path:'/login'}">
        <span class="my-account">Se connecter</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      showPopup: false
    };
  },
  computed: {
    ...mapState(["wallet", "warning", "isConnected"])
  },
  methods: {
    ...mapActions(["fillWallet"]),
    ...mapMutations(["disConnected"]),
    logout() {
      localStorage.isLogged = false;
      this.disConnected();
      this.$router.push({ name: "login" });
    },
    onClose() {
      this.showPopup = false;
    }
  }
};
</script>

<style>
.account {
  z-index: 9999;
}
.my-account {
  line-height: 40px;
  margin-right: 20px;
  cursor: pointer;
}
.account-menu {
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 99999;
  background: #fff;
  width: 250px;
  padding: 20px;
  -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}
.add-credit {
  color: #bc3045;
  font-size: 12px;
  text-align: right;
  display: block;
  width: 100%;
  margin: 5px auto;
}
.logout {
  background: #232323;
  color: #fff;
  padding: 5px;
  width: 100%;
}
</style>
