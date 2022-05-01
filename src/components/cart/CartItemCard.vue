<template><!---------------------------Template des cartes des produit dans le panier----------------------->
    <div class="cart-item-card">
        <div class="header">
            <h3> {{product.productName}} </h3>
            <h4>Dans le Panier : {{product.quantity}} </h4>
            <h4> Prix Total : {{ item_cost }} €</h4>
            <span class="float-right" @click="removeItem()">X</span><!------Appelle de la fonction removeItem------->
        </div>
    </div>
    <hr>    
</template>

<script>
    export default {
        props: ['product'],/*On recupere la valeur initial de product*/
        computed: {
            item_cost() {
                return this.product.productPrice * this.product.quantity/*On recupere le prix total des produits avec la fonction item_cost calcule dans le magasin*/
            }
        },
        methods: {
            removeItem(){
                this.$store.commit('removeFromCart', this.product)/*On supprime le produit grace a la fonction removeItem declare dans le magasin*/
            }
        }
    }
</script>

<!-------------------------------Style--------------------------------------->

<style lang="scss">

    .cart-item-card {
        width: 50%;
        margin: 5%;
        padding: 10px;
        text-align: left;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .header{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        span{
            cursor: pointer;
            color: #f06543;
            margin-top: 20px;
            margin-left: 20px;
        }
    }

    @media screen and (max-width: 800px) {
        .cart-item-card {
            font-size: 0.7rem
        }
    }

    @media screen and (max-width: 550px) {
        .cart-item-card {
            width: 90%;
        }
    }

</style>