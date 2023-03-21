import { db } from "@/firebase/firebase"

export const getProducts = async() => {
    let products = db.collection("products")
    let data = await products.get()
   return data
}