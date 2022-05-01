<template><!-----------------------------Corps de la page home----------------------------->
  <div class="hero">
    <div id="title">
    <h1>Plouf Market</h1>
    <p>Peut-on envisager un repas sans eau ?</p>
    <a href="#home">Nos produits</a>
    </div>
  </div>  
  <div class="home" id="home">
    <ProductDescription :product="product" :active="active.product_description" v-on:closeDescription="closeProduct()" />
    <!------------------------------Apelle des cartes produit--------------------------->
    <div class="product-card-container">
      <ProductCard v-for="product in myJson" :key="product.productId" :product="product" v-on:view-product="viewProduct($event)"/>
    </div>
  </div>
</template>

<!-----------------------------Script------------------------------------------>

<script>

/*------------------------------Importation des fichier Carte de produit---------------------------*/
// @ is an alias to /src
import json from '../data/products.json';
import ProductCard from '../components/product/ProductCard.vue';
import ProductDescription from '../components/product/ProductDescription.vue';



export default {
  name: 'HomeView',
  components: {
    ProductCard, ProductDescription
  },
  /*---------------------------------Donnee necessaire au fonctionnement de la page-------------------------*/
  data(){
    return{
      myJson: json,/*Acces au contenu du fichier product.json*/
      active: {
        product_description: false,/*Class active desactiver par default*/
      }

    }
  },

  /*---------------------Appelle des fonctions----------------------------------------*/
  methods: {
    viewProduct(product){
      this.product = product,
      this.active.product_description = true, /*On recupere le produit en cours et on passe la classe active a true afin d'afficher les info*/
      console.log(this.product)
      
    },
    closeProduct() {
      this.active.product_description = false/*On repasse la classe active a false afin de fermer la description produit*/
    }
  }
}
</script>

<!-----------------------------------------Style------------------------------------->

<style lang="scss">

.product-card-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.hero{
  background-image: url('../assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: relative;

  #title{
    line-height: 1.25rem;
    text-align: end;
    position: absolute;
    right: 100px;
    top: 200px;

    h1{
      font-size: 4rem
    }

    p{
      font-size: 2rem;
    }

    a{
      text-decoration: none;
      background-color: #F06543;
      color: white;
      padding: 0.80rem;
      border-radius: 10px;
    }
  }
}

@media screen and (max-width: 700px) {
  .hero {
    #title{
      right: 50px;
      h1{
        font-size: 3rem;
      }
      p{
        font-size: 1.5rem;
      }
    }
  }
}


</style>