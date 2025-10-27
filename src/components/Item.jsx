function Item({ title, img, price }) {
    return (
        <div className="item-card">
            <h2 className="item-card-title">{title}</h2>
            <img
                className="item-card-img"
                height="300"
                src={img}
                alt={title}
            />
            <h3 className="item-card-price">Precio: $ {price}</h3>
        </div>
    );
}

export default Item;
