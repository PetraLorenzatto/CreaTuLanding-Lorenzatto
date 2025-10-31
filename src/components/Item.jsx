import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__img-wrap">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__price">
          $ {Number(product.price).toLocaleString("es-AR")}
        </p>
        <Link to={`/item/${product.id}`} className="product-card__btn">
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
