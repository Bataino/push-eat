import store from "../store"

export const addorUpdateCart = ({name, quantity, price, id}) => {
    let newArray = store.state.cart
    if(quantity == 0){
        delete newArray[id]
    }
    else
        newArray[id] = {name, quantity, id, price }

    store.commit('update',{
        name:'cart',
        value:newArray
    })
    localStorage.setItem("cart", JSON.stringify(newArray))
}

export const deletefromCart = (id) => {
    let newArray = store.state.cart
    delete newArray[id]

    store.commit('update',{
        name:'cart',
        value:newArray
    })
    localStorage.setItem("cart", JSON.stringify(newArray))
}