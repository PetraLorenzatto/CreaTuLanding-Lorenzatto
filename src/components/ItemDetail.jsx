// src/components/ItemDetail.jsx
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

export default function ItemDetail({ product }) {
  const { addItem } = useCart();
  const [addedQty, setAddedQty] = useState(0);
  const [size, setSize] = useState(null);

  if (!product) return <p>Producto no encontrado.</p>;

  // ============================
  // 1) NORMALIZAR TALLE VENGA COMO VENGA
  // ============================
  const raw = product.sizes ?? product.size ?? [];
  let sizes = [];

  if (Array.isArray(raw)) {
    // caso raro: ["[\"35\",\"36\"]"]
    if (raw.length === 1 && typeof raw[0] === "string") {
      try {
        const parsed = JSON.parse(raw[0]);
        if (Array.isArray(parsed)) {
          sizes = parsed;
        } else {
          sizes = [];
        }
      } catch {
        sizes = raw[0]
          .split(",")
          .map((x) => x.replace(/[\[\]"' ]/g, ""))
          .filter(Boolean);
      }
    } else {
      sizes = raw;
    }
  } else if (typeof raw === "string") {
    // venía como string puro '["35","36"]' o '35,36,37'
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        sizes = parsed;
      } else {
        sizes = raw
          .split(",")
          .map((x) => x.replace(/[\[\]"' ]/g, ""))
          .filter(Boolean);
      }
    } catch {
      sizes = raw
        .split(",")
        .map((x) => x.replace(/[\[\]"' ]/g, ""))
        .filter(Boolean);
    }
  }

  // ============================
  // 2) STOCK
  // ============================
  const stockTotal = Number(product.stock) || 0;
  const stockBySize = product.stockBySize || {};

  const currentStock = useMemo(() => {
    if (size && stockBySize[size] != null) {
      return Number(stockBySize[size]) || 0;
    }
    return stockTotal;
  }, [size, stockBySize, stockTotal]);

  // ============================
  // 3) AGREGAR
  // ============================
  const handleAdd = (qty) => {
    if (sizes.length && !size) {
      alert("Elegí un talle");
      return;
    }
    addItem({ ...product, size }, qty);
    setAddedQty(qty);
  };

  return (
    <div className="item-detail-layout">
      <img src={product.img} alt={product.title} className="item-detail-img" />

      <div className="item-detail-info">
        <h1>{product.title}</h1>
        <p className="item-detail-category">{product.category}</p>
        <p className="item-detail-price">
          Precio: $ {Number(product.price).toLocaleString("es-AR")}
        </p>
        <p className="item-detail-desc">{product.description}</p>

        {/* Talles */}
        {sizes.length > 0 && (
          <div className="item-detail-size-block">
            <p className="item-detail-size-title">Talle</p>
            <div className="talle-buttons">
              {sizes.map((t) => {
                const sinStock =
                  stockBySize[t] != null && Number(stockBySize[t]) === 0;
                const active = size === t;
                return (
                  <button
                    key={t}
                    onClick={() => !sinStock && setSize(t)}
                    disabled={sinStock}
                    className={`talle-btn ${active ? "active" : ""} ${
                      sinStock ? "disabled" : ""
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
            <small className="item-detail-size-hint">
              {size
                ? `Stock talle ${size}: ${currentStock}`
                : "Elegí un talle para ver el stock"}
            </small>
          </div>
        )}

        {/* Contador / botones */}
        {addedQty === 0 ? (
          <ItemCount stock={currentStock} initial={1} onAdd={handleAdd} />
        ) : (
          <div className="item-detail-actions">
            <Link to="/cart" className="btn-primary">
              Ir al carrito ({addedQty})
            </Link>
            <Link to="/" className="btn-secondary">
              Seguir comprando
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
