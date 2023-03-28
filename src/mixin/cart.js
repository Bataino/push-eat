import PushButton from '@/components/PushButton.vue'
import InputNumber from "primevue/inputnumber"
import { addorUpdateCart, deletefromCart, replaceCart } from "@/services/cart"

export default {
    components: {
        PushButton,
        InputNumber,
    },
    data() {
        return {
        }
    },
    methods: {
        addOrUpdateCart(food) {
            addorUpdateCart(food)
        },
        deletefromCart(id) {
            deletefromCart(id)
        },
        cartQuantity(food){
            console.log(this.$store)
            if (this.$store.state.cart[food.id])
                return this.$store.state.cart[food.id].quantity
            return 0
        },
        replaceCart(cart){
            replaceCart(cart)
        }
    },
}