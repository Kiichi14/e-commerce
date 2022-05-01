<template><!-----------------Template du corps de la carte produit------------------------------>
    <div class="description-background" :class="{show: active}" >    
        
    <div class="description" :class="{show: active}">
        <div class="description-close" @click="$emit('closeDescription')"><!--Appelle fonction CloseDescriptions-->
            X
        </div> 

        <div v-if="product" class="product-details"><!---Si le produit est bien present alors on creer une div avec ses info recuperer dans le JSON -->
            <img :src="product.productPicture" alt="image article">
            <h3 class="text-center"> {{product.productName}} </h3>
            <h3 class="text-center"> {{product.productPrice}} € </h3>

            <div class="panier_total" v-if="product_total">
                <h3>Dans le panier</h3>
                <h3 id="product_total"> {{product_total}} </h3>
            </div>  

            <div class="button-container">
                <button class="remove" @click="removeToCart()">Remove</button><!--Appelle fonction removeToCart-->
                <button class="add" @click="addToCart()">Add</button><!--Appelle fonction addToCart-->
            </div>    
        </div>       
    </div> 
    </div>       
</template>

<script>
    export default{
        props:['product', 'active'],/*On recupere les valeurs initial de product et active*/
        methods: {/*Appelle des fonctions permettant de ouvrir ou fermer la description produit*/
            addToCart() {
                this.$store.commit('addToCart', this.product)
            },
            removeToCart(){
                this.$store.commit('removeToCart', this.product)
            }
        
        },
        computed: {
            product_total(){
                return this.$store.getters.productQuantity(this.product)/*utilise le productQuantity utilise dans le magasin afin de determiner le nombre de produit total*/
            }
        }
    }
</script>

<!----------------------------------------------Style--------------------------->

<style lang="scss">
    .description-background {
        width: 100%;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgb(124, 124, 124, 0.55);
        z-index: 100;
        display: none;
        transition: display 1s;

        &.show {
            display: block;

        }
    }

    .description{
        width: 95vw;
        height: 100vh;
        background-color: white;
        position: fixed;
        top: 0;
        left: -105vw;
        padding: 70px 15px 15px 15px;
        transition: left 1s;
        z-index: 101;
        overflow-y: scroll;

        &.show{
            left: 0;
        }
    }

    .description-close {
        font-size: 1.5rem;
        padding: 5px;
        border-radius: 5px;
        right: 10px;
        border: 2px solid #F06543;
        color: #F06543;
        width: 15px;
        float: right;
        cursor: pointer;

        &.hover{
            background-color: lightgray;
        }
    }

    .product-details {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .button-container {
            
            display: flex;
            justify-content: center;

            button{
                width: 150px;
                padding: 10px;
                border-radius: 5px;
                margin: 0 5px 50px 5px;
                cursor: pointer;
            }

            .add{
                border: 1px solid #F06543;
                color: #F06543;
            }

            .remove{
                border: none;
            }
        }
    }

    #product_total {
        color: #F06543;
    }

    @media (min-width: 500px){
        .description {
            width: 450px;
        }
    }

</style>