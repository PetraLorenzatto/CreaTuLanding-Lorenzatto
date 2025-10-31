import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  limit,
} from "firebase/firestore";
import fallbackProducts from "../data/products";

export async function getAllProducts() {
  try {
    const snap = await getDocs(collection(db, "products"));
    if (snap.empty) return fallbackProducts;
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (e) {
    console.warn("[products] fallback all:", e?.message || e);
    return fallbackProducts;
  }
}

export async function getProductsByCategory(categoryKey) {
  if (!categoryKey) return getAllProducts();
  try {
    const q = query(collection(db, "products"), where("category", ">=", ""), limit(200));
    const snap = await getDocs(q);
    const all = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    const key = categoryKey.toLowerCase();
    return all.filter((p) => {
      const cat = (p.category || "").toLowerCase();
      const title = (p.title || "").toLowerCase();
      if (key.startsWith("bota")) return cat.includes("bota") || title.includes("bota");
      if (key.startsWith("sombr")) return cat.includes("sombr") || title.includes("sombr");
      if (key.startsWith("acces")) return cat.includes("acces") || title.includes("cintu");
      return cat.includes(key);
    });
  } catch (e) {
    console.warn("[products] fallback by category:", e?.message || e);
    const key = categoryKey.toLowerCase();
    return fallbackProducts.filter((p) => {
      const cat = (p.category || "").toLowerCase();
      return cat.includes(key);
    });
  }
}

export async function getProductById(id) {
  try {
    const ref = doc(db, "products", String(id));
    const snap = await getDoc(ref);
    if (snap.exists()) return { id: snap.id, ...snap.data() };
    const all = await getAllProducts();
    return all.find((p) => String(p.id) === String(id));
  } catch (e) {
    console.warn("[products] fallback by id:", e?.message || e);
    return fallbackProducts.find((p) => String(p.id) === String(id));
  }
}
