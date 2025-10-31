import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, removeItem, clear, totals } = useCart();

  if (!items.length) {
    return (
      <main style={{ padding: 16 }}>
        <h2>Carrito</h2>
        <p>Tu carrito está vacío.</p>
        <Link to="/">Volver al inicio</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: 16 }}>
      <h2>Carrito</h2>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          padding: 0,
          listStyle: "none",
        }}
      >
        {items.map((it) => (
          <li
            key={it.id + (it.size || "")}
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr auto",
              gap: 10,
              alignItems: "center",
              background: "#fff",
              borderRadius: 12,
              padding: 10,
              boxShadow: "0 5px 12px rgba(0,0,0,.05)",
            }}
          >
            <img
              src={it.img}
              alt={it.title}
              style={{
                width: 100,
                height: 80,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
            <div>
              <h3>{it.title}</h3>
              {it.size && (
                <p>
                  Talle: <strong>{it.size}</strong>
                </p>
              )}
              <p>Cant: {it.qty}</p>
              <p>
                Subtotal: ${" "}
                {(it.qty * it.price).toLocaleString("es-AR")}
              </p>
            </div>
            <button
              onClick={() => removeItem(it.id, it.size || null)}
              style={{
                border: "none",
                background: "transparent",
                color: "#f44566",
                cursor: "pointer",
              }}
            >
              Quitar
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: $ {totals.amount.toLocaleString("es-AR")}</h3>
      <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
        <button onClick={clear}>Vaciar</button>
        <Link
          to="/checkout"
          style={{
            textDecoration: "none",
            background: "#f44566",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: 8,
          }}
        >
          Finalizar compra
        </Link>
      </div>
    </main>
  );
}
