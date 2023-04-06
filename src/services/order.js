import http from "./http";

var no_notify = true
if (process.env.NODE_ENV === "production") {
     no_notify = false
}
export const createOrder = (formdata) => {
    formdata.full_address += ", " + formdata.location
    delete formdata.location
    return http.post('order', {
        ...formdata,
        no_notify
    })
    .then((data) => {
        return data
    })
}