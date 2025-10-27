import { useState } from "react";

export default function ItemCount({ stock = 1, initial = 1, onAdd }) {
  const [qty, setQty] = useState(initial);
  const canDec = qty > 1;
  const canInc = qty < stock;

  return (
    <div style={{ display: "grid", gap: 10, maxWidth: 220 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center" }}>
        <button onClick={() => canDec && setQty(qty - 1)} disabled={!canDec} style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #ddd", background: "#fff" }}>-</button>
        <span style={{ minWidth: 36, textAlign: "center", fontWeight: 700 }}>{qty}</span>
        <button onClick={() => canInc && setQty(qty + 1)} disabled={!canInc} style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid #ddd", background: "#fff" }}>+</button>
      </div>
      <button onClick={() => onAdd?.(qty)} style={{ padding: "10px 14px", borderRadius: 12, background: "#f44566", color: "#fff", fontWeight: 700, border: "none" }}>
        Agregar al carrito
      </button>
      <p style={{ margin: 0, textAlign: "center", color: "#777" }}>
        Stock disponible: <strong>{stock}</strong>
      </p>
    </div>
  );
}