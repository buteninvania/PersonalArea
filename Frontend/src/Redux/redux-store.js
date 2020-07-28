import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk"
import contactsReducer from "./contacts-reducer";
import authReducer from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    contactsPage: contactsReducer,
    form: formReducer,
    appPage: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store