import { db } from "@/firebase/firebase"
import store from "../store"

export const getProducts = async () => {
    let products = db.collection("products_live")
    let data = await products.get()

    console.log(data.docs[0])
    let newProducts = data.docs.map((el) => {
        let dat = el.data()

        return { id:el.id , ...dat}
    })

    store.commit('update', {
        name:"products",
        value: newProducts
    })
   return newProducts
}