import { combineReducers } from 'redux'
import plpReducer from 'pages/ProductListing/state/plpState/plpReducer'
import cartOutlineReducer from 'pages/ProductListing/state/cartOutlineState/cartOutlineReducer'
import commonReducer from './globalState/commonReducer'

export default combineReducers({
  plpReducer,
  cartOutlineReducer,
  commonReducer,
})
