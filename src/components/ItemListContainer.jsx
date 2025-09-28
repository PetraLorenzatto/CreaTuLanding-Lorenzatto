import products from '../data/products';
import Item from './Item';
export default function ItemListContainer({ greeting }) {
    console.log(products);
    return (
        <section>
            <h2 >
                {greeting} ✨🤠
            </h2>
            <h4>Nuestros productos</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
                {
                    products.map(item => <Item key={item.id} {...item} />)
                }
            </div>
            <p>
                Muy pronto vas a ver acá el catálogo de botas y accesorios con MUCHO brillo ✨.
            </p>
        </section>
    );
}