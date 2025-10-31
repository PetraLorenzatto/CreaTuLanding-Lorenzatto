import Item from "./Item";

export default function ItemList({ items = [] }) {
  if (!items.length) return <p>No hay productos.</p>;
  return (
    <div className="product-grid">
      {items.map((p) => (
        <Item key={p.id} product={p} />
      ))}
    </div>
  );
}
