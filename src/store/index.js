import { createStore } from 'vuex'

/*---------------------------Fonction de gestion du magasin--------------------------*/

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))/*Mise en place du LocalStorage sur le panier*/
}

export default createStore({
  state: {
    cart: []/*A la creation on declare un tableau null pour le panier*/
  },
  getters: {
    productQuantity: state => product => {
      const item = state.cart.find(i => i.productId === product.productId)/*On stocke le produit selectionne grace a son id*/

      if(item) return item.quantity/*Si il y a bien un produit on retourne sa quantite sinon on retourne la value null*/
      else return null
    },
    cartItems: state => {
      return state.cart/*On controle le statut du panier*/
    },
    cartTotal: state => {
      return state.cart.reduce((a, b) => a + (b.productPrice * b.quantity), 0)/*Permet de claculer le prix total du panier grace au prix des produit selectionne ainsi que leur quantite */
    }
  },
  mutations: {/*----------------------Ajout et suppression des produit du panier-------------------------*/
    addToCart(state, product){
      let item = state.cart.find(i => i.productId === product.productId)/*On stocke l'Id du produit dans une variable*/

      if(item){
        item.quantity++/*Si item il y a alors on augmente la quantite de 1*/
        
      } else {
        state.cart.push({...product, quantity: 1})/*On ajoute le produit au panier*/
      }

      updateLocalStorage(state.cart)/*MAJ du LocalStorage*/
    },
    removeToCart(state, product){
      let item = state.cart.find(i => i.productId === product.productId)

      if(item){
        if(item.quantity > 1){/*Meme fonctionnement que la fontion precedente sauf que si la valeur item et superieur a 1 dans ce cas on soustrait*/
          item.quantity--
        } else {
          state.cart = state.cart.filter(i => i.productId !== product.productId)
        }
      }
      updateLocalStorage(state.cart)/*MAJ du LocalStorage*/
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      if(cart){
        state.cart = JSON.parse(cart)/*Fonction du LocalStorage on sauvegarde les elements du panier sous forme de JSON*/
      }
    },
    removeFromCart(state, product) {
      let index = state.cart.indexOf(product)/*On sauvegarde l'index du produit en cours dans une variable*/
      state.cart.splice(index, 1)/*Et on retire celui celui ci du tableau de depart*/
      updateLocalStorage(state.cart)
    }
  },
  actions: {
  },
  modules: {
  }
})
