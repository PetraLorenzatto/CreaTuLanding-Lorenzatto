import Item from "./Item";

export default function ItemList({ items = [] }) {
  if (!items.length) return <p>No hay productos.</p>;

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
      marginTop: "20px"
    }}>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
