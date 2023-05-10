export const storeUser = ({first_name, last_name, email, full_address, phone_number, location}) => {
    const user = {first_name, last_name, email, full_address, phone_number, location }
    localStorage.setItem("user", JSON.stringify(user))
}