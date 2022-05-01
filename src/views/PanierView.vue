
<template>
    <div>

        <h1>Votre Panier</h1>

        <CartItemCard v-for="product in products" :key="product.productId" :product="product" />

        <CartTotal />

    </div>
</template>

<script>
import CartItemCard from '../components/cart/CartItemCard.vue'
import CartTotal from '../components/cart/CartTotal.vue'

    export default {
        components: {
            CartItemCard, CartTotal
        },
        computed: {
            products(){
                return this.$store.getters.cartItems
            }
        }
    }
</script>