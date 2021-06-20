<template>
  <div>
    <header-shop></header-shop>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    HeaderShop: Header
  }
};
</script>

<style>

button {
  background: none;
  border: 0;
}
.cta {
  background: #232323;
  color: #fff;
  padding: 10px;
}
.hide {
  display: none;
}
.add img {
  width: 20px;
  height: 20px;
  -ms-flex-item-align: end;
  align-self: end;
}
.error {
  color: #ff7663;
  margin: 10px auto;
}
</style>

