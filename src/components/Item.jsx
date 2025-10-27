import { Link } from "react-router-dom";

export default function Item({ id, title, img, price }) {
  return (
    <div className="item-card" style={{ width: 260, background: "#fff", borderRadius: 16, padding: 12, boxShadow: "0 10px 18px rgba(0,0,0,.15)", textAlign: "center" }}>
      <img src={img} alt={title} style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 12 }} />
      <h3 style={{ margin: "10px 0 6px", color: "#222" }}>{title}</h3>
      <p style={{ margin: 0, color: "#555", fontWeight: 600 }}>Precio: $ {price.toLocaleString("es-AR")}</p>
      <Link to={`/item/${id}`} className="ver-detalle" style={{ display: "inline-block", marginTop: 10, padding: "8px 12px", borderRadius: 12, background: "#f44566", color: "#fff", textDecoration: "none", fontWeight: 600 }}>Ver detalle</Link>
    </div>
  );
}