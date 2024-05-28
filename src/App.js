import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<ShopCategory category="shopcategory"/>}/>
        <Route path='/vegetables' element={<ShopCategory category="vegetables"/>}/>
        <Route path='/fruits' element={<ShopCategory category="fruits"/>}/>
        <Route path='/product' element={<Product/>}>

          <Route path=':productId' element={<Product/>}/>
        </Route>
      
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
