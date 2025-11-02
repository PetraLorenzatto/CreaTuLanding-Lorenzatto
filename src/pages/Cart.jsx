// src/pages/Cart.jsx
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeItem, clearCart, totals } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  // carrito vacío
  if (!cart || cart.length === 0) {
    return (
      <div className="cart-page" style={{ padding: "40px 80px" }}>
        <h1>Carrito</h1>
        <p>Tu carrito está vacío.</p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            background: "#f44566",
            color: "#fff",
            padding: "10px 16px",
            borderRadius: "14px",
            textDecoration: "none",
            marginTop: 10,
          }}
        >
          Volver a la tienda
        </Link>
      </div>
    );
    }

  return (
    <div className="cart-page" style={{ padding: "40px 80px" }}>
      <h1 style={{ marginBottom: 6 }}>Carrito</h1>
      <p>
        Tenés {cart.length} producto{cart.length > 1 ? "s" : ""} en el carrito.
      </p>

      <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 18 }}>
        {cart.map((item) => (
          <div
            key={`${item.id}-${item.size || "nosize"}`}
            style={{
              background: "#fff",
              borderRadius: 22,
              boxShadow: "0 14px 25px rgba(0,0,0,.03)",
              padding: "16px 18px",
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ width: 90, height: 90, objectFit: "cover", borderRadius: 16 }}
            />

            <div style={{ flex: 1 }}>
              <h3 style={{ marginBottom: 4 }}>{item.title}</h3>

              {/* 👇👇 MOSTRAR TALLE SI VIENE */}
              {item.size && (
                <p style={{ margin: 0, color: "#f44566", fontWeight: 600 }}>
                  Talle: <strong>{item.size}</strong>
                </p>
              )}

              <p style={{ margin: 0 }}>Cantidad: {item.qty}</p>
              <p style={{ margin: 0 }}>
                Subtotal: ${(item.price * item.qty).toLocaleString("es-AR")}
              </p>
            </div>

            <button
              onClick={() => removeItem(item.id, item.size)}
              style={{
                background: "transparent",
                border: "1px solid #f44566",
                color: "#f44566",
                borderRadius: 14,
                padding: "6px 14px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Quitar
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 28,
          display: "flex",
          alignItems: "center",
          gap: 18,
        }}
      >
        <h2 style={{ margin: 0 }}>
          Total: ${Number(totals.totalPrice ?? totals.total ?? 0).toLocaleString("es-AR")}
        </h2>

        <button
          onClick={handleCheckout}
          style={{
            background: "#f44566",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: 14,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Finalizar compra
        </button>

        <button
          onClick={clearCart}
          style={{
            background: "#fff",
            color: "#f44566",
            border: "1px solid rgba(244,69,102,.3)",
            padding: "10px 20px",
            borderRadius: 14,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}
