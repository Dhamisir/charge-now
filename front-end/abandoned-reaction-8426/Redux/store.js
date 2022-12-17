import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/login.reducer";
import { registerReducer } from "./Register/register.reducer";
import { serviceReducer } from "./Services/services.reducer";

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  service: serviceReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
