import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
// 👇 OBLIGO a usar este ItemDetail
import ItemDetail from "../components/ItemDetail";
import { getProductById } from "../services/products";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((data) => setProduct(data || null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

  return (
    <main style={{ padding: 16 }}>
      <ItemDetail product={product} />
    </main>
  );
}
