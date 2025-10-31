import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartWidget() {
    const { totals } = useCart();
    return (
        <Link
            to="/cart"
            style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 6,
            }}
        >
            <span style={{ fontSize: 26, color: "#bd8c4a" }}>🛒</span>
            <span style={{ color: "#f44566", fontWeight: 700 }}>
                {totals.quantity}
            </span>
        </Link>
    );
}
