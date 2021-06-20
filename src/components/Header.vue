<template>
  <header class="d-flex justify-content-between header">
    <div class="logo">
      <router-link :to="{path:'/our_products'}">
        <img src="../assets/pictos/logo.jpg" alt="Logo" />
      </router-link>
    </div>
    <div class="right-menu d-flex">
      <my-account></my-account>
      <my-basket></my-basket>
    </div>
  </header>
</template>

<script>
import MyBasket from "./SubComponentsHeader/MyBasket";
import MyAccount from "./SubComponentsHeader/MyAccount";
export default {
  components: {
    MyBasket,
    MyAccount
  }
};
</script>

<style>
.logo {
  margin-left: 1rem;
}
.header {
  height: 40px;
  margin: 10px auto;
}
.header .name {
  display: block;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #dedede;
  margin: 10px auto;
  font-weight: 700;
  font-size: 18px;
}
</style>