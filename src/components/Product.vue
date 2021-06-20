<template>
  <div class="description" v-if="product">
    <router-view></router-view>
    <router-link :to="{name:'homepage'}">
      <button class="back">Retour à tous les produits</button>
    </router-link>

    <div class="description-content d-flex">
      <div class="image">
        <img class="img-product" :src="product.image" :alt="product.name" />
      </div>
      <div class="text-side">
        <h2>{{ product.name }}</h2>
        <div>
          <span class="name">{{ product.name }}</span>
          <div class="rating">
            <span>
              <span>{{ product.rating }}   </span>
              <img src="../assets/pictos/star-fill.svg" alt="Star" />
            </span>
          </div>
        </div>
        <div class="price">{{ product.price }}</div>
        <div>{{ product.description }}</div>
        <div class="quantity d-flex">
          <h3>Quantité</h3>
          <div class="quantity-number d-flex">
            <button @click.prevent="increaseQuantity">+</button>
            <span class="number">{{ quantity }}</span>
            <button @click.prevent="decreaseQuantity">-</button>
          </div>
        </div>
        <button class="cta" @click.once="addProduct">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      product: this.$store.getters.getProductById(this.$route.params.id),
      quantity: 1
    };
  },
  computed: {
    ...mapState(["basket"])
  },
  methods: {
    // Add the product to the basket and insert a new quantity value
    // The quantity value can not be set until the product is added
    addProduct() {
      this.product.quantity = 1;
      this.basket.unshift(this.product);
    },
    increaseQuantity() {
      this.quantity++;
      this.product.quantity++;
    },
    decreaseQuantity() {
      this.quantity--;
      this.product.quantity--;
    }
  }
};
</script>

<style>
.back {
  margin-left: 1rem;
}
.back:hover {
  color: #4fc3f7;
}
.description {
  margin-right: 1rem;
}
.description .quantity-number .number {
  margin: 0 10px;
}
.description .image {
  min-width: 60%;
  min-height: 400px;
  height: 100%;
  margin-left: 1rem;
}
.description .text-side {
  min-width: 35%;
}
.description .rating img {
  width: 10px;
  height: 10px;
  margin-right: 2px;
}
.img-product {
  width: 500px;
  height: auto;
}
,
.description .quantity {
  margin: 20px auto 10px;
}
.description .quantity-number {
  padding: 5px;
  background: rgba(0, 0, 0, 0.05);
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 0 20px 5px;
}
.description .quantity-number h3 {
  font-size: 24px;
  line-height: 24px;
  margin-right: 10px;
}
.description .quantity-number button {
  border-radius: 20px;
  height: 20px;
  width: 20px;
  padding: 0;
  line-height: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.description .price {
  margin: 5px auto 10px;
  font-size: 21px;
  font-weight: 700;
}
.description .back {
  text-align: left;
  display: inline-block;
  margin-bottom: 10px;
}
</style>