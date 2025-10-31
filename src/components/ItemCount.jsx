import { useState } from "react";

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [qty, setQty] = useState(initial);

  const inc = () => qty < stock && setQty(qty + 1);
  const dec = () => qty > 1 && setQty(qty - 1);

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button onClick={dec}>-</button>
        <span>{qty}</span>
        <button onClick={inc}>+</button>
      </div>
      <button
        style={{
          marginTop: 10,
          background: "#f44566",
          color: "#fff",
          border: "none",
          padding: "8px 14px",
          borderRadius: 10,
          cursor: "pointer",
        }}
        onClick={() => onAdd(qty)}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
