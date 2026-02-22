import womenProducts from "./Women";
import "./Products.css";

function Women() {
  return (
    <div className="product-container">
      {womenProducts.map((product) => (
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

export default Women;