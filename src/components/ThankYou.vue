<template>
  <div class="thank-you">
    <h2>Merci de votre commande !</h2>
    <p>
      Votre référence :
      <strong>#{{ orderRef }}</strong>
    </p>
    <p>
      Date de livraison estimée :
      <strong>{{ randomDate }}</strong>
    </p>
    <router-link :to="{name:'homepage'}">
      <button class="cta">Retour à l'accueil</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderRef: Math.floor(Math.random() * 1500),
      randomDate: "16 Avril 2019"
    }
  },
};
</script>

<style>
.thank-you {
  background: rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}
.thank-you .cta {
  max-width: 200px;
  margin: 0 auto;
}
.thank-you p {
  margin: 0 auto 10px;
}
</style>