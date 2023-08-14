import { useSelector } from "react-redux";
import dataClothes from "../../data/dataClothes";
import { getSelectedCategory } from "../../redux/clothesSlice";
import Cloth from './Cloth';

const Clothes = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return(<div>
        {dataClothes
        .filter(cloth => {
            if(selectedCategory === 'ALL') return true;
            return selectedCategory === cloth.category
        })
        .map(cloth => <Cloth cloth={cloth}/>)}
    </div>)
}

export default Clothes;