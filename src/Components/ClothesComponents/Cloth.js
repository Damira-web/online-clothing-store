import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Cloth = ({cloth}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    return(<div>
        <img src={`./${cloth.img}.png`} alt="cloth"/>
        <div className="cloth">
            <h2>{cloth.name}</h2>
            <p>$ {cloth.price}</p>
            < ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="bagButton" onClick={() => {dispatch(addItemToCart({cloth, quantity}))}}>ADD TO BAG</button>
        </div>
    </div>)
}

export default Cloth;