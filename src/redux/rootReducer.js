import {combineReducers} from 'redux';
import {cartData} from './reducer';
import {productData} from './reducerProduct'

export default combineReducers({
    cartData,
    productData
})