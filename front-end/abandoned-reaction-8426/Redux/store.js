import {legacy_createStore, applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {loginReducer} from './Login/login.reducer'
import {registerReducer} from './Register/register.reducer'

const rootReducer=combineReducers({
    register:registerReducer,
    login:loginReducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

