import { combineReducers } from "redux"
import authReducer from "./auth/authReducer"
import toggleReducer from "./toggle/toggleReducer"
import toastsReducer from "./toasts/toastsReducer"
import configsReducer from "./configs/configsReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  toggle: toggleReducer,
  toasts: toastsReducer,
  configs: configsReducer
})

export default rootReducer
