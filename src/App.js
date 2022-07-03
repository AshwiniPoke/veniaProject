import './App.css';
import './components/SASS/main.css';
import Navbar from './components/Layout/Navbar/navbar';
import Footer from './components/Layout/Footer/Footer';
import Main from './components/Pages/MainPage/main';
import {Route, Routes} from 'react-router-dom';
import ProductDetail from './components/Products/Product-detail/Product-detail';
import ShoppingBag from './components/Products/Shopping-bag/shoppingCart';

function App() {
  return (
    <div className="App aem-Grid aem-Grid--12">
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Main />}/>
      <Route exact path="/products/:id" element={<ProductDetail />}/>
      <Route exact path='/cart' element={<ShoppingBag />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;

