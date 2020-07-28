export const  requiredField = (value) => {
    if (value) return undefined;
    return "Обязательное поле";
}
export const successCheck = (login, password) => {
    if(login !== "butenin" || password !== "12qwaszx") {
        return "Введенный данные не верны"
    } else {
        return null
    }
}
