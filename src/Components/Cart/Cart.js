import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(<div>
        <p className="myBag"> MY BAG </p>
        <h3>TOTAL: $ {totalPrice}</h3>
        {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
    </div>)
}

export default Cart;