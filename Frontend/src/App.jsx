import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  

  return (  <>
 <Navbar/>
   <Routes>
    <Route path="/" element ={<Home/>} />
    <Route path="/products/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
   </Routes>
   <Footer />
    </>
  )
}

export default App
