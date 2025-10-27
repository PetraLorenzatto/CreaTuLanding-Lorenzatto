import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../data/mockAPI";
import ItemDetail from "../components/ItemDetail"; // ✅ acá sí

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProductById(id).then((data) => {
      setProduct(data || null);
      setLoading(false);
    });
  }, [id]);

  return (
    <main style={{ padding: 16 }}>
      {loading ? <p>Cargando…</p> : <ItemDetail product={product} />}
    </main>
  );
}
