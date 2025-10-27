import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../data/mockAPI";
import ItemList from "../components/ItemList"; // ✅ listado (no ItemDetail)

function filterByRouteCategory(items, routeCat) {
  if (!routeCat || routeCat === "Todos") return items;
  const key = routeCat.toLowerCase();
  return items.filter((p) => {
    const cat = (p.category || "").toLowerCase();
    const title = (p.title || "").toLowerCase();
    if (key.startsWith("bota")) return cat.includes("bota") || title.includes("bota");
    if (key.startsWith("sombr")) return cat.includes("sombr") || title.includes("sombr");
    if (key.startsWith("acces")) return cat.includes("acces") || title.includes("cintu");
    return cat.includes(key);
  });
}

export default function ItemListContainer({ greeting = "¡Bienvenidos a Brillo Salvaje!" }) {
  const { id: routeCategory } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  const filtered = useMemo(() => filterByRouteCategory(items, routeCategory), [items, routeCategory]);

  return (
    <main style={{ padding: 16 }}>
      <section className="texto-principal">
        <h1>{greeting}</h1>
        <p>Descubrí nuestras botas, sombreros y accesorios con alma western ✨</p>
      </section>

      {loading ? <p>Cargando…</p> : <ItemList items={filtered} />}
    </main>
  );
}
