import http from "./http";

export const createOrder = (formdata) => {
    return http.post('order', formdata)
    .then((data) => {
        return data
    })
}