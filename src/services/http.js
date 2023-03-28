import axios from "axios"
// import Widget from "@/functions/widget"
import { createToaster } from "@meforma/vue-toaster"

const toast = createToaster({
    position: "top",
    maxToasts: 1,
    opacity: .8
});

const url = "https://api.justpusheat.com/api/v1/"
const http = axios.create({
    baseURL: url,
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

http.interceptors.request.use((request) => {
    return request
},
    error => {
        console.error("Request Unuccessfull", error);
    }
);

http.interceptors.response.use((response) => {
    return response;
},
    (error => {
        try {
            Widget.dismiss()
        }
        catch (e) { e.message }

        if (error.response) {
        }
        else if (error.request) {
            // toast.show("No response recieved");
        }
        else {
        }
        return error;
    })

)

export default http;
