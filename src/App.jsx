import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { Routes, Route, Navigate } from 'react-router-dom'

export default function App() {
  return (
    <>
      <div className="barra">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a Brillo Salvaje!" />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}
