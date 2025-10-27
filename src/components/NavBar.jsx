import { NavLink, Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import logo from '../assets/logo-brillo.png'

export default function NavBar() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/"><img src={logo} alt="Brillo Salvaje" /></Link>
        </div>
        <ul>
          <li><NavLink to="/category/Botas">Botas</NavLink></li>
          <li><NavLink to="/category/Sombreros">Sombreros</NavLink></li>
          <li><NavLink to="/category/Accesorios">Accesorios</NavLink></li>
          <li><NavLink to="/cart"><CartWidget /></NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
