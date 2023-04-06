export const storeUser = ({first_name, last_name, email, full_address, location}) => {
    const user = {first_name, last_name, email, full_address, location }
    localStorage.setItem("user", JSON.stringify(user))
}