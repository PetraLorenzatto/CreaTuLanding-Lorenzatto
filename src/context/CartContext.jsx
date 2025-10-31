import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cart:items")) || [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("cart:items", JSON.stringify(items));
        } catch { }
    }, [items]);

    // id + talle
    const lineKey = (p) => `${p.id}__${p.size || "NOSIZE"}`;

    const addItem = (product, qty = 1) => {
        setItems((prev) => {
            const found = prev.find((p) => lineKey(p) === lineKey(product));
            if (found) {
                return prev.map((p) =>
                    lineKey(p) === lineKey(product) ? { ...p, qty: p.qty + qty } : p
                );
            }
            return [
                ...prev,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    img: product.img,
                    size: product.size || null,
                    qty,
                },
            ];
        });
    };

    const removeItem = (id, size = null) => {
        setItems((prev) =>
            prev.filter(
                (p) => !(p.id === id && (p.size || null) === (size || null))
            )
        );
    };

    const clear = () => setItems([]);

    const totals = useMemo(
        () => ({
            quantity: items.reduce((a, it) => a + it.qty, 0),
            amount: items.reduce((a, it) => a + it.qty * it.price, 0),
        }),
        [items]
    );

    return (
        <CartContext.Provider
            value={{ items, addItem, removeItem, clear, totals }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
