import childrenProducts from "./Children";
import "./Products.css";

function Children() {
  return (
    <div className="product-container">
      {childrenProducts.map((product) => (
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

export default Children;