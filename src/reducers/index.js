import { combineReducers } from 'redux'
import items from "./item";
import categories from "./category";
import cart from "./cart";


export default combineReducers({
 items,
 categories,
 cart,
})
