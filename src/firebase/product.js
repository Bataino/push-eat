import app, { db, storage } from "./firebase"
import store from "../store"
import firebase from 'firebase/compat/app';

export const getProducts = async () => {
    let products = db.collection("products")
    if (process.env.NODE_ENV === "production") {
        products = db.collection("products_live")
    }

    let data = await products.get()
    console.log(data.docs[0])
    let newProducts = data.docs.map((el) => {
        let dat = el.data()

        return { id: el.id, ...dat }
    })

    store.commit('update', {
        name: "products",
        value: newProducts
    })
    return newProducts
}

export const uploadImage = (file) => {
    let uri = ''
    const storageRef = storage.ref(`${file.name}`).put(file);

    // console.log("Image", img)
    return storageRef
}