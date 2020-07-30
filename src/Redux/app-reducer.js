import {getAuthUserData} from './auth-reducer'

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FrontEnd/practice/INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const actions = {
    initializedSuccess: () => ({type: "FrontEnd/practice/INITIALIZED_SUCCESS"})
}

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(actions.initializedSuccess())
    })
}

export default appReducer