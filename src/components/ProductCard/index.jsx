import "./style.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card-container">
      <img
        alt={`${product.type} image`}
        src={product.image}
        className="card-image"
      />
      <p className="card-description">{product.description}</p>
      <button className={`card-button ${"card-button-" + product.type}`}>
        {product.type}
      </button>
    </div>
  );
};

export default ProductCard;
