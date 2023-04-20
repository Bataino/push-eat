export const storeUser = ({first_name, last_name, email, full_address, phone_number}) => {
    const user = {first_name, last_name, email, full_address, phone_number }
    localStorage.setItem("user", JSON.stringify(user))
}