// src/components/CheckoutForm.jsx
import { useState } from "react";

export default function CheckoutForm({ onConfirm }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email1 || !email2) {
      alert("Completá todos los campos");
      return;
    }
    if (email1 !== email2) {
      alert("Los emails no coinciden");
      return;
    }
    onConfirm({
      name,
      phone,
      email: email1,
    });
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="checkout-form__group">
        <label>Nombre y apellido</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej: Venecia Lorenzatto"
        />
      </div>

      <div className="checkout-form__group">
        <label>Teléfono</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Ej: 3455 555555"
        />
      </div>

      <div className="checkout-form__group">
        <label>Email</label>
        <input
          type="email"
          value={email1}
          onChange={(e) => setEmail1(e.target.value)}
          placeholder="tu@mail.com"
        />
      </div>

      <div className="checkout-form__group">
        <label>Confirmar email</label>
        <input
          type="email"
          value={email2}
          onChange={(e) => setEmail2(e.target.value)}
          placeholder="Repetí tu mail"
        />
      </div>

      <button type="submit" className="checkout-form__btn">
        Confirmar compra
      </button>
    </form>
  );
}
