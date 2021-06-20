<template>
  <div>
    <search-bar></search-bar>
    <router-view></router-view>
    <div class="product-list d-flex justify-content-between">
      <div
        class="product-item"
        v-for="(product,index) in paginatedData"
        :key="product.id + '_' + index"
      >
        <div class="product-image">
          <router-link :to="'/our_products/' + product.id">
            <img class :src="product.image" :alt="product.name" />
          </router-link>
        </div>
        <div class="description d-flex">
          <div class="left-content">
            <span class="name">
              <router-link :to="{name:'product', params:{ id: product.id }}">
                <b>{{ product.name }}</b>
              </router-link>
            </span>
            <div class="rating">
              <span>
                <span>{{ product.rating }}</span>
                <img src="../assets/pictos/star-fill.svg" alt="Star" />
              </span>
            </div>
          </div>
          <div class="right-content">
            <span class="price">{{ product.price }}</span>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div class="page-list d-flex">
          <button class="page" @click="previousPage">Pre</button>
          <button class="page" @click="nextPage">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    SearchBar
  },
  data() {
    return {
      product: this.$store.getters.getProductById(this.$route.params.id),
      pageNumber: 0,
    };
  },
  props: {
    size: {
      type: Number,
      //Number of items displayed per page
      default: 6
    }
  },
  computed: {
    ...mapState(["products", "basket"]),
    ...mapGetters(["filteredProducts"]),
    pageCount() {
      let l = this.filteredProducts.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.filteredProducts.slice(start, end);
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    previousPage() {
      this.pageNumber--;
    }
  },
  mounted() {
    this.$store.dispatch("loadProducts");
  }
};
</script>

<style>
.product-image {
  width: 330px;
  height: 200px;
}
img {
  max-width: 100%;
  max-height: 100%;
}
.product-list {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.product-item {
  margin-left: 1rem;
}
.product-list .product-item {
  width: 500px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.product-list .product-item .rating img {
  width: 10px;
  height: 10px;
  margin-right: 2px;
}
.left-content {
  position: relative;
  top: -40px;
  padding: 30px 10px 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  width: 250px;
}
.right-content {
  width: 80px;
  background: #fff;
  padding: 10px;
  text-align: right;
}
.right-content button {
  display: block !important;
  text-align: right;
}
.pagination {
  width: 100%;
  margin-left: 1rem;
}
.pagination .page {
  width: 40px;
  height: 40px;
  line-height: 40px;
}
.pagination .page-active {
  background: #232323;
  color: #fff;
}
</style>