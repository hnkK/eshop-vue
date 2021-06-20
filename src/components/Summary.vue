<template>
  <div class="summary">
    <h1>Récapitulatif de la commande</h1>
    <div class="summary-box">
      <div class="summary-item d-flex" v-for="(product, index) in basket" :key="index">
        <div class="quantity">
          <button>+</button>
          <span class="number">{{ product.quantity }}x</span>
          <button>-</button>
        </div>
        <div class="image">
          <img class :src="product.image" alt="Product image" />
        </div>
        <div class="title">{{ product.name }}</div>
        <div class="price">{{ product.price }}</div>
        <button class="delete" style="color: red;" @click.prevent="deleteProduct">X</button>
      </div>
      <div class="total-summary d-flex">
        <h3>Total</h3>
        <strong class="total-price">{{ totalPrice }}€</strong>
      </div>
    </div>
    <p
      class="error"
      v-if="totalPrice > wallet"
    >Vous n'avez pas assez de crédits, pour cette commande</p>
    <p class="error" style="color: black;" v-else-if="totalPrice == 0">Aucun article</p>
    <p class="error" style="color: green;" v-else>Vous pouvez effectuer la commande</p>
    <button class="cta pay" @click.prevent="checkOrder">Payer</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["basket", "wallet", "prixTotal"]),
    /* Sum all product's prices and around it to 2 decimals */
    totalPrice() {
      let totalPrice = 0;
      this.basket.forEach(element => {
        totalPrice += element.quantity * element.price;
      });
      return Math.round(totalPrice * 100) / 100;
    }
  },
  methods: {
    ...mapActions(["closeOrder"]),
    /* Check if the user basket is not empty and if the user himself is still connected before ordering*/
    checkOrder() {
      if (this.wallet > this.totalPrice && localStorage.isLogged == "true") {
        this.closeOrder();
        localStorage.orderDone = "true";
        this.$router.push({ name: "thankyou" });
      } else if (this.totalPrice == 0) {
        console.log("Votre panier est vide");
      } else {
        console.log("Vous n'avez pas assez de crédit");
      }
    },
    deleteProduct(product) {
      this.basket.splice(this.basket.indexOf(product));
      console.log("product deleted from order");
    }
  }
};
</script>

<style>
.summary {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.summary-box {
  border: 1px solid #232323;
  padding: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.summary-item {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.summary-item .quantity button {
  border: 1px solid #dedede;
  border-radius: 20px;
  padding: 0;
  line-height: 18px;
  display: block;
  width: 20px;
  height: 20px;
  text-align: center;
}
.summary-item .quantity {
  padding: 10px;
  -ms-flex-preferred-size: 50px;
  flex-basis: 50px;
  min-width: 50px;
}
.summary-item .image {
  padding: 10px;
  min-width: 50px;
  height: 50px;
}
.summary-item .title {
  padding: 10px;
  -ms-flex-preferred-size: 300px;
  flex-basis: 300px;
  min-width: 300px;
}
.summary-item .price {
  padding: 10px;
  -ms-flex-preferred-size: 50px;
  flex-basis: 50px;
  text-align: center;
  min-width: 50px;
}
.summary button {
  margin-left: auto;
  margin-right: auto;
}
.total-price {
  font-size: 32px;
}
.total-summary {
  font-weight: 700;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 20px;
  border-top: 1px solid #dedede;
  padding-top: 20px;
}
.total-summary h3 {
  margin-right: 355px;
}
.pay {
  max-width: 200px;
}
</style>