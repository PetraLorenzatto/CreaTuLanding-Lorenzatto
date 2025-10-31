import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import Loader from "../components/Loader";
import { getAllProducts, getProductsByCategory } from "../services/products";

export default function ItemListContainer({
  greeting = "¡Bienvenidos a Brillo Salvaje! ✨",
}) {
  const { id } = useParams(); // categoria
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const prom = id ? getProductsByCategory(id) : getAllProducts();
    Promise.resolve(prom)
      .then((data) => setItems(data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <main style={{ padding: 16 }}>
      <section className="texto-principal">
        <h1>{greeting}</h1>
        <p>Nuestros productos ✨</p>
      </section>
      {loading ? <Loader /> : <ItemList items={items} />}
    </main>
  );
}
