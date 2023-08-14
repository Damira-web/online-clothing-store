import './App.css';
import Cart from './Components/Cart/Cart';
import Clothes from './Components/ClothesComponents/Clothes';
import AllCAtegories from './Components/Filter/AllCategories';

function App() {
  return (
    <div className="App">
      <div className='block'>
        <AllCAtegories />
        <Cart />
      </div>

      <div className='block1'>
      <Clothes />
      </div>
    </div>
  );
}

export default App;