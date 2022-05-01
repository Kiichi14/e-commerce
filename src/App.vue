<template><!--Template de la barre de navigation----->
  <nav>
    <router-link to="/" :class="{active: $route.name === 'Home'}">Acceuil</router-link>
    <router-link to="/Panier" :class="{active: $route.name === 'Panier'}">Panier</router-link>
  </nav>
  <router-view/>
</template>

<!-------------------------------------Script-------------------------------------->

<script>
  export default {
    mounted(){
      this.$store.commit('updateCartFromLocalStorage');/*Mise a jour du local storage*/
    }
  }
</script>

<!-------------------------------------Style-------------------------------------->
<!--Mise en page general de l'applications-------------------------------->


<style lang="scss">
*{
  scroll-behavior: smooth;
}

#app {
  font-family: 'Baskerville', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body {
  background-color: rgb(245, 245, 245);
}

nav{
  padding: 10px;
  width: 100%;
  height: 30px;
  background-color: white;
  line-height: 30px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  position: fixed;
  top: 0;
  z-index: 102;

  a{
    font-weight: bold;
    color: darkgray;
    text-decoration: none;
    margin: 0 30px 0 5px;
    font-size: 1.2rem;

    &.active{
      color: #F06543;
    }
  }
}

a:hover{
      color: #F06543;
    }

.text-center {
  text-align: center;
}

</style>
