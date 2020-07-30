export const  requiredField = (value) => {
    if (value) return undefined;
    return "Required field";
}
export const successCheck = (login, password) => {
    if(login !== "butenin" || password !== "12qwaszx") {
        return "Data is not correct"
    } else {
        return null
    }
}
