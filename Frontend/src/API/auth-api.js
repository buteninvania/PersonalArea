import {coreAPI} from "./api"

export const authAPI = {
    login(login, password, resultCode, isAuth, id) {
      return coreAPI.put(`profile/1`, {login, password, resultCode, isAuth, id})
          .then(res => res.data[0])
    },
    logout() {
        debugger
        let resultCode = 0
        let login = ""
        let isAuth = false
        return coreAPI.put(`profile/1`, {resultCode, login, isAuth})
            .then(res => res.data)
    },
    checkAuth() {
        return coreAPI.get(`profile`).then(res => res.data[0])
    }
}