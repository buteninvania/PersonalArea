import {authAPI} from '../API/auth-api'
import {stopSubmit} from 'redux-form'
import {successCheck} from '../Utils/Validators/validators'

const initialState = {
    login: "",
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FrontEnd/practice/SET-USER-DATA":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

const actions = {
    setAuthUserData: (login, isAuth) => ({
        type:"FrontEnd/practice/SET-USER-DATA",
        payload: {login, isAuth}
    })
}

export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.checkAuth()
    if (data.resultCode === 1) {
        const {login} = data
        dispatch(actions.setAuthUserData(login, true))
    } else if (data.resultCode === undefined) {
        dispatch(actions.setAuthUserData("", false))
    }
}
export const login = (login, password) => async (dispatch) => {
    if(successCheck(login, password) == null) {
        let resultCode = 1
        let isAuth = true
        let id = 1
        await authAPI.login(login, password, resultCode, isAuth, id)
        dispatch(getAuthUserData())
    } else {
        const message = successCheck(login, password)
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = () => async (dispatch) => {
    await authAPI.logout()
    dispatch(actions.setAuthUserData("", false))
}

export default authReducer