// src/context/CartContext.jsx
import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (product, qty) => {
    const sizeKey = product.size || null;

    setCart((prev) => {
      // buscamos MISMO id + MISMO talle
      const idx = prev.findIndex(
        (p) => String(p.id) === String(product.id) && p.size === sizeKey
      );

      if (idx !== -1) {
        const copy = structuredClone(prev);
        copy[idx].qty = copy[idx].qty + qty;
        return copy;
      }

      // si no está, lo agregamos con size
      return [
        ...prev,
        {
          ...product,
          size: sizeKey,
          qty,
        },
      ];
    });
  };

  const removeItem = (id, size = null) => {
    setCart((prev) =>
      prev.filter(
        (p) => !(String(p.id) === String(id) && (p.size || null) === (size || null))
      )
    );
  };

  const clearCart = () => setCart([]);

  const totals = useMemo(() => {
    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.qty * Number(item.price),
      0
    );
    return { totalQty, totalPrice };
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totals }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
