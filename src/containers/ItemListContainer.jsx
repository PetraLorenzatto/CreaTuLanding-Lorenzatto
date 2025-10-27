import { useEffect, useState } from "react";
import getMockAPIData from "../data/mockAPI";
import ItemList from "../components/ItemList";

export default function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getMockAPIData().then((data) => setItems(data));
    }, []);

    return (
        <section className="texto-principal">
            <h2>{greeting} ✨🤠</h2>
            <h4>Nuestros productos ✨</h4>
            <ItemList items={items} />
        </section>
    );
}
