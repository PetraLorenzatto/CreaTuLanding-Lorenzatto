// src/pages/SeedProducts.jsx
import { useState } from "react";
import { db } from "../firebase/config";
import { collection, setDoc, doc } from "firebase/firestore";
import products from "../data/products";

export default function SeedProducts() {
    const [status, setStatus] = useState("");

    const handleSeed = async () => {
        setStatus("Cargando productos...");
        try {
            const colRef = collection(db, "products");

            // recorro tu mock y lo subo
            for (const prod of products) {
                // usamos el id del mock como id del doc
                const ref = doc(colRef, String(prod.id));
                await setDoc(ref, {
                    title: prod.title,
                    img: prod.img,
                    description: prod.description,
                    price: Number(prod.price),
                    stock: Number(prod.stock) || 0,
                    category: prod.category,
                    // 👇 muy importante: si viene array lo guardamos como array
                    sizes: Array.isArray(prod.sizes) ? prod.sizes : [],
                    stockBySize: prod.stockBySize || {},
                });
            }

            setStatus("✅ Listo. Productos subidos a Firestore.");
        } catch (err) {
            console.error(err);
            setStatus("❌ Error al cargar: " + err.message);
        }
    };

    return (
        <main style={{ padding: 30 }}>
            <h1>Seed de productos (solo admin)</h1>
            <p>Hace clic para subir el mock a Firestore.</p>
            <button
                onClick={handleSeed}
                style={{
                    background: "#f44566",
                    color: "#fff",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: 8,
                    cursor: "pointer",
                    fontWeight: 600,
                }}
            >
                Cargar productos
            </button>
            <p style={{ marginTop: 14 }}>{status}</p>
        </main>
    );
}
