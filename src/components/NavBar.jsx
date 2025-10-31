import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo-brillo.png"; // tu logo

export default function NavBar() {
  return (
    <header className="barra">
      <nav>
        {/* Logo enlazado al inicio */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Brillo Salvaje" />
          </Link>
        </div>

        {/* Menú de categorías */}
        <ul>
          <li>
            <NavLink to="/category/botas">Botas</NavLink>
          </li>
          <li>
            <NavLink to="/category/sombreros">Sombreros</NavLink>
          </li>
          <li>
            <NavLink to="/category/accesorios">Accesorios</NavLink>
          </li>
        </ul>

        {/* Carrito */}
        <CartWidget />
      </nav>
    </header>
  );
}
