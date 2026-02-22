import menProducts from "./Men";
import "./Products.css";

function Men() {
  return (
    <div className="product-container">
      {menProducts.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <h4>{product.price}</h4>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Men;