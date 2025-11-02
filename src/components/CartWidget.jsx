// src/components/CartWidget.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartWidget() {
    const { totals } = useCart();          // 👈 tomamos los totales del contexto
    const count = totals?.totalItems || 0; // 👈 defensa por las dudas

    return (
        <Link to="/cart" className="cart-widget">
            <span style={{ fontSize: "1.5rem" }}>🛒</span>
            <span style={{ color: "#f44566", fontWeight: 700 }}>
                {count}
            </span>
        </Link>
    );
}
