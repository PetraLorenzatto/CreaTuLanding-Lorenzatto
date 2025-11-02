// src/services/orders.js
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase/config";

// orderData = { buyer, cart, total }
export async function createOrder(orderData) {
  const { buyer, cart, total } = orderData;

  if (!Array.isArray(cart) || cart.length === 0) {
    throw new Error("Carrito vacío");
  }

  // 1) preparamos los items como queremos guardarlos
  const itemsForOrder = cart.map((p) => ({
    id: String(p.id),
    title: p.title,
    price: Number(p.price),
    qty: Number(p.qty),
    size: p.size ?? null, // 👈 ahora sí guardamos el talle
    img: p.img ?? null,
  }));

  // 2) creamos la orden
  const ordersRef = collection(db, "orders");

  // 3) antes de devolver, actualizamos stocks en un batch
  const batch = writeBatch(db);

  for (const item of cart) {
    // ref al producto
    const prodRef = doc(db, "products", String(item.id));
    const prodSnap = await getDoc(prodRef);

    if (!prodSnap.exists()) {
      // si no existe, lo salteamos, pero igual guardamos la orden
      continue;
    }

    const prodData = prodSnap.data();
    const currentStock = Number(prodData.stock ?? 0);

    // nuevo stock general (por las dudas)
    const newStock = currentStock - Number(item.qty);

    // armamos update
    const updateData = {
      stock: newStock >= 0 ? newStock : 0,
    };

    // si vino talle, bajamos el talle
    if (item.size) {
      const currentBySize = prodData.stockBySize || {};
      const currentSizeStock = Number(currentBySize[item.size] ?? 0);
      const newSizeStock = currentSizeStock - Number(item.qty);

      updateData[`stockBySize.${item.size}`] =
        newSizeStock >= 0 ? newSizeStock : 0;
    }

    batch.update(prodRef, updateData);
  }

  // 4) escribimos la orden
  const orderDoc = await addDoc(ordersRef, {
    buyer: {
      name: buyer.name,
      phone: buyer.phone,
      email: buyer.email,
    },
    items: itemsForOrder,
    total: Number(total),
    createdAt: serverTimestamp(),
  });

  // 5) aplicamos el batch recién después de crear la orden
  await batch.commit();

  return orderDoc.id;
}
