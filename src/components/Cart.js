import { useSelector} from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    const amount = cartData.length && cartData.map(item => item.price).reduce((previous, next) => previous + next)
    const discount = 20;
    const tax = 0;
    return (<div>
        <Link to='/'>
            Go Home Bro!!! 
        </Link>
        <h1 className="cart-page-context">Cart Page</h1>
        <div className="cart-page-container">
            <table>
                <tr className="cart-page-container-prop">
                <td>Name</td>
                <td>Color</td>
                <td>Price</td>
                <td>Brand</td>
                <td>Category</td>
                </tr>
                {
                    cartData.map((item) => <tr key={item.key}>
                    <td>{item.name}</td>
                    <td>{item.color}</td>
                    <td>{item.price}</td>
                    <td>{item.brand}</td>
                    <td>{item.category}</td>
                    </tr>)
                }
            </table>
            <div className="price-details">
                <div className="adjust-price">
                    <span>Amount</span>
                    <span>{amount}</span>
                </div>
                <div className="adjust-price">
                    <span>Discount</span>
                    <span>{discount}%</span>
                </div>
                <div className="adjust-price">
                    <span>Tax</span>
                    <span>{tax}</span>
                </div>
                <div className="adjust-price">
                    <span>Total</span>
                    <span>{amount - (amount*discount/100)}</span>
                </div>
            </div>
        </div>
    </div>)
}

export default Cart;