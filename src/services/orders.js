import { db } from "../firebase/config";
import {
  addDoc,
  collection,
  serverTimestamp,
  writeBatch,
  doc,
  increment,
} from "firebase/firestore";

export async function createOrder({ buyer, items, total }) {
  const orderRef = await addDoc(collection(db, "orders"), {
    buyer,
    items,
    total,
    createdAt: serverTimestamp(),
  });

  const batch = writeBatch(db);

  items.forEach((item) => {
    const prodRef = doc(db, "products", String(item.id));
    batch.update(prodRef, {
      stock: increment(-item.qty),
    });
    if (item.size) {
      batch.update(prodRef, {
        [`stockBySize.${item.size}`]: increment(-item.qty),
      });
    }
  });

  await batch.commit();

  return orderRef.id;
}
