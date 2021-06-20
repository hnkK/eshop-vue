<template>
  <div>
    <div class="basket" @click="showPopup = !showPopup" ref="button">
      <div class="img">
        <img src="../../assets/pictos/basket.svg" alt="Basket" />
      </div>
    </div>
    <div
      class="basket"
      v-show="showPopup"
      v-closable="{
        exclude: ['button'],
        handler: 'onClose'}"
    >
      <div class="account-menu">
        <span class="name">Panier</span>
        <div class="items-list" v-for="item in basket" :key="item.name">
          <div class="d-flex">
            <span class="quantity">{{ item.quantity }}</span>
            <span>{{ item.name }}</span>
          </div>
        </div>
        <button class="logout" @click.prevent="checkBeforeSummary()">Payer</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showPopup: false
    };
  },
  computed: {
    ...mapState(["basket", "isConnected"])
  },
  methods: {
    checkBeforeSummary() {
      if (this.isConnected == true) {
        this.$router.push({ name: "summary" });
      } else {
        this.$router.push({ name: "login" });
      }
    },
    onClose() {
      this.showPopup = false;
    }
  }
};
</script>

<style>
.account,
.basket {
  position: relative;
}
.basket {
  width: 40px;
  cursor: pointer;
  margin-right: 1rem;
}
.items-list {
  margin: 10px auto;
}
.quantity {
  margin-right: 10px;
}
</style>