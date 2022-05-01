<template><!--------------------Template des produit affiche sur la page home---------------------------------->
    <div>
        <div class="card" @click="$emit('view-product', product)">
            <img :src="product.productPicture" alt="image article">

            <h3 class="nom_produit"> {{product.productName}} </h3>

            <h5 class="prix"> Prix : {{product.productPrice}} €</h5>

            <button class="view-product-button" @click="$emit('view-product', product)">View</button><!-----Appelle la description produit----->
        </div>
    </div>    
</template>

<script>
    export default {
        props: ['product']/*Recupere la valuer initial de produit*/

    }
</script>

<!---------------------------------------Style---------------------------------->

<style lang="scss">

    img{
        width:90%;
        height: 200px;
    }

    .card{
        width: 300px;
        height: 400px;
        margin: 50px;
        padding: 10px;
        border-radius: 5px;
        background-color: white;
        box-shadow: 1px 1px 5px gray;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        transition: 1s;
        cursor: pointer;

        h5.prix{
            color: gray;
        }

        p.nom_produit{
            font-size: .85rem;
        }

        button.view-product-button{
            padding: 8px 10px 8px 10px;
            border: 1px solid #f06543;
            color: #f06543;
            font-weight: bold;
            font-size: 1.15rem;
            border-radius: 5px;
            cursor: pointer;
        }
    }

    .card:hover{
        transform: scale(1.06);
        box-shadow: 5px 5px 10px gray;
    }

</style>
