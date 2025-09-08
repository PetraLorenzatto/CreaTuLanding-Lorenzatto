import CartWidget from "./CartWidget";
import logo from '../assets/logo-brillo.png';

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <div className="logo"><img src={logo} alt="" /></div>
                    <ul>
                        <li>Botas caña alta</li>
                        <li>Botas caña baja</li>
                        <li>Accesorios</li>
                        <li><CartWidget /></li>
                    </ul>

                </nav>
            </div>
        </header>
    );
}