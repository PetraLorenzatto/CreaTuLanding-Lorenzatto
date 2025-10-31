
import { useState } from "react";

export default function CheckoutForm({ onConfirm, loading }) {
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!buyer.name || !buyer.phone || !buyer.email) return;
    onConfirm(buyer);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 420 }}>
      <input type="text" placeholder="Nombre y apellido" value={buyer.name} onChange={(e) => setBuyer({ ...buyer, name: e.target.value })} required style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }} />
      <input type="tel" placeholder="Teléfono" value={buyer.phone} onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })} required style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }} />
      <input type="email" placeholder="Email" value={buyer.email} onChange={(e) => setBuyer({ ...buyer, email: e.target.value })} required style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd" }} />
      <button type="submit" disabled={loading} style={{ padding: "10px 14px", borderRadius: 12, background: "#f44566", color: "#fff", fontWeight: 700, border: "none" }}>
        {loading ? "Generando orden..." : "Confirmar compra"}
      </button>
    </form>
  );
}
