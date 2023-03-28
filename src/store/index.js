// @/store.js
import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [
            // { id: 23, name: "Vegan Spage1", price: 6000, img: "" },
            // { id: 24, name: "Vegan Spage2", price: 6000, img: "" },
            // { id: 26, name: "Vegan Spage3", price: 6000, img: "" },
            // { id: 27, name: "Vegan Spage4", price: 6000, img: "" },
            // { id: 28, name: "Vegan Spage5", price: 6000, img: "" },
            // { id: 29, name: "Vegan Spage6", price: 6000, img: "" },
            // { id: 31, name: "Vegan Spage7", price: 6000, img: "" },
        ],
        product: {},
        cart: {}
    },
    mutations: {
        update(state, { value, name }) {
            state[name] = value
        },
        updateCart(state, cart) {
            state.cart = cart
            localStorage.setItem("cart", JSON.stringify(cart))
        },
        updateAttr(state, { parent, name, value }) {
            state[parent][name] = value
        },
        updateLocalObject(state, { name, value }) {
            state[name] = value
            localStorage.setItem(name, JSON.stringify(value))
        },
        delete(state, object) {
            state[object.object][object.index] = null
        }
    },
    actions: {

    },
    getters: {
        cartSum(state) {
            let sum = 0
            const cart = state.cart
            Object.keys(cart).forEach((e) => {
                sum += (cart[e].quantity * cart[e].price)
            })

            return sum
        }
    }
})