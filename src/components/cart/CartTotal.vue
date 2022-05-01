<template><!---------------------Tremplate de la carte valeur total des produits---------------------------->
    <div class="cart-item-card" id="total">
        <h3>Panier Total : {{ cart_total }} €</h3>

        <button class="view-product-button">Payer par CB</button>
    </div>    
</template>

<script> 
    export default {
        computed: {
            cart_total() {
                return this.$store.getters.cartTotal/*Appelle de la fonction cart_total du magasin qui calcule le prix total*/
            }
        }
    }

</script>

<!------------------------------------Style------------------------------------->

<style>
    #total {
        position: fixed;
        top: -5%;
        right: -40%;
        background-color: #dadada;
        height: 73%;
        padding: 100px;
    }

    .view-product-button{
        width: 150px;
        padding: 10px;
        border-radius: 5px;
        margin: 0 5px 50px 5px;
        cursor: pointer;
        border: 1px solid #F06543;
        color: #F06543;
        background-color: transparent;
    }

    @media screen and (max-width:800px) {
        #total {
            width: 50px;
            right: -13%;
            height: 77%;
        }

        .view-product-button {
            width: 60px;
            margin: 0;
        }
    }

    @media screen and (max-width:550px) {
        #total {
            position: unset;
            width: 100%;
        }

        .view-product-button {
            width: 150px;
            margin: 0;
        }
    }
</style>