import "./products.css";
import "../../styles.css";
export function ProductCard({ product }) {
  return (
    <div className="product-card card card-w-badge">
      <div className="card-image">
        <img alt="" className="card-img product-image" src={product.image} />
        {product.tag && (
          <div className="badge badge-bestseller">{product.tag}</div>
        )}

        <div className="product-rating">
          {product.rating}
          <i className="material-icons">star_rate</i>
        </div>
      </div>

      <div className="card-header">
        <div className="card-title product-title">{product.title}</div>
        <i className="card-subtitle wishlist material-icons">favorite_border</i>
      </div>
      <div className="card-content">
        <div className="product-description">{product.description}</div>
        <div className="product-price-description mt-3 mb-1x1">
          <div className="product-price product-discount-price">
            <i className="material-icons">currency_rupee</i>
            {product.price - product.discount}
          </div>
          {product.discount && 
            <div className="product-price product-sell-price">
              <i className="material-icons">currency_rupee</i>
              <s>{product.price}</s>
            </div>
          } 
          {product.discount && 
            <div className="product-price product-discount">
              <i className="material-icons">currency_rupee</i>
              {product.discount} off
            </div>
          }
        </div>
      </div>
      <div className="card-footer">
        <div className="action-button">
          <button className="btn-basic btn-primary">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
