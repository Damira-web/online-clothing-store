import dataClothes from '../../data/dataClothes';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from "../../redux/cartSlice";



const CartItem = ({cartItem}) => {

    const clothes = dataClothes.find(item => item.id === cartItem.clothId);
    const dispatch = useDispatch();

    console.log(CartItem)

    return(<div>
        <h4><img className='hanger' src='https://img.icons8.com/?size=512&id=J72WiuFWqdoz&format=png' alt='hanger'/> {clothes.name}</h4>
        <p>Quantity: {cartItem.quantity} unit(s)</p>
        <p>Price: $ {clothes.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
        <img className='delete' src='https://img.icons8.com/?size=512&id=102350&format=png' alt='delete'/>
        </span>
    </div>)

}

export default CartItem;