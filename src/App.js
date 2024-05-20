import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MenItems from './components/menItems';
import TvItems from './components/TvItems';
import Shop from './components/shop';
import Jewels from './components/jewels';
import WomenItems from './components/womenItems';
import CartPage from './components/cartPage';
import BillingForm from './components/BillingForm';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='menItems' element={<MenItems/>}/>
        <Route path='womenItems' element={<WomenItems/>}/>
        <Route path='jewels' element={<Jewels/>}/>
        <Route path='TvItems' element={<TvItems/>}/>
        <Route path='cart' element={<CartPage/>}/>
        <Route path='billing' element={<BillingForm/>}/>
        
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
