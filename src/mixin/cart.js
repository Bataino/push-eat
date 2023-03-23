import PushButton from '@/components/PushButton.vue'
import InputNumber from "primevue/inputnumber"
import { addorUpdateCart, deletefromCart } from "@/services/cart"

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
            addorUpdateCart()
        },
        deletefromCart(id) {
            deletefromCart(id)
        },
        cartQuantity(food){
            console.log(this.$store)
            if (this.$store.state.cart[food.id])
                return this.$store.state.cart[food.id].quantity
            return 0
        }
    },
}