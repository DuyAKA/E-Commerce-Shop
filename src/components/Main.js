import {addToCart,removeFromCart, emptyCart} from '../redux/action';
import {useDispatch} from 'react-redux';
import {productList} from '../redux/actionProduct'
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
    let data = useSelector((state) => state.productData);
    console.warn("data in main component", data);


useEffect(() => {
  dispatch(productList())}, [])
  return (
    <div>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          data.map((item) => <div className='product-item'>
            <img src={item.photo} alt=''/>
            <div className='item-name'> Name: {item.name}</div>
            <div> Color: {item.color}</div>
            <div> Price: {item.price}</div>
            <div> Category: {item.category}</div>
            <div> Brand: {item.brand}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove From Cart</button>
            </div>
            </div>)
        }
      </div>
    </div>

  );
}

export default Main;
