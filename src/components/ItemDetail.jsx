import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail({ product }) {
  const [addedQty, setAddedQty] = useState(0);

  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 24, alignItems: "start" }}>
      <img src={product.img} alt={product.title} style={{ width: "100%", borderRadius: 16, objectFit: "cover" }} />
      <div>
        <h1 style={{ marginTop: 0 }}>{product.title}</h1>
        <p style={{ color: "#777" }}>{product.category}</p>
        <p style={{ fontSize: 22, fontWeight: 800 }}>Precio: $ {product.price.toLocaleString("es-AR")}</p>
        <p style={{ marginTop: 8 }}>{product.description}</p>

        {addedQty === 0 ? (
          <ItemCount stock={product.stock} initial={1} onAdd={(qty) => setAddedQty(qty)} />
        ) : (
          <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
            <Link to="/cart" className="btn" style={{ padding: "10px 14px", borderRadius: 12, background: "#f44566", color: "#fff", fontWeight: 700, textDecoration: "none" }}>
              Ir al carrito ({addedQty})
            </Link>
            <Link to="/" className="btn ghost" style={{ padding: "10px 14px", borderRadius: 12, border: "1px solid #ddd", textDecoration: "none", color: "#333" }}>
              Seguir comprando
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}