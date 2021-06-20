<template>
  <div class="home">
    <div class="actions-bar d-flex">
      <div class="search-bar">
        <input type="text" placeholder="Rechercher un produit" v-model="$store.state.searchProduct" />
      </div>
      <div class="select">
        <select v-model="selectedOption">
          <option disabled value>Trier par :</option>
          <option>Ordre Alphabétique</option>
          <option>Alphabétique Inversé</option>
          <option>Prix Ascendant</option>
          <option>Prix Descendant</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      selectedOption: ''
    };
  },
  computed: {
    ...mapState(["products", "searchProduct"]),
    ...mapGetters(["filteredProducts"]),
  },
  watch: {
    // Call the right sorting function on change of the selectedOption data
    selectedOption() {
      if(this.selectedOption =="Ordre Alphabétique") {
        this.sortByNameAlpha()
      } else if(this.selectedOption =="Alphabétique Inversé") {
        this.sortByNameInv()
      } else if(this.selectedOption =="Prix Ascendant") {
        this.sortByLowestPrice()
      } else if(this.selectedOption =="Prix Descendant") {
        this.sortByHighestPrice()
      }
    }
  },
  methods: {
    ...mapMutations([
      "sortByLowestPrice",
      "sortByHighestPrice",
      "sortByNameAlpha",
      "sortByNameInv"
    ]),
  }
};
</script>

<style>
.search-bar {
  width: 800px;
  position: relative;
  margin-left: 1rem;
}
.search-bar input {
  padding: 5px;
  border: 0;
  border-bottom: 1px solid #2e2e2e;
  display: block;
  width: 100%;
}
.select {
  width: 200px;
  z-index: 999;
  position: relative;
  margin-right: 1rem;
}
.select .options {
  border: 1px solid #dedede;
  background: #fff;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  z-index: 999;
}
.select .options button {
  display: block;
  width: 100%;
  padding: 5px;
  text-align: left;
}
.select .displayed {
  border-bottom: 1px solid #dedede;
  height: 35px;
  cursor: pointer;
}
.select .selected {
  background: rgba(0, 0, 0, 0.1);
}
.actions-bar {
  margin-bottom: 40px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
</style>