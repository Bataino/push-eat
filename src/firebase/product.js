import { db } from "@/firebase/firebase"

export const getProducts = () => {
    db.collection("products")
    .get()
    .then((data) => {
        console.log(data)
    })
}