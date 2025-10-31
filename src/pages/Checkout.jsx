import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/orders";

export default function Checkout() {
  const { items, totals, clear } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const id = await createOrder({
        buyer,
        items,
        total: totals.amount,
      });
      setOrderId(id);
      clear();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <main style={{ padding: 16 }}>
        <h2>Gracias por tu compra ✨</h2>
        <p>
          Tu número de orden es: <strong>{orderId}</strong>
        </p>
      </main>
    );
  }

  return (
    <main style={{ padding: 16 }}>
      <h2>Checkout</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 320 }}
      >
        <input
          name="name"
          value={buyer.name}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          name="email"
          value={buyer.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="phone"
          value={buyer.phone}
          onChange={handleChange}
          placeholder="Teléfono"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Confirmar compra"}
        </button>
      </form>
    </main>
  );
}
