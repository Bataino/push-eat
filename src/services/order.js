import http from "./http";

export const createOrder = (formdata) => {
    formdata.full_address += ", " + formdata.location
    delete formdata.location
    return http.post('order', formdata)
    .then((data) => {
        return data
    })
}