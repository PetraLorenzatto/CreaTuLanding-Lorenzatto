// src/pages/Checkout.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/orders";

export default function Checkout() {
  const { cart, totals, clearCart } = useCart();
  const [orderData, setOrderData] = useState(null); // 👈 guardamos orden creada

  const handleConfirm = async (buyerData) => {
    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    try {
      const total =
        totals.totalPrice ?? totals.total ?? cart.reduce((acc, item) => acc + item.price * item.qty, 0);

      // creamos orden en Firestore
      const orderId = await createOrder({
        buyer: buyerData,
        cart: cart,
        total,
      });

      // guardo lo que necesito para mostrar la pantalla linda
      setOrderData({
        id: orderId,
        buyer: buyerData,
        total,
        items: cart,
      });

      // limpio el carrito
      clearCart();
    } catch (err) {
      console.error("error al crear orden", err);
      alert(err.message || "No se pudo crear la orden. Probá de nuevo.");
    }
  };

  // 👇 si ya hay orderData, mostramos la pantalla de éxito
  if (orderData) {
    return (
      <div className="checkout-success">
        <div className="checkout-success__card">
          <span className="checkout-success__emoji">✨</span>
          <h1>¡Gracias por tu compra!</h1>
          <p className="checkout-success__text">
            Tu pedido se registró correctamente.
          </p>

          <div className="checkout-success__box">
            <p><strong>Número de orden:</strong> {orderData.id}</p>
            <p>
              <strong>Total:</strong> $
              {orderData.total.toLocaleString("es-AR")}
            </p>
            <p>
              <strong>Te va a llegar a:</strong> {orderData.buyer.email}
            </p>
          </div>

          <h3 className="checkout-success__subtitle">Detalle</h3>
          <ul className="checkout-success__items">
            {orderData.items.map((it) => (
              <li key={it.id} className="checkout-success__item">
                <span>{it.title}</span>
                <span>
                  {it.size ? `Talle ${it.size} · ` : ""}x{it.qty}
                </span>
              </li>
            ))}
          </ul>

          <Link to="/" className="checkout-success__btn">
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  // 👇 si todavía no compró, mostramos el form
  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h1>Checkout</h1>
        <p className="checkout-total">
          Total a pagar: $
          {(totals.totalPrice ?? totals.total ?? 0).toLocaleString("es-AR")}
        </p>
        <CheckoutForm onConfirm={handleConfirm} />
      </div>
    </div>
  );
}
